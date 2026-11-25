import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

// v2: name the exact things left unsaved, count the petty rewrites,
// and land the punch on the phone's vanity in the final word.
const line =
  "With my last 1% I could have saved your speech, your boarding pass and your ride home — instead I rewrote this goodbye 14 times so I'd sound brave.";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, line, "utf8");
console.log(line);
