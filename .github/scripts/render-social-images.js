const path = require('path');
const fs = require('fs');
// playwright-core when installed, else puppeteer-core (the same Chrome either way).
let launchBrowser;
try {
  const { chromium } = require('playwright-core');
  launchBrowser = async (opts) => {
    const b = await chromium.launch(opts);
    return { page: (w, h) => b.newPage({ viewport: { width: w, height: h } }), close: () => b.close() };
  };
} catch (e) {
  const puppeteer = require('puppeteer-core');
  launchBrowser = async (opts) => {
    const b = await puppeteer.launch({ ...opts, args: [...(opts.args || []), '--no-sandbox'] });
    return { page: async (w, h) => { const p = await b.newPage(); await p.setViewport({ width: w, height: h }); return p; }, close: () => b.close() };
  };
}

// Renders the share preview, the LinkedIn and X headers and the service post
// images into files/images/social/. Run from the repository root:
//   CHROME=/path/to/chrome node .github/scripts/render-social-images.js
// ONLY=<file name> renders just that image and leaves the others untouched.
// Needs playwright-core or puppeteer-core. Copy comes from
// files/_data/home.yml and services.yml; update it here when the services
// change. Project cards read each profile in files/_projects/ (its title and
// lead, else its entry's outcome or text in home.yml) and its thumbnail.
const SITE = path.join(__dirname, '..', '..', 'files');
const OUT = path.join(SITE, 'images/social');
fs.mkdirSync(OUT, { recursive: true });
const font = (f) => 'file://' + path.join(SITE, 'assets/fonts', f);
const photo = 'file://' + path.join(SITE, 'images/profile.jpg');
const goatconf = 'file://' + path.join(SITE, 'images/logos/goatconf.svg');

const base = `
@font-face { font-family: "SG"; src: url("${font('schibsted-grotesk-latin.woff2')}") format("woff2"); font-weight: 400 900; }
@font-face { font-family: "SG"; src: url("${font('schibsted-grotesk-latin-ext.woff2')}") format("woff2"); font-weight: 400 900; unicode-range: U+0100-024F; }
:root { --paper:#fff; --ink:#141414; --ink-2:#474747; --ink-3:#666; --line:#e2e2de; --yellow:#ffd21f; --dark:#111; --on-dark:#f2f2f0; --on-dark-2:#b9b9b5; }
* { box-sizing: border-box; margin: 0; }
html, body { background: var(--paper); }
body { font-family: "SG", sans-serif; color: var(--ink); overflow: hidden; }
mark { background: linear-gradient(transparent 58%, var(--yellow) 58%, var(--yellow) 92%, transparent 92%); color: inherit; padding-inline: .04em; -webkit-box-decoration-break: clone; box-decoration-break: clone; }
.stage { position: relative; width: var(--w); height: var(--h); overflow: hidden; }
.wordmark { font-weight: 800; letter-spacing: -.02em; }
h1, h2 { font-weight: 800; letter-spacing: -.035em; line-height: .98; text-wrap: balance; }
.rule { border-top: 3px solid var(--ink); }
.muted { color: var(--ink-2); }
.foot { display: flex; align-items: center; gap: .8em; color: var(--ink-3); font-weight: 500; }
.foot img { width: 2.4em; height: 2.4em; border-radius: 50%; object-fit: cover; object-position: 50% 32%; }
.foot b { color: var(--ink); font-weight: 700; }
.hl-dark { background: var(--yellow); color: var(--ink); padding: 0 .12em; -webkit-box-decoration-break: clone; box-decoration-break: clone; }
.fmt { display: inline-block; border: 1px solid var(--line); border-radius: 999px; padding: .35em 1em; color: var(--ink-2); font-weight: 500; }
`;

const services = [
  { slug: 'build', name: 'Build', title: 'Hands-on product engineering', text: 'I join your team as a senior engineer and build the product or feature end to end, from spec to production.', format: 'Embedded, part-time or full-time' },
  { slug: 'lead', name: 'Lead', title: 'Technical lead for your team', text: 'I lead your engineering team as a fractional or interim technical lead: technical direction, architecture, delivery, and the people.', format: 'Fractional or interim' },
  { slug: 'review', name: 'Review', title: 'Architecture review', text: 'A short, fixed-scope look at your codebase and system: what holds, what will break, and what to fix first.', format: 'Fixed scope, one to two weeks' },
  { slug: 'ai-native', name: 'AI-native', title: 'Make your company AI-native', text: 'How you build and what you build. I set up a knowledge base your people and agents work from, with architecture rules checked in CI, and build AI features into your product that hold up in production, using open-source tools I build and teach.', format: 'Workshops, then setup in your codebase' },
];

