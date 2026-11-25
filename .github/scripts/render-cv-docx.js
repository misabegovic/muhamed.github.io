// Writes the CV as a Word file, files/cv/Muhamed_Isabegovic_CV.docx, for
// application forms that parse .docx more reliably than PDF. It reads
// files/_data/cv.json, which render-cv-data.js makes from the one source
// (files/_cv/cv.html), so run it after that script:
//   NODE_PATH=<dir with docx> node .github/scripts/render-cv-docx.js
// OUT=<path> writes the file elsewhere, for a preview.
// The layout is deliberately plain: one column, Word's own heading styles,
// real list items, each role's dates at a right tab on its title line.
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, HeadingLevel, LevelFormat,
  AlignmentType, BorderStyle, TabStopType,
} = require('docx');

const SITE = path.join(__dirname, '..', '..', 'files');
const OUT = process.env.OUT || path.join(SITE, 'cv', 'Muhamed_Isabegovic_CV.docx');
const cv = JSON.parse(fs.readFileSync(path.join(SITE, '_data', 'cv.json'), 'utf8'));

const FONT = 'Arial';
const INK = '141414';
const INK2 = '474747';
const BODY = 22; // half-points: 11pt
const NEST = 280; // indent of the roles done through the company, in twentieths of a point
const WIDTH = 11906 - 2 * 1080; // A4 between 0.75 inch margins: where the dates' right tab sits

const run = (text, o = {}) => new TextRun({ text, font: FONT, size: BODY, color: INK, ...o });
const para = (children, o = {}) => new Paragraph({ children: [].concat(children), spacing: { before: 0, after: 60 }, ...o });

const section = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text, font: FONT, size: 26, bold: true, color: INK })],
  border: { top: { style: BorderStyle.SINGLE, size: 12, color: INK, space: 4 } },
});

// Title and employer at the left, dates at a right tab on the same line.
function head(title, at, dates, indent) {
  const children = [new TextRun({ text: title, font: FONT, size: 23, bold: true, color: INK })];
  if (at) children.push(new TextRun({ text: ` · ${at}`, font: FONT, size: 23, bold: false, color: INK2 }));
  if (dates) {
    children.push(new TextRun({ text: `\t${dates}`, font: FONT, size: BODY, bold: true, color: INK }));
  }
  return new Paragraph({
    heading: HeadingLevel.HEADING_2, children, indent: indent ? { left: indent } : undefined,
    tabStops: [{ type: TabStopType.RIGHT, position: WIDTH }],
  });
}

const about = (text, indent) => para(run(text, { color: INK2 }), { indent: indent ? { left: indent } : undefined });
const bullet = (text, nested) => new Paragraph({
  children: [run(text)], numbering: { reference: nested ? 'nested' : 'bullets', level: 0 }, spacing: { before: 0, after: 40 },
});

function role(r) {
  const indent = r.nested ? NEST : 0;
  const out = [head(r.title, r.at, r.dates, indent)];
  const line = [r.location, r.summary].filter(Boolean).join(' · ');
  if (line) out.push(about(line, indent));
  for (const b of r.bullets || []) out.push(bullet(b, r.nested));
  return out;
}

const link = (c) => new ExternalHyperlink({
  link: c.includes('@') ? `mailto:${c}` : `https://${c}`,
  children: [run(c, { color: INK2 })],
});
const contact = cv.contact.flatMap((c, i) => [
  ...(i ? [run(' · ', { color: INK2 })] : []),
  c.includes('@') || c.includes('.') ? link(c) : run(c, { color: INK2 }),
]);

const children = [
  new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: cv.name, font: FONT, size: 44, bold: true, color: INK })] }),
  para(run(cv.title, { size: 24, bold: true }), { spacing: { before: 0, after: 80 } }),
  para(contact, { spacing: { before: 0, after: 120 } }),
  section('Summary'),
  para(run(cv.summary)),
  section('Experience'),
  ...cv.experience.flatMap(role),
  section('Skills'),
  ...cv.skills.map((s) => para([run(`${s.group}: `, { bold: true }), run(s.items.join(', '))])),
  section('Projects'),
  ...cv.open_source.flatMap((p) => [head(p.name, p.role), about(p.text)]),
  section('Education'),
  ...cv.education.flatMap(role),
  section('Languages'),
  para(cv.languages.flatMap((l, i) => [...(i ? [run(' · ')] : []), run(l.language, { bold: true }), run(` ${l.fluency}`)])),
  section('Volunteering'),
  ...cv.volunteering.flatMap(role),
  section('Recommendations'),
  ...cv.recommendations.flatMap((q) => [
    para(run(`"${q.text}"`), { spacing: { before: 80, after: 40 } }),
    para([run(q.by, { bold: true }), run(` · ${q.context}`, { color: INK2 })], { spacing: { before: 0, after: 120 } }),
  ]),
];

const level = (left) => [{
  level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
  style: { paragraph: { indent: { left, hanging: 220 } }, run: { font: FONT } },
}];

const doc = new Document({
  creator: cv.name,
  title: `${cv.name}, CV`,
  description: `${cv.title}. ${cv.contact[1]}.`,
  styles: {
    default: {
      document: { run: { font: FONT, size: BODY, color: INK } },
      title: { run: { font: FONT, size: 44, bold: true, color: INK }, paragraph: { spacing: { before: 0, after: 60 }, keepNext: true } },
      heading1: { run: { font: FONT, size: 26, bold: true, color: INK }, paragraph: { spacing: { before: 240, after: 100 }, keepNext: true } },
      heading2: { run: { font: FONT, size: 23, bold: true, color: INK }, paragraph: { spacing: { before: 140, after: 30 }, keepNext: true } },
    },
  },
  numbering: { config: [{ reference: 'bullets', levels: level(260) }, { reference: 'nested', levels: level(NEST + 260) }] },
  sections: [{
    properties: { page: { margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 } } }, // A4, 0.75 inch margins
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log(`cv docx: ${Math.round(buf.length / 1024)} KB, ${OUT}`);
});
