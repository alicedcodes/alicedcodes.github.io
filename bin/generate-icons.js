// @ts-check
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import sharp from "sharp";
import toIco from "to-ico";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT = join(__dirname, "../public/favicon.svg");
const PUBLIC = join(__dirname, "../public");

async function buildIcons() {
  await mkdir(PUBLIC, { recursive: true });

  await sharp(INPUT).resize(180).png().toFile(join(PUBLIC, "apple-touch-icon.png"));
  await sharp(INPUT)
    .resize({
      width: 1280,
      height: 630,
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(join(PUBLIC, "og-image.png"));

  const icoSizes = [16, 32, 48, 64, 128, 256];
  const icoPngBuffers = [];

  for (const size of icoSizes) {
    const buf = await sharp(INPUT).resize(size, size).png().toBuffer();
    icoPngBuffers.push(buf);
  }

  const masterIcoBuffer = await toIco(icoPngBuffers);

  await writeFile(join(PUBLIC, "favicon.ico"), masterIcoBuffer);
}

buildIcons();