function servicePost(s, w, h) {
  const u = w / 1200; // scale unit
  return `<div class="stage" style="--w:${w}px;--h:${h}px;padding:${64 * u}px ${72 * u}px;display:grid;grid-template-rows:auto 1fr auto;font-size:${22 * u}px">
    <div class="rule" style="padding-top:${18 * u}px;display:flex;justify-content:space-between;align-items:baseline">
      <span class="wordmark" style="font-size:${26 * u}px">Muhamed Isabegovic</span>
      <span class="muted" style="font-weight:500">Senior Product Engineer and Technical Lead, AI-native</span>
    </div>
    <div style="align-self:center">
      <h1 style="font-size:${128 * u}px"><mark>${s.name}</mark></h1>
      <h2 style="font-size:${48 * u}px;margin-top:${22 * u}px;max-width:${900 * u}px">${s.title}</h2>
      <p class="muted" style="font-size:${24 * u}px;line-height:1.5;margin-top:${22 * u}px;max-width:${880 * u}px">${s.text}</p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div class="foot"><img src="${photo}" alt=""><span><b>muhamed.at/services</b> · info@muhamed.at</span></div>
      <span class="fmt">${s.format}</span>
    </div>
  </div>`;
}

function share(w, h) {
  return `<div class="stage" style="--w:${w}px;--h:${h}px;display:grid;grid-template-columns:1fr 400px;">
    <div style="padding:64px 56px 56px 72px;display:grid;grid-template-rows:auto 1fr auto">
      <div class="rule" style="padding-top:18px"><span class="wordmark" style="font-size:26px">Muhamed Isabegovic</span></div>
      <h1 style="font-size:72px;align-self:center">I build products and lead the teams that <mark>ship them</mark>.</h1>
      <div class="muted" style="font-size:22px;font-weight:500">Senior Product Engineer and Technical Lead, AI-native · Vienna · <b style="color:var(--ink)">muhamed.at</b></div>
    </div>
    <div style="background:var(--dark)"><img src="${photo}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:50% 30%"></div>
  </div>`;
}

// One card per brain note that earns its own preview, in the share card's
// layout: the note's title on the left, its subject's mark on the right.
function goatconfNote(w, h) {
  return `<div class="stage" style="--w:${w}px;--h:${h}px;display:grid;grid-template-columns:1fr 400px;">
    <div style="padding:64px 56px 56px 72px;display:grid;grid-template-rows:auto 1fr auto">
      <div class="rule" style="padding-top:18px"><span class="wordmark" style="font-size:26px">Muhamed Isabegovic</span></div>
      <h1 style="font-size:68px;align-self:center">GoatConf: a free conference in Tuzla, built like <mark>Pi</mark>.</h1>
      <div class="muted" style="font-size:22px;font-weight:500">Tuzla · 3–5 June 2027 · Free to attend · <b style="color:var(--ink)">goatconf.com</b></div>
    </div>
    <div style="background:#0b3d91;display:grid;place-items:center"><img src="${goatconf}" alt="" style="width:280px;height:280px;object-fit:cover;object-position:left center"></div>
  </div>`;
}

// Profile headers: one dark design for LinkedIn and X. One idea, in the
// owner's words (2026-09-29): ownership, not a list of roles or clients.
// Both networks put the avatar over the bottom-left and crop the edges on
// phones, so the copy sits right of safeLeft and away from top and bottom.
function header(w, h, safeLeft) {
  const u = w / 1584;
  // On the portrait's amber backdrop (files/_data/brand.yml), so banner and photo match.
  return `<div class="stage" style="--w:${w}px;--h:${h}px;background:linear-gradient(100deg,#ffb93f,#e8920c);color:var(--ink);display:flex;align-items:center;padding:0 ${64 * u}px 0 ${safeLeft}px">
    <div>
      <h1 style="font-size:${64 * u}px;line-height:1.04">I build products and lead<br>the teams that <span class="hl-dark" style="background:var(--ink);color:#ffb93f">ship them</span>.</h1>
      <p style="margin-top:${22 * u}px;font-size:${24 * u}px;font-weight:500"><b>Ten years</b> of taking software from an idea to production. &nbsp;<b>muhamed.at</b></p>
    </div>
  </div>`;
}

