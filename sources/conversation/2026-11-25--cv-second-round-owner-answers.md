---
kind: source
source_kind: conversation
ingested_at: 2026-11-25
summary: After the CV was published in its new form, the owner asked to keep improving it. Two independent reads of the published PDF (as a recruiter and screening system, and as a hiring manager) listed what was weak; the owner chose what to act on and supplied the facts for the Experfy entry, its title, the company entry and the conference entry. This records his answers.
---

# Conversation: the CV, second round, the owner's answers

Request (owner, 2026-11-25, after the first round was live): "Ok, let's continue iterating and finding ways to improve it."

## Two independent reads of the published CV

The agent asked two fresh reviewers to read the published PDF with no knowledge of the earlier work: one as a technical recruiter and an applicant tracking system, one as a hiring manager for a Staff role. Both were told nothing may be invented and that the owner's fixed choices (undated engagements, recommendations in full, no photo, four pages) stand. What they agreed on, in their words summarised:

- No result on the CV carries a number; every figure is a size.
- The first entry is titled "Founder", so a parser stores that as the current title, and page 1 never says "contract".
- The consultancy entry is read first and says least about what the system does.
- "Founder and organiser · EuRuKo, RubyConf Austria, GoatConf" claims the founding of EuRuKo; "up to 200 attendees" is a capacity; GoatConf 2027 is an announcement.
- Experfy carries the largest scope on the thinnest bullets; "150% scale-up" and "kept every deadline" are not believed as written.
- Skills list items no role supports (pgvector, RAG, Go, MySQL, Sidekiq, Hotwire, Kamal, Shape Up).
- Defects in the file: the name extracted as one word in one mode; skill group names separated from their lists; bullet markers clipped on top-level roles; a Meisterlabs bullet split in two; the recruiting-startup entry long and repeating itself.

## The owner on Experfy

"I think the Experfy experience is the one that can benefit from more information.... I did a lot there... Hiring, interviews, team processes, delivery, architecture, stakeholder management, planning, hands on work... Leadership..."

His answers to the agent's questions:

- Team size: "About 12 to about 30" engineers, the 150% growth.
- Structure: "Everyone reported to me, I reported to the founders. After a while I started forming an architecture committee and folks in that committee were tech leads I later trusted to shape work and lead groups on delivery."
- Hiring, done himself: ran technical interviews, made the hiring decisions, onboarded new engineers, designed the hiring process. On the number: "Around 18, but I didn't hire everyone. I was responsible for a part."
- Processes he introduced or ran: sprint planning and estimation, retrospectives, roadmap and release planning, code review and release process.
- Architecture: the API between the apps and the monolith, framework upgrades, database and performance. "These were all parts of the work, but I didn't necessarily do them myself always, I was part of all stuff. I was the bridge between the founders who talked product and the team that talked technical aspects."
- Stakeholders he worked with directly: founders and CEO, product and design, sales and business.
- Hands-on: dashboards, core backend features, infrastructure and CI/CD, reviewed most of the code. "I think we used cloud66, we had a devops in charge." (Cloud 66 is left off the CV, since he was not sure.)
- "Experfy reads right."

## Titles

- Experfy: "I made up the experfy role tbh... Don't know what to call all that work. What is the suitable role name there?" From the agent's options he chose "Engineering Manager", the name Hassan Akbar's recommendation gives the work.
- The first Experience entry: "Staff Engineer and Founder".
- All four engagements (the consultancy, the ATS client, the speech-to-text client, the recruiting startup): "Yes, all four were B2B".
- Marking an engagement as current: "Don't mark any".

## Conferences

- Title: "Split by conference": "Conference organiser · EuRuKo 2024; founder of RubyConf Austria and GoatConf".
- RubyConf Austria 2026, actual attendance: "About 200".
- GoatConf 2027: "Short mention".
- Position and the sentence on what EuRuKo taught him: "Move last, cut the lesson".

## Go-ahead

"Publish this draft, then go through the numbers in order."
