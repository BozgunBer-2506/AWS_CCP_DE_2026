# AWS CCP EXAM DE 2026 - Study Guide (German)

A clean, searchable study guide for the AWS Certified Cloud Practitioner (CLF-C02) exam.
**382 questions** with correct answers only - no explanations, no wrong answers, no distractions.

## How it works

Questions and answers are stored in a static `questions.json` file (parsed from a 700-page German Markdown source with a custom Node.js script). The page fetches this file on load and renders everything client-side with vanilla JS - no framework, no build step.

The parser handles:
- Single-answer and multi-answer questions (98 questions have 2-3 correct answers)
- Inline "Option - explanation" answer formats
- Markdown escape character normalization
- All 484 answers verified to be verbatim from the source

## Features

- Full-text search across questions and answers
- Show / hide answers toggle (state persists across refreshes)
- Scroll position restored on refresh
- Dark UI, mobile friendly
- No login, no tracking, no ads

## Stack

- Pure HTML + CSS + JS - no framework, no build step, no dependencies
- Data: static `questions.json` fetched via `fetch()`
- Deployed on Vercel (static site, `outputDirectory: "."`)

## Deploy

Connected to GitHub. Every push to `main` triggers an automatic Vercel deployment.

---

# AWS CCP EXAM DE 2026 - Lernhilfe (Deutsch)

Eine ubersichtliche, durchsuchbare Lernhilfe fur die AWS Certified Cloud Practitioner (CLF-C02) Prufung.
**382 Fragen** mit den richtigen Antworten - keine Erklarungen, keine falschen Antworten, kein Ablenkung.

## Wie es funktioniert

Fragen und Antworten sind in einer statischen `questions.json` Datei gespeichert (geparst aus einer 700-seitigen deutschen Markdown-Quelle mit einem Node.js-Skript). Die Seite ladt diese Datei beim Start und rendert alles client-seitig mit vanilla JS - kein Framework, kein Build-Schritt.

Der Parser verarbeitet:
- Einzel- und Mehrfachantworten (98 Fragen haben 2-3 richtige Antworten)
- "Option - Erklarung" Antwortformate in einer Zeile
- Markdown-Escape-Zeichen Normalisierung
- Alle 484 Antworten wurden wortwortlich aus der Quelle verifiziert

## Funktionen

- Volltextsuche uber Fragen und Antworten
- Antworten ein-/ausblenden (Zustand bleibt nach Neuladen erhalten)
- Scrollposition wird nach Neuladen wiederhergestellt
- Dunkles UI, mobilfreundlich
- Kein Login, kein Tracking, keine Werbung

## Technologie

- Reines HTML + CSS + JS - kein Framework, kein Build-Schritt, keine Abhangigkeiten
- Daten: statische `questions.json` via `fetch()`
- Deployment auf Vercel (statische Seite, `outputDirectory: "."`)

## Deployment

Mit GitHub verbunden. Jeder Push auf `main` lost ein automatisches Vercel-Deployment aus.
