# Checks the CV PDF's own text order: every bullet must sit between its role's
# heading and the next role's heading when the file is read in stream order
# (pdftotext -raw, pypdf), which is how some applicant tracking systems read it.
# A layout-based extraction can look right while this order is wrong.
# Run after render-cv-pdf.js; needs poppler's pdftotext and pypdf:
#   python3 .github/scripts/check-cv-pdf-order.py [pdf] [cv.json]
import sys, subprocess, re, json
from pypdf import PdfReader
import os
SITE = os.path.join(os.path.dirname(__file__), "..", "..", "files")
f = sys.argv[1] if len(sys.argv) > 1 else os.path.join(SITE, "cv", "Muhamed_Isabegovic_CV.pdf")
data = json.load(open(sys.argv[2] if len(sys.argv) > 2 else os.path.join(SITE, "_data", "cv.json")))
raw = subprocess.run(["pdftotext", "-raw", f, "-"], capture_output=True, text=True).stdout
pp = "\n".join(p.extract_text() for p in PdfReader(f).pages)
norm = lambda s: re.sub(r"\s+", " ", s)
roles = data["experience"]
ok = True
for name, t in [("pdftotext -raw", raw), ("pypdf", pp)]:
    n = norm(t); bad = []
    pos = [n.find(norm(f'{r["title"]} · {r["at"]}')) for r in roles]
    for i, r in enumerate(roles):
        lo = pos[i]; hi = min([p for p in pos if p > lo] + [n.find("Skills Product and AI")])
        for b in r["bullets"]:
            bi = n.find(norm(b)[:40])
            if lo < 0 or not (lo < bi < hi): bad.append(f'{r["at"][:12]}: {b[:28]}')
    print(f"{name}: {'every bullet under its own role' if not bad else str(len(bad)) + ' bullets out of place, e.g. ' + bad[0]}")
    ok = ok and not bad
sys.exit(0 if ok else 1)
