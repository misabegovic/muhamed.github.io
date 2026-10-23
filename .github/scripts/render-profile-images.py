"""Renders every image made from the portrait, from the masters in files/brand/.

The two masters are the full-size portraits, kept side by side so the site can
switch between them:
  files/brand/muhamed-isabegovic-amber.jpg     on the amber backdrop (in use)
  files/brand/muhamed-isabegovic-original.jpg  on the dark studio backdrop

Writes, from the master named on the command line (default: amber):
  files/images/profile.jpg               full size: CV PDF, share images, JSON-LD
  files/images/profile-{480,800,1200}.webp  the pages' srcset
  files/favicon.ico, files/images/favicon-32x32.png, icon-512.png, apple-touch-icon.png
and, from both masters, the brand kit's downloads (files/brand/):
  muhamed-isabegovic-<photo>-{1080,400}.jpg  and  -avatar.png (800 px, round, transparent)

Run from the repository root, then re-render the CV PDF and the social images,
which embed images/profile.jpg:
  python3 .github/scripts/render-profile-images.py [amber|original]
Needs Pillow.
"""
import shutil
import sys
from pathlib import Path
from PIL import Image, ImageDraw

SITE = Path(__file__).resolve().parents[2] / "files"
BRAND = SITE / "brand"
PHOTOS = ("amber", "original")
# The face, as the icons have always framed it: a square of the 2048 px master.
FACE = (360, 140, 1680, 1460)


def master(photo):
    return Image.open(BRAND / f"muhamed-isabegovic-{photo}.jpg").convert("RGB")


def round_(im, size):
    """The image as a circle on transparency, drawn at 4x for a smooth edge."""
    big = size * 4
    mask = Image.new("L", (big, big), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, big - 1, big - 1), fill=255)
    out = im.resize((size, size), Image.LANCZOS).convert("RGBA")
    out.putalpha(mask.resize((size, size), Image.LANCZOS))
    return out


def site_images(photo):
    # A byte copy: re-encoding the JPEG would only lose detail.
    shutil.copyfile(BRAND / f"muhamed-isabegovic-{photo}.jpg", SITE / "images/profile.jpg")
    im = master(photo)
    for w in (480, 800, 1200):
        im.resize((w, w), Image.LANCZOS).save(SITE / f"images/profile-{w}.webp", quality=82, method=6)
    face = im.crop(FACE)
    round_(face, 512).save(SITE / "images/icon-512.png", optimize=True)
    round_(face, 32).save(SITE / "images/favicon-32x32.png", optimize=True)
    # iOS rounds the corners itself and shows transparency as black.
    face.resize((180, 180), Image.LANCZOS).save(SITE / "images/apple-touch-icon.png", optimize=True)
    round_(face, 48).save(SITE / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])


def kit_images(photo):
    im = master(photo)
    for w in (1080, 400):
        im.resize((w, w), Image.LANCZOS).save(BRAND / f"muhamed-isabegovic-{photo}-{w}.jpg", quality=90, optimize=True, progressive=True)
    round_(im, 800).save(BRAND / f"muhamed-isabegovic-{photo}-avatar.png", optimize=True)


if __name__ == "__main__":
    photo = sys.argv[1] if len(sys.argv) > 1 else "amber"
    if photo not in PHOTOS:
        sys.exit(f"usage: render-profile-images.py [{'|'.join(PHOTOS)}]")
    site_images(photo)
    for p in PHOTOS:
        kit_images(p)
    print(f"site images from the {photo} portrait; brand kit from {', '.join(PHOTOS)}")
