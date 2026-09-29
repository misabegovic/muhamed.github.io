const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright-core');

// Renders the share preview, the LinkedIn and X headers and the service post
// images into files/images/social/. Run from the repository root:
//   CHROME=/path/to/chrome node .github/scripts/render-social-images.js
// Needs playwright-core. Copy comes from files/_data/home.yml and services.yml;
// update it here when the services change.
const SITE = path.join(__dirname, '..', '..', 'files');
const OUT = path.join(SITE, 'images/social');
fs.mkdirSync(OUT, { recursive: true });
const font = (f) => 'file://' + path.join(SITE, 'assets/fonts', f);
const photo = 'file://' + path.join(SITE, 'images/profile.jpg');

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
  { slug: 'assess', name: 'Assess', title: 'How your team uses AI today', text: 'A short, concrete review of how your engineers work with coding agents: where it helps, where it quietly erodes quality, and a prioritised plan for what to change first.', format: 'A short, fixed-scope review' },
  { slug: 'enable', name: 'Enable', title: 'Workshop and setup, in your repository', text: 'One or two days with your team on your own codebase: specs and decision records as the contract with agents, guardrails they cannot bypass, and evals for the AI features you ship.', format: 'One or two days, on your codebase' },
  { slug: 'build', name: 'Build', title: 'Fractional AI product engineering', text: 'Hands-on design and delivery of AI features in your product: LLM pipelines with structured outputs, evaluation and observability, built with EU AI regulation in mind.', format: 'One to two days a week, embedded' },
  { slug: 'talks', name: 'Talks', title: 'At your conference or meetup', text: 'On AI-native engineering, guardrails for coding agents, or Ruby. I founded RubyConf Austria and took full ownership of EuRuKo 2024, so I know what a programme needs.', format: 'Conferences and meetups' },
];

function servicePost(s, w, h) {
  const u = w / 1200; // scale unit
  return `<div class="stage" style="--w:${w}px;--h:${h}px;padding:${64 * u}px ${72 * u}px;display:grid;grid-template-rows:auto 1fr auto;font-size:${22 * u}px">
    <div class="rule" style="padding-top:${18 * u}px;display:flex;justify-content:space-between;align-items:baseline">
      <span class="wordmark" style="font-size:${26 * u}px">Muhamed Isabegovic</span>
      <span class="muted" style="font-weight:500">AI engineering for product teams</span>
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
      <h1 style="font-size:66px;align-self:center">I help engineering teams ship with AI agents, <mark>without losing control</mark> of their code.</h1>
      <div class="muted" style="font-size:22px;font-weight:500">Product Engineer and Tech Lead, AI · Vienna · <b style="color:var(--ink)">muhamed.at</b></div>
    </div>
    <div style="background:var(--dark)"><img src="${photo}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:50% 30%"></div>
  </div>`;
}

// Profile headers: one dark design for LinkedIn and X. One idea, in the
// owner's words (2026-09-29): ownership, not a list of roles or clients.
// Both networks put the avatar over the bottom-left and crop the edges on
// phones, so the copy sits right of safeLeft and away from top and bottom.
function header(w, h, safeLeft) {
  const u = w / 1584;
  return `<div class="stage" style="--w:${w}px;--h:${h}px;background:var(--dark);color:var(--on-dark);display:flex;align-items:center;padding:0 ${64 * u}px 0 ${safeLeft}px">
    <div>
      <h1 style="font-size:${64 * u}px;line-height:1.04">I build products and lead<br>the teams that <span class="hl-dark">ship them</span>.</h1>
      <p style="margin-top:${22 * u}px;font-size:${24 * u}px;font-weight:500;color:var(--on-dark-2)">Ten years of taking software from an idea to production. &nbsp;<b style="color:var(--on-dark)">muhamed.at</b></p>
    </div>
  </div>`;
}

const jobs = [
  ['share.png', 1200, 630, share(1200, 630)],
  ['linkedin-header.png', 1584, 396, header(1584, 396, 470)],
  ['x-header.png', 1500, 500, header(1500, 500, 450)],
  ...services.flatMap((s) => [
    [`service-${s.slug}-linkedin.png`, 1200, 627, servicePost(s, 1200, 627)],
    [`service-${s.slug}-x.png`, 1600, 900, servicePost(s, 1600, 900)],
  ]),
];

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME, args: ['--allow-file-access-from-files'] });
  for (const [name, w, h, html] of jobs) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
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