// Project profiles: one share card per page in files/_projects/, in the
// share card's layout: the project and its one-liner on the left, its
// thumbnail on the right.
const homeYml = fs.readFileSync(path.join(SITE, '_data/home.yml'), 'utf8');
const field = (text, key) => { const m = text.match(new RegExp('^' + key + ': *"?(.*?)"?$', 'm')); return m ? m[1] : null; };
const entryLine = (key) => {
  // The block of the open_source (name:) or side_projects (id:) entry, and its outcome or text.
  const start = homeYml.search(new RegExp('^  - (name|id): ' + key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$', 'm'));
  if (start < 0) return null;
  const block = homeYml.slice(start).split(/\n  - /)[0];
  const outcome = block.match(/^    outcome: (.*)$/m);
  if (outcome) return outcome[1];
  const text = block.match(/^    text: >-\n((?:      .*\n?)+)/m);
  return text ? text[1].replace(/\s+/g, ' ').replace(/<[^>]+>/g, '').trim() : null;
};
const escapeHtml = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const projects = fs.readdirSync(path.join(SITE, '_projects')).filter((f) => f.endsWith('.md')).map((f) => {
  const fm = fs.readFileSync(path.join(SITE, '_projects', f), 'utf8').split(/^---$/m)[1];
  return { slug: f.replace(/\.md$/, ''), title: field(fm, 'title'), lead: field(fm, 'lead') || entryLine(field(fm, 'home_key')), thumb: field(fm, 'thumb') };
});

function projectCard(pr, w, h) {
  // The largest copy of the thumbnail there is (screenshots of usput.ba stop at 1440).
  const sized = ['-1600', '-1440', '-800'].map((w) => path.join(SITE, pr.thumb.replace(/^\//, '') + w + '.webp'));
  const thumb = 'file://' + (sized.find((f) => fs.existsSync(f)) || sized[0]);
  const n = pr.title.length;
  const size = n <= 8 ? 80 : n <= 14 ? 68 : n <= 20 ? 58 : 56;
  return `<div class="stage" style="--w:${w}px;--h:${h}px;display:grid;grid-template-columns:1fr 520px;">
    <div style="padding:64px 48px 56px 72px;display:grid;grid-template-rows:auto 1fr auto">
      <div class="rule" style="padding-top:18px"><span class="wordmark" style="font-size:26px">Muhamed Isabegovic</span></div>
      <div style="align-self:center">
        <h1 style="font-size:${size}px;${n <= 20 ? 'white-space:nowrap;' : ''}"><mark>${escapeHtml(pr.title)}</mark></h1>
        <p class="muted" style="font-size:24px;line-height:1.45;margin-top:22px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden">${escapeHtml(pr.lead || '')}</p>
      </div>
      <div class="muted" style="font-size:22px;font-weight:500"><b style="color:var(--ink)">muhamed.at/projects/${pr.slug}</b></div>
    </div>
    <div style="background:#f3f3f1;display:grid;place-items:center;padding:40px">
      <img src="${thumb}" alt="" style="width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top;border:1px solid var(--line);border-radius:8px;box-shadow:0 24px 48px -24px rgba(20,20,20,.35)">
    </div>
  </div>`;
}

const jobs = [
  ['share.png', 1200, 630, share(1200, 630)],
  ['goatconf-2027.png', 1200, 630, goatconfNote(1200, 630)],
  ['linkedin-header.png', 1584, 396, header(1584, 396, 470)],
  ['x-header.png', 1500, 500, header(1500, 500, 450)],
  ...services.flatMap((s) => [
    [`service-${s.slug}-linkedin.png`, 1200, 627, servicePost(s, 1200, 627)],
    [`service-${s.slug}-x.png`, 1600, 900, servicePost(s, 1600, 900)],
  ]),
  ...projects.map((pr) => [`project-${pr.slug}.png`, 1200, 630, projectCard(pr, 1200, 630)]),
];

(async () => {
  const b = await launchBrowser({ executablePath: process.env.CHROME, args: ['--allow-file-access-from-files'] });
  for (const [name, w, h, html] of jobs.filter(([n]) => !process.env.ONLY || n === process.env.ONLY)) {
    const p = await b.page(w, h);
    const file = path.join(require('os').tmpdir(), 'render-social.html');
    fs.writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"><style>${base}</style></head><body>${html}</body></html>`);
    await p.goto('file://' + file, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    const over = await p.evaluate(() => { const s = document.querySelector('.stage'); return [...s.querySelectorAll('*')].some((e) => { const r = e.getBoundingClientRect(); return r.bottom > s.clientHeight + 1 || r.right > s.clientWidth + 1; }); });
    await p.screenshot({ path: path.join(OUT, name) });
    console.log(name, over ? 'OVERFLOW' : 'ok');
    await p.close();
  }
  await b.close();
})();
