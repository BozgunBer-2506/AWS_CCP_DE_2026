# AWS CCP DE 2026 - Study Guide (German)

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
