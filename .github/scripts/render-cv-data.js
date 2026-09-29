// Reads the CV (files/_cv/cv.html, the one source) the way a browser does and
// writes two machine-readable copies of it, so they never drift from the PDF:
//   files/_data/cv.json  the CV as data, rendered as the one-column /cv/ page
//   files/cv.json        the same CV in the JSON Resume schema (jsonresume.org)
// Role dates come from data-start / data-end on each .role, which the PDF does
// not print. Run after every CV change, alongside the PDF render:
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
    return {
      title: text(h3.cloneNode(true).childNodes[0]),
      at: text(at).replace(/^·\s*/, ''),
      meta: text(el.querySelector('.meta')),
      start: el.dataset.start || null,
      end: el.dataset.end || null,
      nested,
      extra: { ...el.dataset },
      bullets: [...el.querySelectorAll('li')].map(text),
    };
  };
  const section = (name) => [...document.querySelectorAll('section')].find((s) => text(s.querySelector('h2')).startsWith(name));
  const roles = (name) => [...document.querySelectorAll('section')]
    .filter((s) => text(s.querySelector('h2')).startsWith(name))
    .flatMap((s) => [...s.querySelectorAll('.role')].map((r) => role(r, !!r.closest('.nested'))));
  const header = document.querySelector('header');
  const skills = section('Skills');
  return {
    name: header.querySelector('h1').innerHTML.replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
    title: text(header.querySelector('.title')),
    summary: text(header.querySelector('.lead')),
    contact: header.querySelector('.contact').innerHTML.split(/<br\s*\/?>/).map((l) => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean),
    experience: roles('Experience'),
    skills: [...skills.querySelectorAll('.hat')].map((hat) => ({
      group: text(hat),
      items: [...hat.nextElementSibling.querySelectorAll('span')].map(text),
    })),
    open_source: roles('Open Source').map((r) => ({ name: r.title, role: r.at, text: r.bullets.join(' ') })),
    education: roles('Education'),
    languages: [...section('Languages').querySelectorAll('b')].map((b) => ({ language: text(b), fluency: text(b.nextSibling).replace(/\s*·\s*$/, '') })),
    community: roles('Community'),
    recommendations: [...document.querySelectorAll('.quote')].map((q) => ({
      text: text(q.querySelector('p')).replace(/^"|"$/g, ''),
      by: text(q.querySelector('.who b')),
      context: text(q.querySelector('.who')).replace(/^.*?·\s*/, ''),
    })),
  };
}

// "11/2021 - 12/2024 · Vienna, Austria · Maker of …" carries its own dates and
// place; the nested roles' meta is a summary only.
function splitMeta(meta) {
  const parts = meta.split(' · ');
  if (/^\d{2}\/\d{4}|^\d{4}/.test(parts[0])) return { location: parts[1] || null, summary: parts.slice(2).join(' · ') || null };
  return { location: null, summary: meta || null };
}

function display(date) {
  if (!date) return 'Present';
  const [y, m] = date.split('-');
  return m ? `${m}/${y}` : y;
}

function jsonResume(cv) {
  const [city, country] = cv.contact[1].split(', ');
  const profile = (network, url) => ({ network, username: url.split('/').pop(), url: `https://${url}` });
  const work = cv.experience.map((r) => {
    const { location, summary } = splitMeta(r.meta);
    return {
      name: r.at, position: r.title, location, startDate: r.start, endDate: r.end || undefined,
      summary: summary || undefined, highlights: r.bullets,
    };
  });
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
    volunteer: cv.community.map((r) => ({
      organization: r.extra.organization, position: r.title, startDate: r.start, endDate: r.end || undefined, summary: r.extra.summary,
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
  for (const r of [...cv.experience, ...cv.education, ...cv.community]) {
    r.dates = r.start ? `${display(r.start)} - ${display(r.end)}` : null;
    Object.assign(r, cv.experience.includes(r) ? splitMeta(r.meta) : { location: null, summary: null });
  }
  fs.writeFileSync(path.join(SITE, '_data', 'cv.json'), JSON.stringify(cv, null, 2) + '\n');
  fs.writeFileSync(path.join(SITE, 'cv.json'), JSON.stringify(jsonResume(cv), null, 2) + '\n');
  console.log(`cv: ${cv.experience.length} roles, ${cv.skills.length} skill groups`);
})();
