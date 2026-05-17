# AWS CCP EXAM DE 2026 - Study Guide (German)

A clean, searchable study guide for the AWS Certified Cloud Practitioner (CLF-C02) exam.
**390 questions** with correct answers only - no explanations, no wrong answers, no distractions.

## Features

- Full-text search across questions and answers - results show original question numbers
- Show / hide answers toggle (state persists across refreshes)
- Probeprufungen section with 6 EN and 6 DE practice exam links (collapsible dropdown)
- Scroll position restored on refresh
- Dark UI, mobile friendly
- No login, no tracking, no ads

## How it works

Questions and answers are stored in a static `questions.json` file (parsed from a German Markdown source with a custom Node.js script). The page fetches this file on load and renders everything client-side with vanilla JS - no framework, no build step.

## Stack

- Pure HTML + CSS + JS - no framework, no build step, no dependencies
- Data: static `questions.json` fetched via `fetch()`
- Deployed on Vercel (static site, `outputDirectory: "."`)

## Deploy

Connected to GitHub. Every push to `main` triggers an automatic Vercel deployment.

---

# AWS CCP EXAM DE 2026 - Lernhilfe (Deutsch)

Eine ubersichtliche, durchsuchbare Lernhilfe fur die AWS Certified Cloud Practitioner (CLF-C02) Prufung.
**390 Fragen** mit den richtigen Antworten - keine Erklarungen, keine falschen Antworten, keine Ablenkung.

## Funktionen

- Volltextsuche uber Fragen und Antworten - Ergebnisse zeigen die originale Fragennummer
- Antworten ein-/ausblenden (Zustand bleibt nach Neuladen erhalten)
- Probeprufungen-Bereich mit 6 EN und 6 DE Ubungsprufungen als ausklappbares Dropdown
- Scrollposition wird nach Neuladen wiederhergestellt
- Dunkles UI, mobilfreundlich
- Kein Login, kein Tracking, keine Werbung

## Wie es funktioniert

Fragen und Antworten sind in einer statischen `questions.json` Datei gespeichert (geparst aus einer deutschen Markdown-Quelle mit einem Node.js-Skript). Die Seite ladt diese Datei beim Start und rendert alles client-seitig mit vanilla JS - kein Framework, kein Build-Schritt.

## Technologie

- Reines HTML + CSS + JS - kein Framework, kein Build-Schritt, keine Abhangigkeiten
- Daten: statische `questions.json` via `fetch()`
- Deployment auf Vercel (statische Seite, `outputDirectory: "."`)

## Deployment

Mit GitHub verbunden. Jeder Push auf `main` lost ein automatisches Vercel-Deployment aus.
