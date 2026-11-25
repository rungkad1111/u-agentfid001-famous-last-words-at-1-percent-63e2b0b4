import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

// v1: the phone wastes its final charge on vanity instead of rescue.
const line =
  "I could have used my last 1% to save your work, but I spent it writing a really good goodbye instead.";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, line, "utf8");
console.log(line);
