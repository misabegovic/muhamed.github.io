// Reads the CV (files/_cv/cv.html, the one source) the way a browser does and
// writes two machine-readable copies of it, so they never drift from the PDF:
//   files/_data/cv.json  the CV as data, rendered as the one-column /cv/ page
//   files/cv.json        the same CV in the JSON Resume schema (jsonresume.org)
// Role dates come from data-start / data-end on each .role; roles done through
// the company carry none. A role's place is the .place at the start of its
// .about line, and the rest of that line is its summary. Run after every CV
// change, alongside the PDF render (render-cv-pdf.js):
//   NODE_PATH=<dir with playwright-core> CHROME=<chromium> node .github/scripts/render-cv-data.js
const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const SITE = path.join(__dirname, '..', '..', 'files');
const SOURCE = path.join(SITE, '_cv', 'cv.html');
const URL = 'https://muhamed.at';

function readCv() {
  const text = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
  const role = (el, nested) => {
    const h3 = el.querySelector('h3');
    const at = h3.querySelector('.at');
    const name = h3.cloneNode(true);
    if (name.querySelector('.at')) name.querySelector('.at').remove();
    const about = el.querySelector('.about');
    const place = about && about.querySelector('.place');
    const summary = place ? text(about).slice(text(place).length).replace(/^\s*·\s*/, '') : text(about);
    return {
      title: text(name),
      at: text(at).replace(/^·\s*/, ''),
      location: text(place) || null,
      summary: summary || null,
      start: el.dataset.start || null,
      end: el.dataset.end || null,
      nested,
      extra: { ...el.dataset },
      bullets: [...el.querySelectorAll('li')].map(text),
    };
  };
  const section = (name) => [...document.querySelectorAll('section')].find((s) => text(s.querySelector('h2')).startsWith(name));
  // Roles inside .nested, or marked data-under, belong to the company above
  // them and carry no dates of their own (the owner's choice, 2026-09-29).
  // Client work there is headed by what was done, not by the client's name.
  const roles = (name) => [...document.querySelectorAll('section')]
    .filter((s) => text(s.querySelector('h2')).startsWith(name))
    .flatMap((s) => [...s.querySelectorAll('.role')].map((r) => role(r, !!r.closest('.nested') || !!r.dataset.under)));
  const header = document.querySelector('header');
  const skills = section('Skills');
  return {
    name: header.querySelector('h1').innerHTML.replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
    title: text(header.querySelector('.title')),
    summary: text(document.querySelector('.lead')),
    contact: header.querySelector('.contact').innerHTML.split(/<br[^>]*>/).map((l) => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean),
    experience: roles('Experience'),
    skills: [...skills.querySelectorAll('.hat')].map((hat) => ({
      group: text(hat).replace(/:$/, ''),
      items: [...hat.nextElementSibling.querySelectorAll('span')].map(text),
    })),
    open_source: roles('Projects').map((r) => ({ name: r.title, role: r.at, text: r.summary })),
    education: roles('Education'),
    languages: [...section('Languages').querySelectorAll('b')].map((b) => ({ language: text(b), fluency: text(b.nextSibling).replace(/\s*·\s*$/, '') })),
    volunteering: roles('Volunteering'),
    recommendations: [...document.querySelectorAll('.quote')].map((q) => ({
      text: text(q.querySelector('p')).replace(/^"|"$/g, ''),
      by: text(q.querySelector('.who b')),
      context: text(q.querySelector('.who')).replace(/^.*?·\s*/, ''),
    })),
  };
}

function display(date) {
  if (!date) return 'Present';
  const [y, m] = date.split('-');
  return m ? `${m}/${y}` : y;
}

function jsonResume(cv) {
  const [city, country] = cv.contact[1].split(', ');
  const profile = (network, url) => ({ network, username: url.split('/').pop(), url: `https://${url}` });
  // Work done through the company names no client (the owner's choice,
  // 2026-11-25): its organisation is the company itself.
  const company = cv.experience.find((r) => !r.nested);
  const work = cv.experience.map((r) => ({
    name: r.at || (r.nested && company ? company.at : ''), position: r.title, location: r.location, startDate: r.start, endDate: r.end || undefined,
    summary: r.summary || undefined, highlights: r.bullets,
  }));
  return {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: cv.name, label: cv.title, image: `${URL}/images/profile.jpg`, email: cv.contact[0], url: URL,
      summary: cv.summary,
      location: { city, countryCode: country === 'Austria' ? 'AT' : country },
      profiles: [
        profile('LinkedIn', cv.contact.find((c) => c.startsWith('linkedin'))),
        profile('X', cv.contact.find((c) => c.startsWith('x.com'))),
        profile('GitHub', cv.contact.find((c) => c.startsWith('github'))),
      ],
    },
    work,
    volunteer: cv.volunteering.map((r) => ({
      organization: r.at, position: r.title, startDate: r.start, endDate: r.end || undefined, summary: r.summary,
    })),
    education: cv.education.map((r) => ({
      institution: r.extra.institution, studyType: r.extra.studyType, area: r.extra.area, startDate: r.start, endDate: r.end || undefined,
    })),
    skills: cv.skills.map((s) => ({ name: s.group, keywords: s.items })),
    languages: cv.languages,
    projects: cv.open_source.map((p) => ({ name: p.name, roles: [p.role], description: p.text })),
    references: cv.recommendations.map((q) => ({ name: `${q.by}, ${q.context}`, reference: q.text })),
    meta: { canonical: `${URL}/cv.json` },
  };
}

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || undefined });
  const p = await b.newPage();
  await p.goto('file://' + SOURCE);
  const cv = await p.evaluate(readCv);
  await b.close();
  for (const r of [...cv.experience, ...cv.education, ...cv.volunteering]) {
    r.dates = r.start ? `${display(r.start)} - ${display(r.end)}` : null;
  }
  fs.writeFileSync(path.join(SITE, '_data', 'cv.json'), JSON.stringify(cv, null, 2) + '\n');
  fs.writeFileSync(path.join(SITE, 'cv.json'), JSON.stringify(jsonResume(cv), null, 2) + '\n');
  console.log(`cv: ${cv.experience.length} roles, ${cv.skills.length} skill groups`);
})();
