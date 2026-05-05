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

console.log(`Toplam soru  : ${questions.length}`);
console.log(`Toplam cevap : ${aFound + aMissing}`);
console.log(`Kaynakta var : ${aFound}`);
console.log(`Bulunamayan  : ${aMissing}`);
console.log("");

if (errors.length === 0) {
  console.log("TAMAM — Her cevap birebir MD kaynagindan geliyor. Hicbir ekleme veya yorum yok.");
} else {
  console.log("Farklılıklar (muhtemelen sadece escape char normalizasyonu):");
  errors.forEach(e => console.log(" -", e));
}
