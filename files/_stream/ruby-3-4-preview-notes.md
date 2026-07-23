---
layout: stream-entry
title: "Ruby 3.4 Preview Notes"
source: "ruby-lang.org"
url_external: "https://www.ruby-lang.org/en/news/2024/11/05/ruby-3-4-0-preview2-released/"
type: "link"
date: 2026-07-05
tags: ["ruby", "programming", "future"]
quote: ""
slug: "ruby-3-4-preview-notes"
---

Parser changes, Prism default, and the long goodbye to some old behaviors. Time to test the gems.

The shift to Prism as the default parser is a bigger deal than it sounds. It means the Ruby ecosystem is finally getting a single, maintainable parser that tools can build against. For someone who has watched parser-related bugs cause subtle tooling failures for years, this is welcome.

I need to set aside time to run the test suites of the gems I care about against 3.4. Breaking early is cheaper than breaking after release.
