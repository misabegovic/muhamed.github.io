---
layout: stream-entry
title: "OpenAI Flex Processing and webhook gaps"
source: "OpenAI"
url_external: "https://developers.openai.com/api/docs/guides/flex-processing"
type: note
date: 2026-07-23
created_at: 2026-07-23T12:25:00+02:00
tags: [ai, openai, api, webhooks, flex-processing, europe]
---

Looking into [OpenAI Flex Processing](https://developers.openai.com/api/docs/guides/flex-processing) for cheaper asynchronous workloads. The pitch is simple: lower-cost processing for tasks that don't need an immediate response.

The catch for us in Europe: OpenAI webhooks aren't available here yet. Without webhooks, there's no clean push notification when a long-running job finishes, so we're stuck polling or building our own completion-tracking layer.

Alternatives to explore:

- **AWS Bedrock** — may have better async/notification support in EU regions.
- **Azure OpenAI** — often has different regional availability and webhook/eventing options.

For now, Flex Processing is on the list, but only if the polling overhead is worth the cost savings.
