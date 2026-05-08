#!/usr/bin/env python3
"""Composite the site's Open Graph image: team-hero photo + ASP logo + tagline."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
FONTS = Path("/tmp/asp-fonts")

OUT = PUBLIC / "og-image.png"
W, H = 1200, 630

ASP_BLUE_DARK = (0, 26, 77)

bg = Image.open(PUBLIC / "images/backgrounds/hero-trades-1.jpg").convert("RGB")
bw, bh = bg.size
target_ratio = W / H
src_ratio = bw / bh
if src_ratio > target_ratio:
    new_w = int(bh * target_ratio)
    bg = bg.crop(((bw - new_w) // 2, 0, (bw - new_w) // 2 + new_w, bh))
else:
    new_h = int(bw / target_ratio)
    bg = bg.crop((0, (bh - new_h) // 2, bw, (bh - new_h) // 2 + new_h))
bg = bg.resize((W, H), Image.LANCZOS)

overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
for y in range(H):
    t = y / H
    alpha = int(120 + (210 - 120) * t)
    od.line([(0, y), (W, y)], fill=(*ASP_BLUE_DARK, alpha))

side = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(side)
for x in range(W):
    t = 1 - (x / W)
    alpha = int(140 * t)
    sd.line([(x, 0), (x, H)], fill=(0, 0, 0, alpha))

canvas = bg.convert("RGBA")
canvas = Image.alpha_composite(canvas, overlay)
canvas = Image.alpha_composite(canvas, side)

logo = Image.open(PUBLIC / "images/logos/asp-white.png").convert("RGBA")
logo_w = 480
logo_h = int(logo.size[1] * (logo_w / logo.size[0]))
logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

logo_x = 90
logo_y = 110
canvas.paste(logo, (logo_x, logo_y), logo)

draw = ImageDraw.Draw(canvas)
tagline_font = ImageFont.truetype(str(FONTS / "Poppins-Bold.ttf"), 64)
sub_font = ImageFont.truetype(str(FONTS / "Poppins-Regular.ttf"), 30)
url_font = ImageFont.truetype(str(FONTS / "Poppins-Bold.ttf"), 26)

tagline = "Assess. Strategize. Perform."
sub = "AI integrators for home service businesses."
url = "aspbranding.com"

tagline_y = logo_y + logo_h + 40
draw.text((logo_x, tagline_y), tagline, font=tagline_font, fill=(255, 255, 255, 255))

sub_y = tagline_y + 90
draw.text((logo_x, sub_y), sub, font=sub_font, fill=(220, 230, 250, 255))

url_bbox = draw.textbbox((0, 0), url, font=url_font)
url_w = url_bbox[2] - url_bbox[0]
draw.text((W - url_w - 90, H - 60), url, font=url_font, fill=(76, 201, 240, 255))

canvas.convert("RGB").save(OUT, "PNG", optimize=True)
print(f"Wrote {OUT} ({OUT.stat().st_size // 1024} KB)")
