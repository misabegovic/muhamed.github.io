// Prints the CV (files/_cv/cv.html, the one source) to the PDF people download,
// files/cv/Muhamed_Isabegovic_CV.pdf: A4, tagged, with its links and outline.
// Run after every CV change, alongside render-cv-data.js:
//   NODE_PATH=<dir with playwright-core> CHROME=<chromium> node .github/scripts/render-cv-pdf.js
// OUT=<path> writes the PDF elsewhere, for a preview. The CV is meant to be
// three pages; the script says so when it is not.
const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const SITE = path.join(__dirname, '..', '..', 'files');
const SOURCE = path.join(SITE, '_cv', 'cv.html');
const OUT = process.env.OUT || path.join(SITE, 'cv', 'Muhamed_Isabegovic_CV.pdf');
const PAGES = 3;

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || undefined });
  const p = await b.newPage();
  await p.goto('file://' + SOURCE);
  await p.evaluate(() => document.fonts.ready);
  const pdf = await p.pdf({ path: OUT, preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
  await b.close();
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page\b/g) || []).length;
  console.log(`cv pdf: ${pages} pages, ${Math.round(pdf.length / 1024)} KB, ${OUT}`);
  if (pages !== PAGES) { console.error(`cv pdf: expected ${PAGES} pages`); process.exitCode = 1; }
})();
