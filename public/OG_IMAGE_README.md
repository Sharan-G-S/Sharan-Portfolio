This folder contains `og-image.svg` (1200×630) — a high-quality social preview image.

To generate a PNG (preferred for some social platforms) from the SVG locally, use one of the following methods:

1) Using Inkscape (recommended):

```bash
# on macOS (if installed via Homebrew)
inkscape public/og-image.svg --export-type=png --export-filename=public/og-image.png --export-width=1200 --export-height=630
```

2) Using resvg (fast CLI):

```bash
# install: cargo install resvg-cli  (requires Rust)
resvg public/og-image.svg public/og-image.png
```

3) Using ImageMagick (if your ImageMagick build supports SVG):

```bash
convert -background none public/og-image.svg -resize 1200x630 public/og-image.png
```

4) Using Node.js + sharp:

```bash
# install sharp locally
npm install sharp
node -e "const sharp = require('sharp'); sharp('public/og-image.svg').png({quality:90}).toFile('public/og-image.png').then(()=>console.log('done'))"
```

If you'd like, I can add an automated conversion script to the project (it will add a dependency like `sharp`), or I can attempt to generate the PNG here if you give me permission to install dependencies. Otherwise, run one of the commands above on your machine and commit the resulting `public/og-image.png` to the repo.
