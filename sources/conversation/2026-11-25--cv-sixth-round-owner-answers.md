---
kind: source
source_kind: conversation
ingested_at: 2026-11-25
summary: The sixth round on the CV the same day. Asked how the CV reads to a neutral observer, the agent named the undated block of client roles as the main hesitation. The owner proposed describing the work done through his company without naming the clients, also for the sake of NDAs, and chose that version after seeing previews. This records his words.
---

# Conversation: the CV, sixth round, the owner's answers

## The question

"How does the CV look now? If you were a neutral observer looking if they should hire me or just to learn about who tf I am. Who am I based on it?"

The agent's read, in short: a capable senior engineer who can lead and would be interviewed for most roles he aims at, with "Staff" asserted more than shown. Hesitations: four clients since 2025 with no durations, no outcomes, the Staff title only at his own company and a consultancy, many things running in parallel, and the consultancy read first and vaguest.

## His proposal

"Should we rephrase the entry of my own company then? So we don't name and list clients but describe work that I have done. Maybe it also saves and respects NDAs and stuff?"

The agent recommended the same grouping with clients named in passing where contracts allow, since a named client is evidence. He chose "Grouped, no client names", and on which could be named: "Let's see what it looks like if we name none".

## After the first preview

"Maybe remove hints that help figure out which company, like the ATS-client hint."

Removed: a client's customer count (now "a large applicant tracking system"), a description taken from a client's own site (now "an engineering consultancy"), who a product's users are (now "an early-stage speech-to-text product"), how soon after his joining an acquisition came (now "acquired shortly after I joined"), a feature's name, the names in the two-teams bullet, and the client's name under Zlatko Alomerovic's recommendation (now "worked on my team for a year"; his words are untouched).

## pgvector

"Let's not mention pgvector as this important thing...looks weird to mention in the ATS-client entry". It leaves that entry and the recruiting-startup bullet, and stays at Usput.ba and in the skills.

## Go-ahead

"Go with the no-names version, deliver it".

## The website

Told that `llms.txt` and the recommendation on the homepage still named these clients: "Also make sure the website respects the same approach".

Changed for it: `llms.txt`; the line under Zlatko Alomerovic's recommendation in `files/_data/home.yml`; and his post "From zero to one" (2025-03-12), where the company's name and links become "an AI startup in recruiting", "the founders of both companies" becomes "the founders", and the categories and tag naming it go.

## The records

"Reword records... Would be great to rewrite history as well and force push to a single commit with cleaned history". Told that a squash and force-push would not remove the old commits from GitHub, since the merged pull requests keep them, he chose "Reword only, keep history". For the evidence ids in the site's data files that carried a client's name: "Rename to neutral ids".

On Usput.ba, which he asked about moving to the Projects: "Keep it under Experience".

## Left open

His LinkedIn presumably names these clients too. Earlier commits in this repository do.
