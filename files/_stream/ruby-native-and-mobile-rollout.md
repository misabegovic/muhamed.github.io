---
layout: stream-entry
title: "Ruby Native and mobile rollout strategy"
source: "Ruby Native"
url_external: "https://rubynative.com/"
type: note
date: 2026-07-23
tags: [ruby, rails, mobile, app-stores, usput, ruby-native]
---

I'm paying close attention to [Ruby Native](https://rubynative.com/). The pitch is exactly what I need: turn a Rails app into a real iOS/Android app via YAML config and a few ERB helpers, without touching Swift, Kotlin, Xcode, or Android Studio.

The comparison on their site is convincing. PWA lacks store presence and real push notifications. Capacitor still needs native project housekeeping. Hotwire Native is powerful but requires native code. Ruby Native sits in the sweet spot: config-driven, cloud builds, native UI, and both app stores.

For now, I'm waiting for Android support to land properly. Once it does, the plan is to use Ruby Native as the default path for rolling apps like Usput.ba out to the App Store and Google Play.
