import { readFileSync } from "fs";

const questions = JSON.parse(readFileSync("./questions.json", "utf8"));
const md = readFileSync("./AWS CCP EXAM 2026.md", "utf8");

function stripMd(s) {
  return s.replace(/\*/g, "").replace(/\\_/g, "_").replace(/\\-/g, "-").replace(/\\\*/g, "*").trim();
}

const mdStripped = stripMd(md);

let aFound = 0, aMissing = 0;
const errors = [];

questions.forEach((q, idx) => {
  const answers = Array.isArray(q.correct) ? q.correct : [q.correct];
  answers.forEach(a => {
    if (mdStripped.includes(a)) {
      aFound++;
    } else {
      aMissing++;
      errors.push(`Q${idx + 1}: ${a.slice(0, 90)}`);
    }
  });
});

console.log(`Total questions : ${questions.length}`);
console.log(`Total answers   : ${aFound + aMissing}`);
console.log(`Found in source : ${aFound}`);
console.log(`Not found       : ${aMissing}`);
console.log("");

if (errors.length === 0) {
  console.log("OK - All answers match the MD source exactly.");
} else {
  console.log("Mismatches (likely escape char normalization):");
  errors.forEach(e => console.log(" -", e));
}
