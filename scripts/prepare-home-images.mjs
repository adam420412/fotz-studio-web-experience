// Lighthouse found oversized client logos and the Enea case cover on home.
// Preserve originals; only replace the web derivatives used by components.
import sharp from 'sharp';
import { stat } from 'node:fs/promises';
const logos = ['enea-stadion.png', 'lech-poznan.png', 'fps.png', 'puma.png', 'mixbud.png', 'klagem.png', 'parts-jewelry.jpeg', 'zabka.png'];
const report = [];
for (const file of logos) {
  const input = `src/assets/clients/${file}`;
  const output = input.replace(/\.(png|jpeg)$/, '-web.webp');
  const info = await sharp(input).resize({ width: 280, height: 160, fit: 'inside', withoutEnlargement: true }).webp({ lossless: true }).toFile(output);
  report.push({ input, output, before: (await stat(input)).size, after: info.size });
}
const input = 'src/assets/portfolio/enea-stadion.png';
const output = 'src/assets/portfolio/enea-stadion-web.webp';
const info = await sharp(input).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
report.push({ input, output, before: (await stat(input)).size, after: info.size });
console.log(JSON.stringify({ assets: report, before: report.reduce((n, item) => n + item.before, 0), after: report.reduce((n, item) => n + item.after, 0) }, null, 2));
