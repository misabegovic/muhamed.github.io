---
kind: source
source_kind: web
source_url: https://pi.dev/packages/@misabegovic/pi-brain?name=misabegovic
ingested_at: 2026-07-27
summary: pi.dev package gallery page for @misabegovic/pi-brain v0.3.2 — 257 downloads/month at time of capture; bundles the pi-brain extension, skills, prompts, and themes; MIT, zero runtime dependencies.
---

# https://pi.dev/packages/@misabegovic/pi-brain?name=misabegovic

```
<!DOCTYPE html><html lang="en" data-theme-storage-key="pi:theme"><head><title>@misabegovic/pi-brain · Packages · Pi</title><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><script>(() => {
  const root = document.documentElement;
  const storageKey = "pi:theme";
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const storedMode = localStorage.getItem(storageKey);
  const mode = storedMode === "light" || storedMode === "dark" ? storedMode : "system";
  const theme = mode === "system" ? (colorSchemeMediaQuery.matches ? "dark" : "light") : mode;

  root.dataset.theme = theme;
  root.dataset.themeMode = mode;
  root.style.colorScheme = theme;
})();</script><link rel="preload" href="/fonts/PlantinNowVariable-Upright.woff2" as="font" type="font/woff2" crossorigin="anonymous"/><link rel="preload" href="/fonts/PlantinNowVariable-Italic.woff2" as="font" type="font/woff2" crossorigin="anonymous"/><link rel="preload" href="/fonts/DepartureMono-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"/><link rel="stylesheet" type="text/css" href="/style.css?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564"/><link rel="icon" type="image/svg+xml" href="/favicon.svg"/><link rel="alternate" type="application/rss+xml" title="Pi News" href="/news.xml"/><meta name="description" content="A terminal-based coding agent"/><meta property="og:title" content="Pi Coding Agent"/><meta property="og:type" content="website"/><meta property="og:description" content="A terminal-based coding agent"/><meta property="og:url" content="https://pi.dev"/><meta property="og:image" content="https://pi.dev/social.png"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta property="og:image:alt" content="There are many agent harnesses, but this one is yours."/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:image" content="https://pi.dev/social.png"/><meta name="twitter:image:alt" content="There are many agent harnesses, but this one is yours."/><meta property="twitter:domain" content="pi.dev"/><meta property="twitter:url" content="https://pi.dev"/><meta name="twitter:title" content="Pi Coding Agent"/><meta name="twitter:description" content="A terminal-based coding agent"/><script>window.__sa=window.__sa||function(){(__sa._=__sa._||[]).push(arguments)}</script><script src="/assets/pi-dev.js?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564"></script><noscript><style>
            [data-theme-toggle] {
              display: none;
            }
            @media (max-width: 1023px) {
              #stickyNav #sticky-nav-inner-js,
              #stickyNav .nav-sheet-backdrop,
              #stickyNav .nav-sheet {
                display: none;
              }
              #stickyNav .sticky-nav-noscript-shell {
                display: flex;
              }
            }
          </style></noscript><script src="/assets/sa.js?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564" data-auto="false"></script><script src="/assets/logo-context-menu.js?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564" defer=""></script><script src="/assets/nav-sheet.js?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564" defer=""></script><script src="/assets/theme-toggle.js?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564" defer=""></script></head><body><nav class="sticky-nav" id="stickyNav" data-nav-root="true" data-nav-open="false"><div class="sticky-nav-inner" id="sticky-nav-inner-js"><a href="/" class="sticky-nav-logo" aria-label="Pi home" data-logo-context-trigger="true"><svg class="pi-logo-mark" viewBox="0 0 800 800" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="M165.29 165.29H517.36V400H400V517.36H282.65V634.72H165.29ZM282.65 282.65V400H400V282.65Z"></path><path fill="currentColor" d="M517.36 400H634.72V634.72H517.36Z"></path></svg></a><div class="logo-context-menu" data-logo-context-menu="true" hidden=""><button type="button" class="logo-context-menu-item" data-logo-context-copy-svg="true">Copy SVG</button><a class="logo-context-menu-item" href="/logo-auto.svg" download="pi-logo.svg" data-logo-context-download="true">Download SVG</a><a class="logo-context-menu-item" href="/press-kit">Press Kit</a></div><div class="sticky-nav-page-links" aria-label="Primary navigation"><a href="/" class="sticky-nav-page-link">Home</a><a href="/docs/latest" class="sticky-nav-page-link">Documentation</a><a href="/news" class="sticky-nav-page-link">News</a><a href="/packages" class="sticky-nav-page-link is-active" aria-current="page">Packages</a><a href="/models" class="sticky-nav-page-link">Models</a></div><button type="button" class="sticky-nav-toggle burger-trigger" aria-controls="navSheet" aria-label="Open menu" aria-expanded="false" data-open="false" data-nav-toggle="true"><span class="bt-bar" aria-hidden="true"><span></span><span></span><span></span><span></span></span><span class="bt-bar" aria-hidden="true"><span></span><span></span><span></span><span></span></span><span class="bt-bar" aria-hidden="true"><span></span><span></span><span></span><span></span></span></button></div><noscript><div class="sticky-nav-noscript-shell"><a href="/" class="sticky-nav-logo sticky-nav-noscript-logo" aria-label="Pi home"><svg class="pi-logo-mark" viewBox="0 0 800 800" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="M165.29 165.29H517.36V400H400V517.36H282.65V634.72H165.29ZM282.65 282.65V400H400V282.65Z"></path><path fill="currentColor" d="M517.36 400H634.72V634.72H517.36Z"></path></svg></a><details class="sticky-nav-noscript"><summary class="sticky-nav-noscript-summary"><span class="visually-hidden">Menu</span><span class="sticky-nav-noscript-trigger burger-trigger" aria-hidden="true"><span class="bt-bar" aria-hidden="true"><span></span><span></span><span></span><span></span></span><span class="bt-bar" aria-hidden="true"><span></span><span></span><span></span><span></span></span><span class="bt-bar" aria-hidden="true"><span></span><span></span><span></span><span></span></span></span></summary><div class="sticky-nav-noscript-panel"><div class="nav-sheet-inner"><div class="nav-sheet-links"><a href="/" class="nav-sheet-link"><span>Home</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/docs/latest" class="nav-sheet-link"><span>Documentation</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/news" class="nav-sheet-link"><span>News</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/packages" class="nav-sheet-link is-active" aria-current="page"><span>Packages</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/models" class="nav-sheet-link"><span>Models</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a></div><div class="nav-sheet-separator" aria-hidden="true"></div><div class="nav-sheet-meta"><div class="nav-sheet-socials"><a href="https://github.com/earendil-works/pi/tree/main/packages/coding-agent" class="nav-sheet-social" aria-label="GitHub"><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></span><span>GitHub</span></a><a href="https://www.npmjs.com/package/@earendil-works/pi-coding-agent" class="nav-sheet-social" aria-label="npm"><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M0 0v24h24v-24h-24zm19.2 19.2h-2.4v-9.6h-4.8v9.6h-7.2v-14.4h14.4v14.4z"></path></svg></span><span>npm</span></a><a href="https://discord.com/invite/3cU7Bz4UPx" class="nav-sheet-social" aria-label="Discord"><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg></span><span>Discord</span></a><a href="https://x.com/pidotdev" class="nav-sheet-social" aria-label="X"><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"></path></svg></span><span>X</span></a></div><div class="nav-sheet-separator" aria-hidden="true"></div><div class="nav-sheet-footer"><a href="https://earendil.com" class="nav-sheet-footer-link" title="Earendil Inc. website" aria-label="Earendil Inc. website" target="_blank" rel="noopener"><span class="nav-sheet-footer-mark" aria-hidden="true"><svg class="nav-sheet-earendil-emblem" viewBox="121.24 22.62 81.65 149.38" aria-hidden="true" focusable="false"><path fill="currentColor" d="M202.89 123.89c.4 29.74-40.27 26.97-40.8 48.11h-.05c-.52-21.14-41.19-18.38-40.8-48.11 27.99 0 40.09-46.29 40.82-101.27.74 54.98 12.83 101.27 40.82 101.27h0Z"></path></svg></span><span class="nav-sheet-footer-copy sticky-nav-page-link">Earendil Inc.</span></a></div></div></div></div></details></div></noscript><div class="nav-sheet-backdrop" data-nav-backdrop="true" aria-hidden="true"></div><aside class="nav-sheet" id="navSheet" data-nav-sheet="true" data-open="false" aria-hidden="true" aria-label="Navigation menu" inert=""><div class="nav-sheet-inner"><div class="nav-sheet-links"><a href="/" class="nav-sheet-link" data-nav-sheet-close=""><span>Home</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/docs/latest" class="nav-sheet-link" data-nav-sheet-close=""><span>Documentation</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/news" class="nav-sheet-link" data-nav-sheet-close=""><span>News</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/packages" class="nav-sheet-link is-active" aria-current="page" data-nav-sheet-close=""><span>Packages</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a><a href="/models" class="nav-sheet-link" data-nav-sheet-close=""><span>Models</span><span class="nav-sheet-arrow" aria-hidden="true">→</span></a></div><div class="nav-sheet-separator" aria-hidden="true"></div><div class="nav-sheet-meta"><div class="nav-sheet-socials"><a href="https://github.com/earendil-works/pi/tree/main/packages/coding-agent" class="nav-sheet-social" aria-label="GitHub" data-nav-sheet-close=""><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></span><span>GitHub</span></a><a href="https://www.npmjs.com/package/@earendil-works/pi-coding-agent" class="nav-sheet-social" aria-label="npm" data-nav-sheet-close=""><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M0 0v24h24v-24h-24zm19.2 19.2h-2.4v-9.6h-4.8v9.6h-7.2v-14.4h14.4v14.4z"></path></svg></span><span>npm</span></a><a href="https://discord.com/invite/3cU7Bz4UPx" class="nav-sheet-social" aria-label="Discord" data-nav-sheet-close=""><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg></span><span>Discord</span></a><a href="https://x.com/pidotdev" class="nav-sheet-social" aria-label="X" data-nav-sheet-close=""><span class="nav-sheet-social-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"></path></svg></span><span>X</span></a></div><div class="nav-sheet-separator" aria-hidden="true"></div><div class="nav-sheet-footer"><a href="https://earendil.com" class="nav-sheet-footer-link" title="Earendil Inc. website" aria-label="Earendil Inc. website" target="_blank" rel="noopener" data-nav-sheet-close=""><span class="nav-sheet-footer-mark" aria-hidden="true"><svg class="nav-sheet-earendil-emblem" viewBox="121.24 22.62 81.65 149.38" aria-hidden="true" focusable="false"><path fill="currentColor" d="M202.89 123.89c.4 29.74-40.27 26.97-40.8 48.11h-.05c-.52-21.14-41.19-18.38-40.8-48.11 27.99 0 40.09-46.29 40.82-101.27.74 54.98 12.83 101.27 40.82 101.27h0Z"></path></svg></span><span class="nav-sheet-footer-copy sticky-nav-page-link">Earendil Inc.</span></a></div></div></div></aside></nav><div class="site-tilt-layer"><main class="content-shell packages-dashboard packages-detail-view"><header class="content-hero"><h1 class="content-title">@misabegovic/pi-brain</h1><p class="content-description">A cozy knowledge home for pi. Distributed as a global package; brain clones are content-only and inherit skills, prompts, themes, tools, and the extension from the install.</p></header><a href="/packages?name=misabegovic" class="back-link"><span class="back-link-label">Packages</span></a><section class="surface-panel content-card packages-detail-card"><header class="content-card-header"><h2 class="content-card-title">Package details</h2></header><div class="content-card-body"><div id="package-details" class="packages-detail-topline"><div><div class="packages-badges"><span class="meta-chip packages-badge" data-type="extension">extension</span><span class="meta-chip packages-badge" data-type="skill">skill</span><span class="meta-chip packages-badge" data-type="theme">theme</span><span class="meta-chip packages-badge" data-type="prompt">prompt</span></div><p class="packages-detail-description">Install <code>@misabegovic/pi-brain</code> from npm and Pi will load the resources declared by the package manifest.</p></div><div class="packages-detail-links" aria-label="Links for @misabegovic/pi-brain"><a href="https://www.npmjs.com/package/@misabegovic/pi-brain" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M0 0v24h24v-24h-24zm19.2 19.2h-2.4v-9.6h-4.8v9.6h-7.2v-14.4h14.4v14.4z"></path></svg> npm</a><a href="https://github.com/earendil-works/pi/issues/new?template=package-report.yml&amp;labels=package-report&amp;title=Package+Report%3A+%40misabegovic%2Fpi-brain&amp;package-name=%40misabegovic%2Fpi-brain&amp;package-version=0.3.2" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg> report</a></div></div><div class="packages-install packages-install--detail"><code><span class="prefix">$</span> pi install npm:@misabegovic/pi-brain</code><button type="button" data-copy="true" data-copy-text="pi install npm:@misabegovic/pi-brain" data-copy-label="Copy" data-copy-flash-text="Copied" class="button button--primary action-button">Copy</button></div><dl class="definition-grid detail-grid"><dt>Package</dt><dd><code>@misabegovic/pi-brain</code></dd><dt>Version</dt><dd><code>0.3.2</code></dd><dt>Published</dt><dd>Jul 27, 2026</dd><dt>Downloads</dt><dd>257/mo · 257/wk</dd><dt>Author</dt><dd>misabegovic</dd><dt>License</dt><dd>MIT</dd><dt>Types</dt><dd>extension, skill, theme, prompt</dd><dt>Size</dt><dd>661.9 KB</dd><dt>Dependencies</dt><dd>0 dependencies · 2 peers</dd></dl><details class="disclosure-block"><summary>Pi manifest JSON</summary><pre class="raw-data-panel">{
  &quot;extensions&quot;: [
    &quot;./extensions/pi-brain/index.ts&quot;
  ],
  &quot;skills&quot;: [
    &quot;./skills&quot;
  ],
  &quot;prompts&quot;: [
    &quot;./prompts&quot;
  ],
  &quot;themes&quot;: [
    &quot;./themes&quot;
  ]
}</pre></details></div></section><section class="surface-panel content-card notice-card packages-security-card"><header class="content-card-header"><h2 class="content-card-title">Security note</h2></header><div class="content-card-body"><p>Pi packages can execute code and influence agent behavior. Review the source before installing third-party packages.</p></div></section><section class="surface-panel content-card packages-readme-card"><header class="content-card-header"><h2 class="content-card-title">README</h2></header><div class="content-card-body"><div class="rich-text packages-readme"><h1>pi-brain 🧠🏠</h1>
<p><a href="https://github.com/misabegovic/pi-brain/actions/workflows/validate.yml" target="_blank" rel="noopener"><img src="https://github.com/misabegovic/pi-brain/actions/workflows/validate.yml/badge.svg" alt="Validate pi-brain"></a>
<a href="https://www.npmjs.com/package/@misabegovic/pi-brain" target="_blank" rel="noopener"><img src="https://img.shields.io/npm/v/@misabegovic/pi-brain" alt="npm"></a></p>
<p><strong>A knowledge home for <a href="https://pi.dev/" target="_blank" rel="noopener">pi</a>.</strong></p>
<p>pi-brain is a self-contained, cloneable template for project- or customer-specific knowledge bases inside <a href="https://pi.dev/" target="_blank" rel="noopener">pi</a>. It is an <strong>intent store</strong>: it keeps the permanent layer of decisions, architecture, and product reasoning alongside the volatile layer of drafts, experiments, and AI suggestions. When volatile work is approved, it is promoted into the permanent layer and can then modify the actual project.</p>
<h2>What it gives pi</h2>
<ul>
<li><strong>Persistent working memory</strong> — every session starts with a glance at the project&#39;s briefing and tend queue.</li>
<li><strong>Natural-language capture</strong> — &quot;note that we decided X&quot; becomes an inbox item or wiki page.</li>
<li><strong>Question answering over the corpus</strong> — ask the project&#39;s brain, not just the current repo.</li>
<li><strong>Tend queue integration</strong> — see what queued up while you were away and digest it without leaving pi.</li>
<li><strong>Human-gated shaping</strong> — <code>/brain:shape</code> turns pitches into ADRs/PRDs with phase-end approval gates.</li>
<li><strong>A cozy theme</strong> — warm, low-contrast colors so long brain-tending sessions feel like home.</li>
</ul>
<h2>Vision: how pi-brain manages knowledge</h2>
<p>pi-brain separates knowledge into three layers:</p>
<h3>Permanent layer (<code>wiki/&lt;scope&gt;/records/</code>)</h3>
<p>These describe the project <strong>as it actually is right now</strong>. They are the residue of delivered decisions and the source of truth for future work:</p>
<ul>
<li><strong>Records</strong> state the current, approved shape of a system, feature, or decision. They cite the ADR/PRD/bet that produced them and the code that implements them.</li>
</ul>
<p>Records change only when the project itself changes.</p>
<h3>Volatile commitment layer (<code>wiki/&lt;scope&gt;/{adrs,prds,epics,bets,constraints}/</code>)</h3>
<p>These are human-approved or in-progress commitment-class artifacts. They are true <em>at the time they are written</em>, but they become historical once the work is delivered:</p>
<ul>
<li><strong>ADRs</strong> record the decision being made, the alternatives rejected, and the accepted consequences.</li>
<li><strong>PRDs</strong> describe the initiative — problem, appetite, fat-marker solution, no-gos, rabbit holes.</li>
<li><strong>Epics</strong> group related work under a single outcome.</li>
<li><strong>Bets</strong> are the commitments we actually make from the options — usually one per shaping cycle, linked to a PRD/ADR pair.</li>
<li><strong>Constraints</strong> are durable rules the project agrees to honor — architecture, UI, UX, language, workflow, security, performance. They shape what is allowed in every PRD/ADR/bet until explicitly retired.</li>
</ul>
<h3>Raw / speculative layer (<code>wiki/&lt;scope&gt;/{pitches,rfcs,ai-suggestions}/</code>, inbox, deepdives)</h3>
<p>Fast, speculative, or AI-generated material that is allowed to be wrong:</p>
<ul>
<li><strong>Pitches</strong> are pre-bet ideas not yet shaped.</li>
<li><strong>RFCs</strong> are multi-perspective review documents — the conversation format between personas.</li>
<li><strong>AI-suggestions</strong> are agent-authored drafts awaiting human review.</li>
<li><strong>Inbox captures</strong> are raw notes waiting to be triaged.</li>
<li><strong>Deepdives</strong> are transient repo inspections for context.</li>
</ul>
<h3>Evidence layer (<code>wiki/&lt;scope&gt;/{experiments,feedback}/</code>)</h3>
<p>Observations from the real world that inform decisions:</p>
<ul>
<li><strong>Experiments</strong> — A/B tests and other experiments with hypothesis, results, and decision.</li>
<li><strong>Feedback</strong> — user feedback, interviews, support signals, analytics observations.</li>
</ul>
<p>Evidence pages feed into options, bets, and records.</p>
<h3>Promotion path</h3>
<pre><code>inbox / deepdive / pitch
         ↓
   ai-suggestion (agent draft)
         ↓
   draft PRD / ADR / epic / bet
         ↓
   accepted PRD / ADR / epic / bet  ← commitment layer
         ↓
   implementation in the project repo
         ↓
   record in wiki/&lt;scope&gt;/records/  ← permanent layer
</code></pre>
<ul>
<li>Raw drafts never become truth without human approval.</li>
<li>Accepted commitment artifacts authorize changes to the project repo.</li>
<li><strong>Constraint check:</strong> before accepting a PRD/ADR/epic/bet, verify it honors active <code>constraints/</code> in the scope. Flag violations and resolve them before acceptance.</li>
<li>Once delivered, the useful residue is captured as a <strong>record</strong>. The original ADR/PRD may then be archived or compacted into the record&#39;s history.</li>
<li><code>brain:groom</code> decays stale confidence, archives superseded commitments, and flags delivered work that needs a record.</li>
<li><code>brain:links</code>, <code>brain:state</code>, and <code>brain:sync</code> keep the permanent layer honest and navigable.</li>
</ul>
<h2>Using pi-brain for your own project</h2>
<p>pi-brain is distributed as a <strong>global pi package</strong>. Install it once and every pi session becomes brain-aware when a brain home is present.</p>
<h3>1. Install the package globally</h3>
<pre><code class="language-bash">pi install @misabegovic/pi-brain
</code></pre>
<p>The package provides the extension, skills, prompts, themes, templates, personas, and tools. Your clones contain only content and config.</p>
<h3>2. Create a content-only clone</h3>
<pre><code class="language-bash">bash tools/clone-pi-brain.sh ~/projects/my-project-brain &quot;My Org&quot;
cd ~/projects/my-project-brain
pi
/brain:setup
/brain
</code></pre>
<h3>3. Convert an existing repo</h3>
<p><code>/brain:convert [subdir] [--dry-run]</code> moves the project code into <code>files/</code> (or the subdir you specify) and scaffolds the brain content directories.</p>
<h3>4. Onboard an external repo</h3>
<p><code>/brain:ingest-repo &lt;path-or-url&gt; [scope]</code> keeps the brain repo-agnostic. The code stays outside the brain; only a lightweight metadata snapshot and wiki scaffold are created.</p>
<h2>Quick start</h2>
<p>For a step-by-step checklist for real projects, see <a href="https://cdn.jsdelivr.net/npm/@misabegovic/pi-brain@0.3.2/GETTING_STARTED.md" target="_blank" rel="noopener">GETTING_STARTED.md</a>.</p>
<pre><code class="language-bash"># Install pi-brain once
pi install @misabegovic/pi-brain

# Create a content-only brain for your project
bash tools/clone-pi-brain.sh ~/projects/my-project-brain &quot;My Org&quot;
cd ~/projects/my-project-brain

# Bootstrap the local environment (Node check, pre-commit hook, health check)
bash tools/setup-local.sh

# Open pi inside the brain and run the setup wizard
pi
/brain:setup
/brain
</code></pre>
<h2>Configuration</h2>
<p>Edit <code>brain.config.yml</code>:</p>
<pre><code class="language-yaml">org: &quot;My Project&quot;
active_repos:
  - my-project
  - my-project-ui
connectors:
  github:
    repos: []
</code></pre>
<p>The extension uses the current project directory as the brain home by default. You can override with:</p>
<ol>
<li><code>PI_BRAIN_HOME</code> environment variable</li>
<li><code>.pi/brain-home</code> file in the current project (absolute path)</li>
</ol>
<h2>Repository layout</h2>
<p>A pi-brain <strong>clone</strong> now contains only content and project-specific config. The installed package provides skills, prompts, themes, templates, personas, tools, and the extension.</p>
<pre><code>my-project-brain/                    # content-only clone
├── brain.config.yml                 # org name + active repos + connectors
├── AGENTS.md                        # rulebook the agent follows
├── README.md                        # human onboarding
├── .brain/
│   └── overrides/                   # optional per-clone overrides
├── wiki/                            # synthesis layer
│   ├── index.md                     # auto-regenerated home page
│   ├── _state/
│   │   └── inbox.md                 # the tend queue
│   └── &lt;scope&gt;/                     # per-project or org scope
│       ├── records/                 # permanent: current truth about the system
│       ├── prds/                    # volatile commitment: product requirement docs
│       ├── adrs/                   # volatile commitment: architecture decision records
│       ├── epics/                  # volatile commitment: outcome groupings
│       ├── bets/                   # volatile commitment: committed bets
│       ├── constraints/            # volatile commitment: durable project rules
│       ├── rfcs/                   # volatile: multi-perspective review documents
│       ├── pitches/                # volatile: pre-bet ideas
│       ├── ai-suggestions/         # volatile: agent drafts awaiting review
│       ├── experiments/            # evidence: A/B tests and experiments
│       └── feedback/               # evidence: user feedback and signals
├── sources/                         # immutable inputs (snapshots, exports, research)
└── log/
    └── log.md                       # append-only operations log
</code></pre>
<p>The <strong>package</strong> (installed globally via <code>pi install @misabegovic/pi-brain</code>) provides:</p>
<ul>
<li><code>extensions/pi-brain.ts</code> — the pi extension</li>
<li><code>skills/*</code> — agent skills</li>
<li><code>prompts/*</code> — prompt templates</li>
<li><code>themes/*</code> — TUI themes</li>
<li><code>tools/*</code> — CLI helpers and templates</li>
<li><code>personas/*</code> — agent and user personas</li>
<li><code>tests/*</code> — smoke and integration tests</li>
</ul>
<h2>Commands</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>What it does</th>
</tr>
</thead>
<tbody><tr>
<td><code>/brain</code></td>
<td>Show the current briefing, inbox count, and last update.</td>
</tr>
<tr>
<td><code>/brain:capture &lt;note&gt;</code></td>
<td>Capture a note into the inbox.</td>
</tr>
<tr>
<td><code>/brain:ask &lt;question&gt;</code></td>
<td>Ask a question over the wiki + sources corpus.</td>
</tr>
<tr>
<td><code>/brain:tend</code></td>
<td>Digest the tend queue.</td>
</tr>
<tr>
<td><code>/brain:sync</code></td>
<td>Validate frontmatter and regenerate <code>wiki/index.md</code>.</td>
</tr>
<tr>
<td><code>/brain:update [--version=&lt;tag&gt;] [--apply]</code></td>
<td>Pull upstream pi-brain template updates into this clone.</td>
</tr>
<tr>
<td><code>/brain:shape &lt;scope&gt; &lt;pitch&gt;</code></td>
<td>Human-gated ADR/PRD/epic/bet authoring.</td>
</tr>
<tr>
<td><code>/brain:in &lt;path-or-url&gt;</code></td>
<td>Ingest a file, directory, or URL into <code>sources/</code> (URLs fetched best-effort).</td>
</tr>
<tr>
<td><code>/brain:setup</code></td>
<td>Bootstrap or reconfigure this directory as a pi-brain home.</td>
</tr>
<tr>
<td><code>/brain:connect</code></td>
<td>Run configured pull connectors to snapshot external sources.</td>
</tr>
<tr>
<td><code>/brain:auto</code></td>
<td>Toggle autonomous brain-maintenance mode.</td>
</tr>
<tr>
<td><code>/brain:continue [slug]</code></td>
<td>Continue in-flight shape/build/inbox work.</td>
</tr>
<tr>
<td><code>/brain:investigate &lt;question&gt;</code></td>
<td>Investigate a bug, risk, or open question.</td>
</tr>
<tr>
<td><code>/brain:links</code></td>
<td>Derive and show the link graph.</td>
</tr>
<tr>
<td><code>/brain:groom</code></td>
<td>Groom the pi-brain corpus.</td>
</tr>
<tr>
<td><code>/brain:state [scope]</code></td>
<td>Regenerate state, roadmap, and options pages.</td>
</tr>
<tr>
<td><code>/brain:deepdive &lt;path&gt; [question]</code></td>
<td>Transiently inspect a target repo file/directory.</td>
</tr>
<tr>
<td><code>/brain:ingest-repo &lt;path-or-url&gt; [scope]</code></td>
<td>Onboard a repository as a maintained project.</td>
</tr>
<tr>
<td><code>/brain:projects</code></td>
<td>List onboarded projects.</td>
</tr>
<tr>
<td><code>/brain:convert [subdir]</code></td>
<td>Convert current repo into a pi-brain clone.</td>
</tr>
</tbody></table>
<h2>Tools</h2>
<p>The extension registers these tools for the agent:</p>
<ul>
<li><code>brain_status</code> — read the status dashboard.</li>
<li><code>brain_capture</code> — append an item to the inbox.</li>
<li><code>brain_ask</code> — search the corpus with TF-IDF ranking over tokenized terms.</li>
<li><code>brain_tend</code> — list the inbox queue.</li>
<li><code>brain_validate</code> — validate wiki frontmatter.</li>
<li><code>brain_views</code> — regenerate the index view.</li>
<li><code>brain_sync</code> — validate + regenerate views.</li>
<li><code>brain_links</code> — derive the link graph.</li>
<li><code>brain_state</code> — regenerate state/roadmap/options pages.</li>
<li><code>brain_deepdive</code> — transiently inspect a target repo file/directory.</li>
<li><code>brain_ingest_repo</code> — onboard a repository as a maintained project.</li>
<li><code>brain_projects</code> — list onboarded projects.</li>
<li><code>brain_convert</code> — convert current repo into a pi-brain clone.</li>
<li><code>brain_pull_connectors</code> — run configured pull connectors.</li>
<li><code>brain_autonomy</code> — read or toggle autonomous brain-maintenance mode.</li>
<li><code>brain_ingest</code> — ingest a file, directory, or URL into <code>sources/</code>.</li>
</ul>
<h2>Design principles</h2>
<ul>
<li><strong>Sources are immutable.</strong> Snapshots and exports land in <code>sources/</code> and are never rewritten.</li>
<li><strong>Wiki is the synthesis.</strong> The agent maintains <code>wiki/</code> with cited claims.</li>
<li><strong>No scheduled LLM runs.</strong> Work queues in <code>wiki/_state/inbox.md</code>; pi digests it when <em>you</em> choose to <code>/brain:tend</code>.</li>
<li><strong>Human-gated commitments.</strong> <code>/brain:shape</code> pauses for approval at phase boundaries.</li>
<li><strong>Confidence floor.</strong> Agent-authored content starts at <code>confidence: low</code> and cannot self-promote to <code>high</code> in the same change.</li>
<li><strong>Local-first.</strong> Each project/customer gets its own clone; no hosted tier required.</li>
</ul>
<h2>Git hook</h2>
<p>Install the pre-commit hook manually:</p>
<pre><code class="language-bash">cp tools/git-hooks/pre-commit .git/hooks/pre-commit
</code></pre>
<p>Or let <code>/brain:setup</code> install it for you. It runs <code>tools/brain-sync.mjs</code> before each commit to validate frontmatter and keep <code>wiki/index.md</code> fresh.</p>
<h2>Testing</h2>
<pre><code class="language-bash">NODE_PATH=/path/to/pi-coding-agent/node_modules \
  node --import /path/to/jiti-register.mjs tests/load.test.ts
</code></pre>
<h2>Roadmap</h2>
<p>pi-brain-specific evolutions — multi-repo aggregation, connector producers, richer TUI widgets, and customer packaging — are tracked in this repo&#39;s own <code>wiki/</code> as the shell is inhabited.</p>
</div></div></section></main><script src="/assets/copy-buttons.js?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564"></script><script src="/assets/package-media.js?v=92f5aeb7-c13f-4a84-9f8a-3d77920dc564"></script><footer class="site-footer"><div class="site-footer-inner"><div class="site-footer-left"><div class="footer-primary"><a class="link" href="https://earendil.com/">Earendil Inc.</a> &amp; Contributors</div><div class="footer-secondary"><a class="link" href="/press-kit">Press Kit</a></div><div class="footer-secondary">MIT License</div></div><div class="site-footer-right"><div class="site-footer-links"><div class="site-footer-social-links"><a href="https://github.com/earendil-works/pi/tree/main/packages/coding-agent" title="GitHub" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><a href="https://www.npmjs.com/package/@earendil-works/pi-coding-agent" title="npm" aria-label="npm"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M0 0v24h24v-24h-24zm19.2 19.2h-2.4v-9.6h-4.8v9.6h-7.2v-14.4h14.4v14.4z"></path></svg></a><a href="https://discord.com/invite/3cU7Bz4UPx" title="Discord" aria-label="Discord"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg></a><a href="https://x.com/pidotdev" title="X" aria-label="X"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"></path></svg></a></div><a href="https://earendil.com" title="Earendil Inc. website" aria-label="Earendil Inc. website" target="_blank" rel="noopener"><svg class="site-footer-earendil-emblem" viewBox="121.24 22.62 81.65 149.38" aria-hidden="true" focusable="false"><path fill="currentColor" d="M202.89 123.89c.4 29.74-40.27 26.97-40.8 48.11h-.05c-.52-21.14-41.19-18.38-40.8-48.11 27.99 0 40.09-46.29 40.82-101.27.74 54.98 12.83 101.27 40.82 101.27h0Z"></path></svg></a><button type="button" class="theme-toggle-button site-footer-theme-toggle" data-theme-toggle="true" aria-label="Theme preference"><span class="theme-toggle-visual" aria-hidden="true"><span class="theme-toggle-icon-stack"><span class="theme-toggle-icon theme-toggle-icon--sun"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"></path></svg></span><span class="theme-toggle-icon theme-toggle-icon--moon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"></path></svg></span></span><span class="theme-toggle-label-stack"><span class="theme-toggle-label theme-toggle-label--system">Auto</span><span class="theme-toggle-label theme-toggle-label--light">Light</span><span class="theme-toggle-label theme-toggle-label--dark">Dark</span></span></span></button></div><div>pi.dev domain graciously donated by <a class="link" href="https://exe.dev">exe.dev</a></div></div></div></footer></div></body></html>
```
