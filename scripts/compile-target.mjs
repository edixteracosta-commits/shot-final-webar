import { OfflineCompiler } from "mind-ar/src/image-target/offline-compiler.js";
import { loadImage } from "canvas";
import { writeFile } from "node:fs/promises";

const INPUT = "assets/target.png";
const OUTPUT = "assets/targets.mind";

console.log(`Compilando ${INPUT} → ${OUTPUT}`);

const image = await loadImage(INPUT);
const compiler = new OfflineCompiler();

await compiler.compileImageTargets([image], (progress) => {
  const rounded = Number(progress).toFixed(1);
  process.stdout.write(`\rProgreso: ${rounded}%`);
});

const buffer = compiler.exportData();
await writeFile(OUTPUT, buffer);

console.log(`\nListo: ${OUTPUT} (${buffer.byteLength ?? buffer.length} bytes)`);
