import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "lid closed. your draft is still unsent, the cursor still blinking on a sentence only you can finish.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
