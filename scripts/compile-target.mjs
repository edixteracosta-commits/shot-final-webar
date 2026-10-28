import { OfflineCompiler } from "mind-ar/src/image-target/offline-compiler.js";
import { loadImage, createCanvas } from "canvas";
import { writeFile } from "node:fs/promises";

const INPUT = "assets/target.png";
const PRINT_TARGET = "assets/target-print.png";
const OUTPUT = "assets/targets.mind";

console.log(`Preparando marcador impreso desde ${INPUT}`);

// target.png es logo blanco sobre fondo oscuro.
// Para la tarjeta física usamos la polaridad real: logo negro sobre fondo claro.
const source = await loadImage(INPUT);
const canvas = createCanvas(source.width, source.height);
const ctx = canvas.getContext("2d");
ctx.drawImage(source, 0, 0);

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data;
for (let i = 0; i < data.length; i += 4) {
  data[i] = 255 - data[i];
  data[i + 1] = 255 - data[i + 1];
  data[i + 2] = 255 - data[i + 2];
}
ctx.putImageData(imageData, 0, 0);

await writeFile(PRINT_TARGET, canvas.toBuffer("image/png"));
const printImage = await loadImage(PRINT_TARGET);

console.log(`Compilando ${PRINT_TARGET} → ${OUTPUT}`);
const compiler = new OfflineCompiler();

await compiler.compileImageTargets([printImage], (progress) => {
  const rounded = Number(progress).toFixed(1);
  process.stdout.write(`\rProgreso: ${rounded}%`);
});

const buffer = compiler.exportData();
await writeFile(OUTPUT, buffer);

console.log(`\nListo: ${OUTPUT} (${buffer.byteLength ?? buffer.length} bytes)`);
