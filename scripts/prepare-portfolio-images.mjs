// Preserve original portfolio exports; use lightweight web copies in the UI.
import sharp from 'sharp';
import { stat } from 'node:fs/promises';
const sources = ["apartamenty-chorwacja.jpg", "celsjusz.png", "cute-dumpling-new.png", "fabryka-virali.png", "fps-cegielski.png", "friendly-gas-new.png", "friendly-gas.png", "gierki.png", "graf-tapicerstwo.png", "klagem.png", "lauvjah.png", "mechanica.png", "przedszkole.png", "rppg.png", "sookar.jpg", "stageplan.jpg", "verthe.png", "victory-cars.png"];
const report = [];
for (const file of sources) {
  const input = `src/assets/portfolio/${file}`;
  const output = input.replace(/\.(png|jpe?g)$/, '-web.webp');
  const info = await sharp(input).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
  report.push({ input, output, before: (await stat(input)).size, after: info.size });
}
console.log(JSON.stringify({ assets: report, before: report.reduce((n, i) => n + i.before, 0), after: report.reduce((n, i) => n + i.after, 0) }, null, 2));
