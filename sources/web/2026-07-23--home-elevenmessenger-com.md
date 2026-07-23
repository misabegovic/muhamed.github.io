---
kind: source
source_kind: web
source_url: https://home.elevenmessenger.com/
ingested_at: 2026-07-23
summary: Eleven Messenger home page
---

# https://home.elevenmessenger.com/

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="github-client-id" content="Ov23litbUlNvSD5MlUuv">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#f6f7fb" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#15171c" media="(prefers-color-scheme: dark)">
<title>Sign in with Eleven</title>
<link rel="icon" type="image/png" href="/static/icon-192.png">
<link rel="apple-touch-icon" href="/static/icon-512.png">
<link rel="stylesheet" href="/static/home.css">
<style>
  /* The landing is a single centered card: the Eleven mark, the sign-in
     doors (composed per browser — see composeCard in home.js), and a
     reassuring line. Your spaces appear only once you've signed in. */
  /* Center the card + hint as one group. The shared body is a stretch grid
     (fine for the single-card ceremony pages); with two children here it would
     otherwise push them to opposite ends of the viewport. */
  body.landing { align-content: center; }
  .brand { display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 22px; }
  /* The real app icon (web/static/icon-*.png, copied into home's static). The
     PNG is already a rounded superellipse; the radius just cleans the edge. */
  .brand-mark { width: 64px; height: 64px; border-radius: 15px; display: block; }
  /* System font (San Francisco on Apple) for the wordmark — not the rounded
     display font. */
  .brand-word {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui, sans-serif;
    font-weight: 500; font-size: 26px; letter-spacing: -0.02em;
  }
  /* The doors (#1112): home.js composes the card — ONE primary door (the
     last-used method, else the platform default), the email door beneath it
     (unless it IS the primary), and the quiet "Other ways to sign in" link
     to the all-ways step; demoted doors don't render on the main card at
     all. The Apple button is Apple's standard black look, hand-built (no
     Apple JS SDK — the CSP pins scripts to self); the hairline keeps it from
     dissolving into a dark panel. */
  .apple-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #000; color: #fff;
    border: 1px solid light-dark(#000, rgba(255,255,255,.28));
    position: relative; /* anchors the loading ring */
  }
  /* This inline sheet loads after home.css, so .apple-btn's display beats the
     global .hidden at equal specificity — restate the hide here (the same
     trap .icon-add.hidden answers below). Demoted doors hide this way. */
  .apple-btn.hidden { display: none; }
  /* The passkey mark rides inline in non-flex buttons: baseline-tuck + gap. */
  .pk-ico, .btn-ico { vertical-align: -2.5px; margin-right: 7px; }
  /* Google's door, to their light-button spec: white, hairline border, the
     official four-colour G (inline SVG — their rendered button needs their
     JS, which the CSP rightly blocks; hand-built like Apple's). */
  .google-btn, .ms-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: light-dark(#fff, #131314); color: light-dark(#1f1f1f, #e3e3e3);
    border: 1px solid light-dark(#747775, #8e918f);
    position: relative; /* anchors the loading ring */
  }
  .google-btn.hidden, .ms-btn.hidden { display: none; }
  .gh-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #24292f; color: #fff;
    border: 1px solid light-dark(#24292f, rgba(255,255,255,.28));
    position: relative; /* anchors the loading ring */
  }
  .gh-btn.hidden { display: none; }
  /* A working button wears a ring (Apple hand-over, Send code): the wait
     needs a face even when the server is instant. White reads on both the
     black and accent buttons — the only wearers. Reduced motion keeps a
     static ring (progress must still be visible). */
  button.loading { color: transparent; position: relative; }
  button.loading svg { opacity: 0; }
  button.loading::after {
    content: ""; position: absolute; inset: 0; margin: auto;
    width: 18px; height: 18px; border-radius: 50%;
    border: 2px solid rgba(255,255,255,.35); border-top-color: #fff;
    animation: btn-spin .8s linear infinite;
  }
  @keyframes btn-spin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) { button.loading::after { animation: none; } }
  /* A brief working beat for meaningful transitions that are technically
     instant (sign out): the card holds with a ring so the change reads as
     an event, not a glitch. Case-by-case, per the project memory. */
  main.card.waiting > * { visibility: hidden; }
  main.card.waiting::after {
    content: ""; position: absolute; inset: 0; margin: auto;
    width: 22px; height: 22px; border-radius: 50%;
    border: 3px solid color-mix(in srgb, var(--accent) 30%, transparent);
    border-top-color: var(--accent);
    animation: btn-spin .8s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) { main.card.waiting::after { animation: none; } }
  /* Tapping Apple clears the stage: everything but the spinning button fades
     away, so the wait for the sheet is just the button at work. The pressed
     button wears .loading, and the door can be on the main card OR the
     all-ways step, so the fade is "everything that isn't the working button"
     on either surface. The smoke cover (html.siwa-wait, below with the
     loading chrome) follows on a timer — we can't hear the overlay appear. */
  #signed-out .actions > *, #otherways .actions > *,
  #methods .actions > *, #methods-confirm .actions > *, #methods-combine .actions > *,
  #otherways .icon-back, #otherways .create-title, #newhere { transition: opacity .3s ease, transform .3s ease; }
  main.card.apple-pending :is(#signed-out, #otherways, #methods, #methods-confirm, #methods-combine) .actions > :not(.loading),
  main.card.apple-pending #otherways .icon-back,
  main.card.apple-pending #otherways .create-title,
  main.card.apple-pending #newhere {
    opacity: 0; transform: translateY(4px); pointer-events: none;
  }
  body:has(main.card.apple-pending) .reassure,
  body:has(main.card.apple-pending) .cookie-ask,
  body:has(main.card.apple-pending) .demo-card { opacity: 0; pointer-events: none; }
  @media (prefers-reduced-motion: reduce) {
    #signed-out .actions > *, #otherways .actions > *,
    #methods .actions > *, #methods-confirm .actions > *, #methods-combine .actions > *,
    #otherways .icon-back, #otherways .create-title, #newhere { transition: none; }
  }
  .apple-btn svg { display: block; flex: none; }
  /* The quiet in-card link style: the demoted passkey door wears it, and so
     does the "Other ways to sign in" link (#1112) — one vocabulary. */
  .passkey-link {
    background: none; border: none; padding: 6px 0; font: inherit;
    font-size: 14px; font-weight: 600; color: var(--muted);
    cursor: pointer; text-decoration: underline;
  }
  .passkey-link:disabled { opacity: .5; cursor: default; }
  .passkey-link:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }
  /* The email door, a card step of its own: heading, an address row, the
     no-spam note, then the code row once a code is on its way (home.js
     drives the two steps). */
  #email-door h2, #otherways h2 { margin-bottom: 14px; }
  #email-flow { display: flex; flex-direction: column; gap: 8px; }
  #email-flow form { display: flex; gap: 8px; }
  #email-flow form.hidden { display: none; }
  #email-flow input { flex: 1; min-width: 0; }
  #email-flow button { flex: none; }
  .anchor-note { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.4; }
  /* The after-failure explainer: a quiet inset, left-aligned so the longer copy
     reads as a message rather than more hero text. It also hosts the ONLY
     create path — full-width like the doors above it. */
  #newhere {
    margin: 14px 0 0; padding: 14px; border-radius: 14px;
    background: var(--quiet); text-align: left; font-size: 14px; line-height: 1.45;
  }
  #newhere p { margin: 0; }
  #newhere .path-divider { margin: 12px 0 10px; }
  #otherways .path-divider { margin: 16px 0 12px; font-size: 13px; }
  #newhere button { width: 100%; }
  /* The sealed-list prompt (an email/Apple sign-in that can't decrypt yet). */
  #vault-sealed { margin-top: 6px; }
  #vault-sealed button { width: 100%; }
  /* The reassurance sits OUTSIDE the card, under it. */
  /* The invite card is a guest, not the host: veiled with the rest during
     boot/compose, and its fade TRAILS the main card's reveal by a beat. */
  html.booting .invite-card, html.composing .invite-card { opacity: 0; }
  .invite-card {
    transition: opacity .4s ease .35s;
    background: var(--panel); border: 1px solid var(--border);
    border-radius: 18px; padding: 16px 20px; width: 100%; max-width: 420px;
    box-shadow: 0 8px 24px var(--shadow); margin: 14px auto 0;
    text-align: center; color: var(--muted); font-size: 14px; line-height: 1.5;
  }
  .invite-card p { margin: 0; }
  body:has(#vault.hidden) .invite-card { display: none; }
  .invite-card.hidden { display: none; }
  .cookie-ask { text-align: center; margin: 8px 0 0; }
  .cookie-ask button {
    background: none; border: none; padding: 4px 8px; cursor: pointer;
    color: var(--muted); font-size: 13px; text-decoration: underline;
  }
  #cookie-dialog {
    border: none; border-radius: 22px; padding: 26px 28px; max-width: 380px;
    background: var(--panel); color: inherit; text-align: center;
    box-shadow: 0 18px 50px var(--shadow);
  }
  #cookie-dialog::backdrop { background: rgba(0, 0, 0, .35); }
  #cookie-dialog h2 { margin: 0 0 10px; font-size: 20px; }
  #cookie-dialog p { margin: 0 0 10px; line-height: 1.45; }
  #cookie-dialog .cookie-small { color: var(--muted); font-size: 13px; }
  #cookie-close { margin-top: 6px; }
  .reassure {
    max-width: 360px; text-align: center; margin: 16px auto 0;
    color: var(--muted); font-size: 13px; line-height: 1.45;
  }
  /* The demo offer's own card — it isn't a sign-in, so it leaves the sign-in
     card entirely: a little sales assistant peeking out a shop door. Same
     card vocabulary but tinted toward the brand purple (an 8% dilution —
     muted text holds ≥5.6:1 on it in both themes, comfortably AA). Narrow
     screens stack it below as a full-width card, kept straight; wide ones
     tuck it beside the main card as a tilted flap (absolute against the
     body, its inner edge sliding under the card — main.card's z-index keeps
     the card on top; the tilt is static, so no reduced-motion concern). It
     follows the doors: any state that hides them (signed in, the email
     step) hides it too — CSS-only, so the JS toggle stays the feature
     flag's + the newcomer gate's alone. */
  body.landing { position: relative; }
  .demo-card {
    background: color-mix(in srgb, var(--accent) 8%, var(--panel));
    border: 1px solid color-mix(in srgb, var(--accent) 22%, var(--border));
    border-radius: 18px;
    padding: 18px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 8px 24px var(--shadow);
    margin: 14px auto 0;
    text-align: center;
  }
  /* The shopkeeper pops their head out a beat after the door opens: the
     card animates from tucked-away to its resting peek, delayed so the
     main card registers first. Keyframes animate the FULL transform (the
     resting pose differs per layout). Reduced motion: no pop, the card is
     simply there. */
  .demo-card:not(.hidden) {
    animation: demo-rise 480ms cubic-bezier(.34,1.56,.64,1) 1400ms both;
  }
  @keyframes demo-rise {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .demo-card:not(.hidden) { animation: none; }
  }
  /* The button must read as a BUTTON on the tinted card — plain --quiet
     nearly matches the lavender and the pill vanished (Paul's catch). */
  .demo-card #try-demo {
    background: var(--panel);
    border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--border));
    box-shadow: 0 1px 4px var(--shadow);
  }
  body:has(#signed-out.hidden) .demo-card { display: none; }
  /* The cookie question belongs to the sign-in screen only — it follows the
     doors, exactly like the reassure line beside it. */
  body:has(#signed-out.hidden) .cookie-ask { display: none; }
  @media (min-width: 960px) {
    .demo-card {
      position: absolute; left: calc(50% + 170px); top: 50%;
      width: 252px; margin: 0;
      transform: translateY(-50%) rotate(3deg);
      /* The pivot is the shopkeeper's FEET, well below the fold — the lean
         arcs from a body planted off-screen, not a hinge at the card edge.
         The far origin makes rotate(3deg) throw the card ~25px rightward,
         so `left` is trimmed to land the same resting tuck as before. */
      transform-origin: left calc(100% + 50vh);
      z-index: 0; /* the 16px overlap tucks behind the main card's edge */
    }
    .demo-card:not(.hidden) {
      animation: demo-peek 560ms cubic-bezier(.34,1.56,.64,1) 1400ms both;
    }
    @keyframes demo-peek {
      from { opacity: 1; transform: translateY(-50%) translateX(-240px) rotate(0deg); }
      to   { opacity: 1; transform: translateY(-50%) translateX(0) rotate(3deg); }
    }
  }
  .linkish {
    background: none; border: none; padding: 0; font: inherit; font-weight: 600;
    color: var(--accent); cursor: pointer; text-decoration: underline;
  }
  /* Your spaces, revealed after sign-in. */
  #vault, #create { margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--border); text-align: left; }
  /* Screens fade + rise as they take over the card. */
  @keyframes screen-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
  .screen { animation: screen-in .18s ease; }
  @media (prefers-reduced-motion: reduce) { .screen { animation: none; } }
  .vault-head { display: flex; align-items: center; justify-content: space-between; gap: .5rem; margin-bottom: 6px; }
  /* Three children now (heading, +, kebab): all the free space goes to the
     heading's auto margin, so the two controls sit together on the right. */
  .vault-head h2 { margin-right: auto; }
  #vault h2 { font-size: 19px; font-weight: 400; margin: 0; font-family: var(--font-display); letter-spacing: -0.01em; }
  /* The + that starts a new space, inline with the heading. */
  .icon-add {
    flex: none; width: 30px; height: 30px; border-radius: 50%;
    display: grid; place-items: center; padding: 0; border: none; cursor: pointer;
    background: var(--accent); color: var(--accent-ink);
  }
  .icon-add svg { display: block; }
  /* This inline sheet loads after home.css, so its .icon-add display beats
     the global .hidden at equal specificity — restate the hide here (the
     same trap .menu-pop.hidden answers below). The + showed on empty lists
     for exactly this reason (Paul's catch). */
  .icon-add.hidden { display: none; }
  .icon-add:hover { filter: brightness(1.06); }
  .icon-add:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  /* The account kebab (issue #1098's single control) + its popup menu. The
     kebab is the +'s quiet sibling — same 30px round target, no fill until
     hover/open. The menu hangs under it, right-aligned so it opens inward
     (never clipping the card edge), in the card vocabulary. */
  /* The kebab lives at the CARD's top-right corner — account-scope, above
     the list's own controls (the + keeps the header row's end slot). Inside
     #vault so it exists only for signed-in views; anchored to main.card's
     position. */
  .kebab-wrap { position: absolute; top: 16px; right: 16px; }
  .icon-kebab {
    flex: none; width: 30px; height: 30px; border-radius: 50%;
    display: grid; place-items: center; padding: 0; border: none; cursor: pointer;
    background: none; color: var(--muted);
  }
  .icon-kebab svg { display: block; }
  .icon-kebab:hover, .icon-kebab[aria-expanded="true"] { background: var(--quiet); color: var(--ink); }
  .icon-kebab:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .menu-pop {
    position: absolute; top: calc(100% + 6px); right: 0; z-index: 5;
    min-width: 160px; padding: 6px;
    display: flex; flex-direction: column;
    background: var(--panel); border: 1px solid var(--border); border-radius: 14px;
    box-shadow: 0 12px 32px var(--shadow);
    animation: menu-in .12s ease;
  }
  .menu-pop.hidden { display: none; }
  @keyframes menu-in { from { opacity: 0; } }
  @media (prefers-reduced-motion: reduce) { .menu-pop { animation: none; } }
  .menu-pop [role="menuitem"] {
    font: inherit; font-weight: 600; text-align: left; cursor: pointer;
    background: none; border: none; border-radius: 9px; padding: 9px 12px;
    color: var(--ink);
  }
  .menu-pop [role="menuitem"]:hover { background: var(--quiet); }
  .menu-pop [role="menuitem"]:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
  /* Pointer-born opens: focus still lands in the menu, but the ring is a
     keyboard courtesy — the focused item shows the hover wash instead. */
  .menu-pop.pointer-open [role="menuitem"]:focus-visible { outline: none; background: var(--quiet); }
  /* Sign-in options (issue #1098): the method rows — friendly name + when
     it was added, and a small per-row kebab whose menu holds Add another … /
     Remove (removal arms to an inline are-you-sure, never a browser
     confirm()). List left-aligned like the spaces list; the steps centre
     their titles like the other card steps. */
  #methods, #methods-confirm, #methods-email, #methods-passkey, #methods-combine { text-align: center; }
  ul.methods { list-style: none; margin: 0 0 14px; padding: 0; text-align: left; }
  ul.methods li { display: flex; align-items: center; gap: 8px; padding: 7px 6px; border-radius: 10px; }
  ul.methods .method-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  ul.methods .method-name { font-weight: 600; line-height: 1.25; }
  ul.methods .method-added { color: var(--muted); font-size: .72rem; line-height: 1.3; }
  #methods-list > p.empty { color: var(--muted); font-size: .9rem; margin: 6px 0 14px; text-align: left; }
  /* The row's inline label editor (the sub-line become a small form). */
  ul.methods .label-edit { display: flex; gap: 6px; margin-top: 4px; }
  ul.methods .label-edit input { flex: 1; min-width: 0; font-size: .85rem; padding: 6px 8px; }
  /* The per-row kebab anchors its own .menu-pop (the account menu's
     vocabulary, one wrap per row). */
  .row-kebab-wrap { position: relative; flex: none; }
  /* The email mini-flow rows, shared by the confirm step's re-verify and the
     add-email step. This inline sheet loads after home.css, so the display
     rules beat the global .hidden at equal specificity — restate the hides
     (the .icon-add trap above). */
  .email-mini { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
  .email-mini.hidden { display: none; }
  .email-mini form { display: flex; gap: 8px; }
  .email-mini form.hidden { display: none; }
  .email-mini input { flex: 1; min-width: 0; }
  .email-mini button { flex: none; }
  .email-mini .passkey-link { align-self: flex-start; }
  /* The combine offer rides under whichever status line showed the 409. */
  #combine-offer { margin-top: 10px; }
  #combine-prove .anchor-note, #combine-vault #combine-vault-note { text-align: left; }
  /* The prove note needs the same air above its button as the vault stage's
     sub gets — without it the explainer sits flush on Continue with Apple. */
  #combine-prove .anchor-note { margin-bottom: 14px; }
  #combine-vault .create-sub { margin-bottom: 14px; }
  /* Low-emphasis, full-width: Done (confirmation) and Cancel (archive). */
  .wide-quiet {
    width: 100%; margin-top: 18px; font: inherit; font-weight: 600; cursor: pointer;
    background: var(--quiet); color: var(--ink); border: none; border-radius: 999px; padding: 11px 18px;
  }
  .wide-quiet:hover { filter: brightness(0.98); }
  .wide-quiet:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  /* Create screen: the goes-to-eleven fader (fader.js). Centered and spare —
     one line, one instrument. Feel iterated in prototypes/space-lever.html. */
  #create { text-align: center; }
  /* Back from the create screen: a caret in a quiet circle, pinned to the
     card's top-left corner (iOS-modal style) rather than a text link. */
  .icon-back {
    position: absolute; top: 16px; left: 16px;
    width: 34px; height: 34px; border-radius: 50%;
    display: grid; place-items: center; padding: 0; border: none; cursor: pointer;
    background: var(--quiet); color: var(--ink);
  }
  .icon-back svg { display: block; }
  .icon-back:hover { filter: brightness(0.97); }
  .icon-back:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .create-title {
    font-family: var(--font-display); font-size: 23px; font-weight: 400;
    line-height: 1.2; letter-spacing: -0.015em; margin: 20px 0 4px;
  }
  .create-sub { color: var(--muted); font-size: 14px; margin: 0 0 24px; }
  /* The stage: dust + confetti behind the card, full-viewport. */
  #stage-dust { position: fixed; inset: 0; width: 100vw; height: 100vh; pointer-events: none; }
  main.card { position: relative; z-index: 1; will-change: transform; }
  /* VU colours: desk vernacular (green/amber/red) on purpose — this is a meter. */
  :root { --led-g: light-dark(#31a24c, #3fd063); --led-a: light-dark(#e8a23a, #f0b45a);
          --led-r: light-dark(#e5484d, #ff5d63); --slot: light-dark(#d3d7e2, #0e1014); }
  /* The instrument is not a document: a drag that wanders off the fader must
     never start selecting the headline mid-slide. */
  #create-pitch { -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
  .strip { padding: 4px 2px 10px; }
  .meter { display: flex; gap: 4px; margin: 0 2px 16px; }
  .led {
    flex: 1; height: 9px; border-radius: 2px;
    background: color-mix(in srgb, var(--ink) 10%, transparent);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.18);
    transition: background .06s;
  }
  .led.on-g { background: var(--led-g); box-shadow: 0 0 6px color-mix(in srgb, var(--led-g) 60%, transparent); }
  .led.on-a { background: var(--led-a); box-shadow: 0 0 6px color-mix(in srgb, var(--led-a) 60%, transparent); }
  .led.on-r { background: var(--led-r); box-shadow: 0 0 8px color-mix(in srgb, var(--led-r) 70%, transparent); }
  @keyframes led-fury { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }
  .led.fury { animation: led-fury .14s linear infinite; }
  .fader { position: relative; height: 46px; margin: 0 2px; touch-action: none; cursor: grab; }
  .fader.dragging { cursor: grabbing; }
  .slot {
    position: absolute; left: 0; right: 0; top: 50%; height: 6px; translate: 0 -50%;
    border-radius: 3px; background: var(--slot);
    box-shadow: inset 0 1px 3px rgba(0,0,0,.35), inset 0 -1px 0 rgba(255,255,255,.25);
  }
  .tick {
    position: absolute; top: 4px; width: 1.5px; height: 7px; translate: -50% 0;
    background: color-mix(in srgb, var(--muted) 55%, transparent); border-radius: 1px;
  }
  .tick.major { height: 10px; top: 1px; }
  .num {
    position: absolute; top: 100%; translate: -50% 0; padding-top: 2px;
    font-size: 11px; font-weight: 600; color: var(--muted);
    font-variant-numeric: tabular-nums;
  }
  .num.lit { color: var(--ink); }
  .num.eleven { font-weight: 800; transition: color .12s, transform .12s; }
  .num.eleven.arming { color: var(--led-r); }
  .num.eleven.hit { color: var(--led-r); transform: scale(1.4); }
  .cap {
    position: absolute; top: 50%; translate: -50% -50%;
    width: 30px; height: 44px; border-radius: 6px;
    background: linear-gradient(180deg,
      light-dark(#ffffff, #343946) 0%,
      light-dark(#e7eaf1, #262a33) 48%,
      light-dark(#d9dde8, #1e222a) 52%,
      light-dark(#eef0f6, #2b3039) 100%);
    border: 1px solid light-dark(#c4c9d6, #0c0e12);
    box-shadow: 0 3px 8px var(--shadow), inset 0 1px 0 rgba(255,255,255,.55);
    cursor: grab;
  }
  .cap::before, .cap::after { content: ""; position: absolute; left: 4px; right: 4px; height: 1px;
    background: light-dark(rgba(0,0,0,.10), rgba(255,255,255,.08)); }
  .cap::before { top: 9px; box-shadow: 0 4px 0 light-dark(rgba(0,0,0,.10), rgba(255,255,255,.08)); }
  .cap::after { bottom: 9px; box-shadow: 0 -4px 0 light-dark(rgba(0,0,0,.10), rgba(255,255,255,.08)); }
  .stripe {
    position: absolute; top: 6px; bottom: 6px; left: 50%; width: 3px; translate: -50% 0;
    border-radius: 2px; background: var(--accent); z-index: 1;
  }
  .fader.dragging .cap { cursor: grabbing; }
  .cap:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  /* The wait: still AT eleven around it (the fader keeps the card rattling). */
  #create-building { padding: 18px 0 6px; }
  .build-spin {
    width: 34px; height: 34px; margin: 4px auto 14px; border-radius: 50%;
    border: 3px solid color-mix(in srgb, var(--ink) 12%, transparent);
    border-top-color: var(--accent);
    animation: spin .7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  #create-building h3 { font-size: 17px; font-weight: 400; margin: 0 0 4px; }
  #create-building p { color: var(--muted); font-size: 14px; margin: 0; }
  /* Reduced motion: no strobe, no spinner spin, no transitions — states still
     change, instantly. (Dust, confetti, shake, and VU flicker are skipped in
     fader.js under the same query.) */
  @media (prefers-reduced-motion: reduce) {
    .led.fury { animation: none; }
    .led, .num.eleven { transition: none; }
    .build-spin { animation: none; opacity: .5; }
  }
  /* Archive screen. The list is quiet; the permanent delete is deliberately loud. */
  #archive { text-align: center; }
  #destroy-zone { margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--border); }
  /* When destroying is the only action (last admin + owner), the zone IS the
     primary action — no footnote separator; the button sits where Delete did. */
  #destroy-zone.primary { margin-top: 0; padding-top: 0; border-top: none; }
  .danger-link { color: var(--danger); font-size: .9rem; }
  .danger-link:disabled { opacity: .4; cursor: default; text-decoration: none; }
  .danger-ink { color: var(--danger); }
  .stern-copy b { color: var(--ink); overflow-wrap: anywhere; }
  #delete-arm {
    width: 100%; margin: 6px 0 12px; padding: 10px 12px; text-align: center;
    font: inherit; font-size: .95rem;
    color: var(--ink); background: var(--quiet);
    border: 1px solid var(--border); border-radius: 10px;
  }
  #delete-arm:focus-visible { outline: none; border-color: var(--danger); background: var(--panel); }
  .btn-danger {
    width: 100%; font: inherit; font-weight: 700; cursor: pointer;
    background: var(--danger); color: #fff; border: none; border-radius: 999px; padding: 11px 18px;
  }
  .btn-danger:disabled { opacity: .4; cursor: default; }
  .btn-danger:focus-visible { outline: 2px solid var(--danger); outline-offset: 2px; }
  #archive-stern .wide-quiet { margin-top: 10px; }
  #archive-checking { padding: 34px 0 12px; }
  /* The per-row archive: a box glyph that reveals on hover, like the drag grip.
     Reversible, so it stays neutral (not danger-red). */
  .row-archive {
    flex: none; display: grid; place-items: center; width: 22px; height: 30px;
    padding: 0; border: none; background: none; color: var(--muted);
    border-radius: 7px; cursor: pointer;
    opacity: 0; transition: opacity .12s ease, background .12s ease, color .12s ease;
  }
  .row-archive svg { display: block; }
  .row-archive:hover { background: var(--quiet); color: var(--ink); }
  .row-archive:focus-visible { opacity: 1; outline: 2px solid var(--accent); outline-offset: 1px; }
  @media (hover: hover) { ul.servers li:hover .row-archive { opacity: .5; } }
  @media (hover: none) { .row-archive { opacity: .4; } }
  @media (prefers-reduced-motion: reduce) { .row-archive { transition: none; } }

  /* The per-row Upgrade: a quiet pill that reveals on hover like the archive
     glyph — shown only on spaces this account created, when the provisioner
     offers billing. Always focusable (focus reveals it), ≥24px tall. */
  .row-upgrade {
    flex: none; font: inherit; font-size: .72rem; font-weight: 600; cursor: pointer;
    min-height: 24px; padding: 3px 10px; border-radius: 999px;
    color: var(--muted); background: none; border: 1px solid var(--border);
    opacity: 0; transition: opacity .12s ease, color .12s ease, border-color .12s ease;
  }
  .row-upgrade:hover { color: var(--accent); border-color: var(--accent); }
  .row-upgrade:focus-visible { opacity: 1; outline: 2px solid var(--accent); outline-offset: 1px; }
  .row-upgrade:disabled { opacity: .4; cursor: default; }
  @media (hover: hover) { ul.servers li:hover .row-upgrade { opacity: .7; } }
  @media (hover: none) { .row-upgrade { opacity: .55; } }
  @media (prefers-reduced-motion: reduce) { .row-upgrade { transition: none; } }
  /* Upgrade screen: one button per plan — quiet rows, name left, price right. */
  #upgrade { text-align: center; }
  #upgrade-tiers { display: flex; flex-direction: column; gap: 8px; margin-top: 14px; }
  .tier-btn {
    display: flex; align-items: baseline; justify-content: space-between; gap: 10px;
    width: 100%; padding: 12px 14px; border-radius: 12px; cursor: pointer;
    font: inherit; text-align: left;
    color: var(--ink); background: var(--quiet); border: 1px solid var(--border);
  }
  .tier-btn:hover { border-color: var(--accent); }
  .tier-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .tier-btn:disabled { opacity: .5; cursor: default; }
  .tier-btn .tier-name { font-weight: 700; }
  .tier-btn .tier-price { color: var(--muted); font-size: .9rem; font-variant-numeric: tabular-nums; }
  .tier-btn .tier-approx { color: var(--muted); font-size: .78rem; font-variant-numeric: tabular-nums; }
  .tier-btn .tier-band-std {
    font-size: .62rem; font-weight: 600; color: var(--muted);
    padding: 1px 8px; border: 1px solid var(--border); border-radius: 999px;
  }
  /* The honor-band row: four open prices, one selected — selection is shown
     by weight + border, never colour alone. */
  .band-row { display: flex; justify-content: center; gap: 6px; margin-top: 12px; flex-wrap: wrap; }
  .band-chip {
    font: inherit; font-size: .82rem; cursor: pointer; padding: 5px 12px;
    min-height: 28px; border-radius: 999px;
    color: var(--ink); background: none; border: 1px solid var(--border);
  }
  .band-chip.selected { border-color: var(--accent); border-width: 2px; font-weight: 700; padding: 4px 11px; }
  .band-chip:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .band-note, .fx-note, .cap-note { color: var(--muted); font-size: .8rem; margin: 8px 0 0; }
  .fx-note .fx-currency {
    font: inherit; font-size: .8rem; color: var(--ink);
    background: var(--quiet); border: 1px solid var(--border); border-radius: 6px; padding: 1px 4px;
  }
  /* The tier badge on an upgraded space's row, with Manage beside it. */
  .badge-row { display: inline-flex; align-items: center; gap: 8px; align-self: flex-start; margin-top: 2px; }
  .row-manage {
    font: inherit; font-size: .62rem; font-weight: 600; cursor: pointer;
    padding: 1px 8px; border-radius: 999px; line-height: inherit;
    color: var(--muted); background: none; border: 1px solid var(--border);
    /* Same visual height as the badge; the tap target stays ≥24px via an
       invisible hit-area extension, not visual bulk. */
    position: relative;
  }
  .row-manage::before { content: ""; position: absolute; inset: -6px; border-radius: 999px; }
  /* "ends 11 Jul 2027" beside a cancelled subscription's badge. */
  .sub-ends { color: var(--muted); font-size: .72rem; }
  .row-manage:hover { color: var(--accent); border-color: var(--accent); }
  .row-manage:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
  .row-manage:disabled { opacity: .4; cursor: default; }
  .supporter-badge {
    font-size: .62rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em;
    color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
    border-radius: 999px; padding: 1px 7px;
  }

  /* The inline "Archived <name> · Undo" note — occupies layout, never a toast. */
  .undo-note {
    display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap;
    margin: 0 0 10px; padding: 8px 12px; border-radius: 10px;
    background: var(--quiet); color: var(--muted); font-size: .85rem;
  }
  /* The "Archived (N)" foot button: a quiet full-width row that opens the archive. */
  .archived-open {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
    width: 100%; margin-top: 12px; padding: 9px 12px; border-radius: 10px;
    font: inherit; font-size: .9rem; font-weight: 600; cursor: pointer; text-align: left;
    color: var(--muted); background: none; border: 1px solid var(--border);
    transition: background .12s ease, color .12s ease;
  }
  .archived-open > span:first-child { display: inline-flex; align-items: center; gap: 8px; }
  .archived-open svg { display: block; opacity: .85; }
  .archived-open .chev { font-size: 1.1rem; line-height: 1; color: var(--muted); }
  .archived-open:hover { background: var(--quiet); color: var(--ink); }
  .archived-open:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  @media (prefers-reduced-motion: reduce) { .archived-open { transition: none; } }

  /* Archive list rows: name + Unarchive + Delete pills. Quiet, non-draggable. */
  ul.servers.archived li { gap: 6px; }
  ul.servers.archived li .name { font-weight: 600; line-height: 1.25; color: var(--ink); }
  ul.servers.archived li .srv-main { text-align: left; }
  .pill {
    flex: none; font: inherit; font-size: .8rem; font-weight: 600; cursor: pointer;
    padding: 5px 10px; border-radius: 999px;
    color: var(--ink); background: var(--quiet); border: 1px solid transparent;
  }
  .pill:hover { filter: brightness(0.97); }
  .pill.danger-ink { color: var(--danger); }
  .pill:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  #archive-list > p.empty { color: var(--muted); font-size: .9rem; margin: 6px 0 0; }
  /* Section headings: "Starred" and "More" — only shown once some are starred. */
  .spaces-head {
    font-size: .7rem; text-transform: uppercase; letter-spacing: .05em;
    color: var(--muted); font-family: var(--font-display); margin: 12px 0 3px;
  }
  .spaces-head:first-child { margin-top: 0; }
  #spaces > p.empty { color: var(--muted); font-size: .9rem; margin: 6px 0 0; }
  /* Fuzzy search over the list — appears once there are a few spaces to sift. */
  #space-search {
    width: 100%; margin: 4px 0 12px; padding: 8px 12px;
    font: inherit; font-size: .9rem;
    color: var(--ink); background: var(--quiet);
    border: 1px solid transparent; border-radius: 10px;
  }
  #space-search::placeholder { color: var(--muted); }
  #space-search:focus-visible { outline: none; border-color: var(--accent); background: var(--panel); }
  ul.servers { list-style: none; margin: 0; padding: 0; }
  ul.servers li {
    display: flex; align-items: center; gap: 8px;
    padding: 5px 6px; border-radius: 10px;
    /* No separator lines: the hover wash (below) is the interactive cue, and the
       lifted row + the gap it leaves carry the structure while dragging. */
  }
  /* Tight line-heights so a row's name + meta lines read as one compact block,
     not airy lines (the card body sets 1.5, which is too loose for a list). */
  .srv-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  ul.servers li a.name { font-weight: 600; line-height: 1.25; color: var(--ink); text-decoration: none; }
  ul.servers li a.name:hover { text-decoration: underline; }
  /* The storage meter's reading, under the name — quieter still. */
  ul.servers li .srv-usage { color: var(--muted); opacity: .75; font-size: .72rem; line-height: 1.3; }
  /* Star toggle: a quiet outline star that fills gold when on. */
  .star {
    flex: none; background: none; border: none; padding: 2px; cursor: pointer;
    font-size: 18px; line-height: 1; color: var(--muted);
  }
  .star.on { color: #f2b705; }
  .star:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }

  /* Drag-to-reorder. Idle rows are calm; hover reveals the affordance — a soft
     brand-tinted wash on the row, and a grip that fades in on the right. Grabbing
     lifts the row off the card (shadow) while the others slide aside. */
  .drag-handle {
    flex: none; display: grid; place-items: center; width: 22px; height: 30px;
    padding: 0; border: none; background: none; color: var(--muted);
    border-radius: 7px; cursor: grab; touch-action: none;
    -webkit-tap-highlight-color: transparent;
    opacity: 0; transition: opacity .12s ease, background .12s ease, color .12s ease;
  }
  .drag-handle svg { fill: currentColor; display: block; }
  .drag-handle:hover { background: var(--quiet); color: var(--ink); }
  .drag-handle:active { cursor: grabbing; }
  .drag-handle:focus-visible { opacity: 1; outline: 2px solid var(--accent); outline-offset: 1px; }
  @media (hover: hover) {
    ul.servers li:hover { background: color-mix(in srgb, var(--accent) 7%, transparent); }
    ul.servers li:hover .drag-handle { opacity: .5; }
  }
  @media (hover: none) { .drag-handle { opacity: .4; } }  /* touch: no hover to reveal it */
  ul.servers li.dragging {
    background: var(--panel); box-shadow: 0 10px 28px var(--shadow);
    position: relative; z-index: 3; cursor: grabbing;
  }
  ul.servers li.dragging .drag-handle { opacity: 1; color: var(--ink); }
  @media (prefers-reduced-motion: reduce) { .drag-handle { transition: none; } }

  /* Ambient smoke + motes (bootscene.js), pinned behind ALL content (z-index -1,
     above the page bg but under the card/text). Started on load for everyone and
     left running — the page's living backdrop. Dimmed as a background; fuller
     during the loader splash (html.booting), so it recedes as the content lands. */
  .boot-canvas {
    position: fixed; inset: 0; width: 100%; height: 100%;
    z-index: -1; pointer-events: none;
    opacity: .4; transition: opacity .6s ease;
  }
  html.booting .boot-canvas { opacity: 1; }
  /* The returning-member loading chrome: the Eleven lockup + tagline centred over
     the smoke while the spaces list decrypts. Shown only when html.booting (a
     live session, set pre-paint), which also hides the content beneath so the
     Sign-in screen never flashes. On finish bootscene.js fades this out
     (.cover-out) and drops html.booting — the card fades in, the smoke stays. */
  .app-loading {
    position: fixed; inset: 0; z-index: 2;
    display: none; place-items: center; align-content: center;
    transition: opacity .5s ease;
  }
  html.booting .app-loading { display: grid; }
  /* A session refresh shouldn't feel like a journey: on the non-siwa booting
     paths the pageantry — the lockup chrome and the smoke's full ramp —
     holds for 500ms before appearing at all. The cover still BLOCKS from
     frame zero (the content-hiding rules below are undelayed); only its
     visibility waits. A load that lifts inside the window never shows
     chrome: bootscene's fast path reveals the content near-instantly
     (html.boot-fast trims the content fade to an imperceptible beat, and
     comes off right after so the stage-clear fades keep their timing). The
     siwa journey face (html.siwa-wait) deliberately keeps its frame-zero
     chrome. Opacity-only, so it stays under reduced motion like the fades. */
  html.booting:not(.siwa-wait) .app-loading { animation: cover-wait .45s ease .5s both; }
  @keyframes cover-wait { from { opacity: 0; } to { opacity: 1; } }
  html.booting:not(.siwa-wait) .boot-canvas { transition-delay: .5s; }
  html.boot-fast main.card, html.boot-fast .reassure,
  html.boot-fast .demo-card, html.boot-fast .cookie-ask { transition-duration: .08s; }
  /* Hide the content (card, its outside-the-card reassurance, and the demo
     card) beneath the loader so nothing flashes; all fade back in when
     booting drops. */
  html.booting main.card, html.booting .reassure, html.booting .demo-card, html.booting .cookie-ask,
  html.composing main.card, html.composing .reassure, html.composing .demo-card, html.composing .cookie-ask { opacity: 0; }
  /* The composing lift is quick — a plain visitor shouldn't feel a fade. */
  html.compose-reveal main.card, html.compose-reveal .reassure,
  html.compose-reveal .demo-card, html.compose-reveal .cookie-ask { transition-duration: .12s; }
  main.card, .reassure, .demo-card, .cookie-ask { transition: opacity .5s ease; }
  /* cover-out keeps the chrome displayed (booting has already dropped) so the
     fade actually plays; the timeout in finishHomeLoader then parks it. */
  .app-loading.cover-out { display: grid; opacity: 0; pointer-events: none; }
  .boot-brand { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .boot-goesto {
    position: absolute; left: 0; right: 0; bottom: 18px; margin: 0;
    text-align: center; color: var(--muted); font-size: 13px; letter-spacing: .02em;
  }
  /* The Apple round trip's waiting face (html.siwa-wait, both legs of the
     trip): the same cover, but a ring where the lockup sits — no Eleven
     brand until the sign-in has actually confirmed. Verify success drops
     siwa-wait and stamps .brand-in: the lockup fades in (~400ms), dwells a
     beat, then the cover lifts while the spaces screen slides up beneath it
     (#vault.arrive). Reduced motion: instant swaps, no slide — the ring's
     own static-under-reduce rule is .build-spin's. */
  .boot-ring { display: none; }
  html.siwa-wait .app-loading .boot-ring { display: block; }
  html.siwa-wait .app-loading .boot-brand,
  html.siwa-wait .app-loading .boot-goesto { display: none; }
  .app-loading.brand-in .boot-brand,
  .app-loading.brand-in .boot-goesto { animation: brand-in .4s ease both; }
  @keyframes brand-in { from { opacity: 0; } }
  #vault.arrive { animation: vault-arrive .35s ease-out; }
  @keyframes vault-arrive { from { opacity: 0; transform: translateY(14px); } }
  @media (prefers-reduced-motion: reduce) {
    .app-loading.brand-in .boot-brand,
    .app-loading.brand-in .boot-goesto { animation: none; }
    #vault.arrive { animation: none; }
  }
</style>
<script>
  // Pre-paint gate: if this browser holds a live session — the tab's own, or
  // a stay-signed-in one in localStorage (home_session_expires is a plain
  // epoch-ms key exactly so this check needs no JSON) — or is landing back
  // from Apple's sign-in (#siwa= fragment) or the mail's magic link (#email=
  // fragment), show the loading cover from the very first frame, so no path
  // ever flashes the Sign-in screen. Both fragment landings get the WAITING
  // face (smoke + ring, no lockup — siwa-wait): the brand only lands once the
  // sign-in has confirmed. Signed-out visitors skip it all; home.js lifts the
  // cover on every path it was raised for.
  try {
    // The card never paints uncomposed: composeCard() decides its doors
    // (last-used/platform), so the default markup must not get a frame.
    // home.js lifts this at the end of module init on every path.
    document.documentElement.classList.add("composing");
    if (location.hash.indexOf("#siwa=") === 0 || location.hash.indexOf("#oidc=") === 0 ||
        location.hash.indexOf("#oauth=") === 0 || location.hash.indexOf("#email=") === 0)
      document.documentElement.classList.add("booting", "siwa-wait");
    else if ((sessionStorage.getItem("home_token") && sessionStorage.getItem("home_dek")) ||
             +localStorage.getItem("home_session_expires") > Date.now())
      document.documentElement.classList.add("booting");
  } catch (e) {}
</script>
</head>
<body class="landing">
<!-- Persistent ambient background (bootscene.js): soft smoke + rising dust motes
     drifting behind everything. Started on load for all visitors and left running
     — the returning-member loading chrome (below) fades over it, then lifts to
     leave the smoke as the page's living backdrop. -->
<canvas class="boot-canvas" id="boot-canvas" aria-hidden="true"></canvas>
<!-- Stage for the create-fader's dust + confetti (fader.js) — full-viewport,
     behind the card, drawn only while the create screen is live. -->
<canvas id="stage-dust" aria-hidden="true"></canvas>
<!-- The returning-member loading chrome: the Eleven lockup + tagline over the
     smoke while the spaces list decrypts, so a refresh doesn't flash the Sign-in
     screen first. Shown only when html.booting (a live session — see the
     pre-paint gate above); it fades out once the list is ready, and the smoke
     behind it stays. -->
<div id="app-loading" class="app-loading" aria-hidden="true">
  <div class="boot-brand">
    <img class="brand-mark" src="/static/icon-512.png" width="64" height="64" alt="Eleven" />
    <div class="brand-word">Eleven</div>
  </div>
  <!-- The Apple wait face (html.siwa-wait): a ring where the lockup sits —
       the brand only lands once the sign-in has confirmed. -->
  <div class="build-spin boot-ring" aria-hidden="true"></div>
  <p class="boot-goesto">The group chat of dreams</p>
</div>
<main class="card">
  <div class="brand">
    <img class="brand-mark" src="/static/icon-512.png" width="64" height="64" alt="Eleven" />
    <div class="brand-word">Eleven</div>
  </div>

  <!-- The signed-out doors; hidden once you're in (see showVault). home.js
       composes them (#1112): ONE primary door — the last-used method when
       this browser has one, else the platform default — with the email door
       beneath it (unless it IS the primary) and the quiet "Other ways to
       sign in" link to the all-ways step below. Demoted doors don't render
       here. Apple and email are find-or-create, one button each, no sign-in
       vs sign-up split. Create-a-passkey appears only after a failed
       ceremony (#newhere). -->
  <div id="signed-out">
    <div class="actions" id="main-doors">
      <button id="apple-signin" class="apple-btn" type="button"><svg viewBox="0 0 814 1000" width="14" height="17" fill="currentColor" aria-hidden="true"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>Continue with Apple</button>
      <button id="google-signin" class="google-btn hidden" type="button"><svg viewBox="0 0 48 48" width="16" height="16" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>Continue with Google</button>
      <button id="microsoft-signin" class="ms-btn hidden" type="button"><svg viewBox="0 0 21 21" width="15" height="15" aria-hidden="true"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg>Continue with Microsoft</button>
      <button id="github-signin" class="gh-btn hidden" type="button"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>Continue with GitHub</button>
      <button id="email-signin" class="secondary" type="button">Continue with email</button>
      <button id="signin" class="passkey-link" type="button"><svg class="pk-ico" viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true"><circle cx="6" cy="4.4" r="2.7"/><path d="M1.2 13.9a4.8 4.8 0 0 1 9.6 0z"/><path fill-rule="evenodd" d="M12.1 7.3a2.1 2.1 0 0 1 2.06 2.52l1.6 1.6-1.2 1.2-.7-.7-.65.65-.85-.85-.62.62a2.1 2.1 0 1 1 .36-4.94zm-.9 1.6a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z"/></svg>Sign in with a passkey</button>
      <button id="other-ways" class="passkey-link" type="button">Other ways to sign in</button>
    </div>

    <!-- Revealed only after a failed or cancelled passkey ceremony — the one
         place the create path lives now. Cancelled and no-passkey are
         deliberately indistinguishable (NotAllowedError either way), so the
         explainer serves both readings: a returning member likely picked the
         wrong passkey — try again — and someone genuinely new creates theirs
         here. -->
    <div id="newhere" class="hidden screen">
      <p><strong>That didn't work?</strong> It might just be the wrong passkey —
         your Eleven sign-in is one key that opens every space you belong to, so
         if you've signed in before, try again and choose it from the list.</p>
      <div class="path-divider">New here?</div>
      <button id="create-passkey" class="secondary" type="button"><svg class="pk-ico" viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true"><circle cx="6" cy="4.4" r="2.7"/><path d="M1.2 13.9a4.8 4.8 0 0 1 9.6 0z"/><path fill-rule="evenodd" d="M12.1 7.3a2.1 2.1 0 0 1 2.06 2.52l1.6 1.6-1.2 1.2-.7-.7-.65.65-.85-.85-.62.62a2.1 2.1 0 1 1 .36-4.94zm-.9 1.6a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z"/></svg>Create your passkey</button>
    </div>
  </div>

  <!-- The email door (email.go), a card step of its own — the doors swap out
       for it (same screen-swap pattern as the signed-in screens): address →
       code → session. Forms so Enter submits and native validation gates;
       home.js drives the steps. -->
  <div id="email-door" class="hidden screen">
    <button id="email-back" class="icon-back" type="button" aria-label="Back to sign-in"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title">Sign in with email</h2>
    <div id="email-flow">
      <form id="email-form">
        <input id="email-addr" type="email" required autocomplete="email"
               placeholder="you@example.com" aria-label="Your email address">
        <button id="email-send" type="submit">Send code</button>
      </form>
      <p class="anchor-note" id="email-note">We never keep your email address. No spam, ever.</p>
      <form id="email-code-form" class="hidden">
        <input id="email-code" type="text" required inputmode="numeric" pattern="[0-9]{6}"
               maxlength="6" autocomplete="one-time-code" placeholder="6-digit code"
               aria-label="The 6-digit code from your email">
        <button id="email-verify" type="submit">Sign in</button>
      </form>
    </div>
  </div>

  <!-- The all-ways step (#1112): every door on one card, reached from the
       quiet "Other ways to sign in" link. Same screen-swap pattern as the
       email door (it hides #signed-out, so the greeter/cookie/reassure
       visibility rules follow along), and each row invokes the SAME handler
       as the main card's version of that door. -->
  <div id="otherways" class="hidden screen">
    <button id="otherways-back" class="icon-back" type="button" aria-label="Back to sign-in"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title">Other ways to sign in</h2>
    <p class="create-sub">We don't store your data no matter what method you use.</p>
    <div class="actions">
      <button id="otherways-passkey" class="secondary" type="button"><svg class="pk-ico" viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true"><circle cx="6" cy="4.4" r="2.7"/><path d="M1.2 13.9a4.8 4.8 0 0 1 9.6 0z"/><path fill-rule="evenodd" d="M12.1 7.3a2.1 2.1 0 0 1 2.06 2.52l1.6 1.6-1.2 1.2-.7-.7-.65.65-.85-.85-.62.62a2.1 2.1 0 1 1 .36-4.94zm-.9 1.6a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z"/></svg>Sign in with a passkey</button>
      <button id="otherways-email" class="secondary" type="button">Continue with email</button>
    </div>
    <div class="path-divider">For those oppressed by convenience…</div>
    <div class="actions">
      <button id="otherways-apple" class="apple-btn" type="button"><svg viewBox="0 0 814 1000" width="14" height="17" fill="currentColor" aria-hidden="true"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>Continue with Apple</button>
      <button id="otherways-github" class="gh-btn" type="button"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>Continue with GitHub</button>
      <button id="otherways-microsoft" class="ms-btn" type="button"><svg viewBox="0 0 21 21" width="15" height="15" aria-hidden="true"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg>Continue with Microsoft</button>
      <button id="otherways-google" class="google-btn" type="button"><svg viewBox="0 0 48 48" width="16" height="16" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>Continue with Google</button>
    </div>
  </div>

  <!-- Inline status only — never a floating toast (product-wide rule). -->
  <p class="status" id="status"></p>

  <!-- Signed in: your spaces. The + (shown only where this home server offers
       provisioning) opens the create screen below. -->
  <div id="vault" class="hidden screen">
    <div class="vault-head">
      <h2>Your Eleven spaces</h2>
      <button id="open-create" class="icon-add hidden" type="button" aria-label="Create a new space"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
      <!-- The account menu (issue #1098's single control): everything about
           the account itself hangs off this one kebab — "Sign-in options"
           (the #methods step) and Sign out; account-merge joins it later. -->
      <div class="kebab-wrap">
        <button id="account-menu-btn" class="icon-kebab" type="button" aria-label="Account menu"
                aria-haspopup="menu" aria-expanded="false"><svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor"><circle cx="8" cy="3" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="13" r="1.5"/></svg></button>
        <div id="account-menu" class="menu-pop hidden" role="menu" aria-label="Account menu">
          <button id="how-signin" type="button" role="menuitem">Sign-in options</button>
          <button id="signout" type="button" role="menuitem">Sign out</button>
        </div>
      </div>
    </div>
    <input id="space-search" class="hidden" type="search" inputmode="search"
           autocomplete="off" spellcheck="false" placeholder="Search spaces" aria-label="Search your spaces">
    <!-- The sealed-list state (an email/Apple sign-in): the account is real and
         the token works, but the list only opens under a passkey's PRF — the
         identity-vs-key split, made visible. The prompt IS the trigger. -->
    <div id="vault-sealed" class="hidden">
      <button id="unlock-passkey" type="button" class="secondary"><svg class="pk-ico" viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true"><circle cx="6" cy="4.4" r="2.7"/><path d="M1.2 13.9a4.8 4.8 0 0 1 9.6 0z"/><path fill-rule="evenodd" d="M12.1 7.3a2.1 2.1 0 0 1 2.06 2.52l1.6 1.6-1.2 1.2-.7-.7-.65.65-.85-.85-.62.62a2.1 2.1 0 1 1 .36-4.94zm-.9 1.6a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z"/></svg>Unlock your spaces with your passkey</button>
    </div>
    <div id="spaces"></div>
    <p class="status" id="vault-status"></p>
  </div>

  <!-- Sign-in options (issue #1098): every way into this account, reached
       from the account kebab. Rows come from GET /api/anchors, each with its
       own small kebab (Add another …, Remove — removal keeps an inline
       are-you-sure beat; the server's last-method refusal shows verbatim).
       A kind with ZERO linked entries gets a big first-add button below the
       list instead (home.js builds both from METHOD_KINDS). Every flow is a
       SERIAL card step — the confirm beat, add-email, and add-passkey each
       swap the whole card, one screen at a time, each with a back. -->
  <div id="methods" class="hidden screen">
    <button id="methods-back" class="icon-back" type="button" aria-label="Back to your spaces"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title" id="methods-title" tabindex="-1">Sign-in options</h2>
    <p class="create-sub">Every way into your account. Add a second way so
       you're never locked out, or remove one you no longer use.</p>
    <div id="methods-list"></div>
    <div id="methods-add" class="actions"></div>
    <p class="status" id="methods-status"></p>
    <!-- The combine doorway (#1098): a link-mode 409 ("already signs in
         somewhere else") grows this offer under whichever status line showed
         it — home.js moves the node beside the error (list or add-email
         step) and reveals it. -->
    <div id="combine-offer" class="actions hidden">
      <button id="combine-offer-go" class="secondary" type="button">Combine the accounts</button>
    </div>
  </div>

  <!-- Confirm it's you — its own serial step, FIRST whenever the proof
       pocket is empty: list → here → the add step (or the removal) → list.
       home.js offers EVERY door the account can actually run — the server
       takes a fresh proof from any of them — last-used first (the email
       button unfolds into the code mini-form). -->
  <div id="methods-confirm" class="hidden screen">
    <button id="methods-confirm-back" class="icon-back" type="button" aria-label="Back to sign-in options"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title" id="methods-confirm-title" tabindex="-1">Confirm it&rsquo;s you</h2>
    <p class="create-sub" id="methods-confirm-why"></p>
    <div class="actions" id="methods-confirm-actions">
      <button id="methods-confirm-passkey" class="secondary hidden" type="button">Confirm with your passkey</button>
      <button id="methods-confirm-apple" class="apple-btn hidden" type="button"><svg viewBox="0 0 814 1000" width="14" height="17" fill="currentColor" aria-hidden="true"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>Confirm with Apple</button>
      <button id="methods-confirm-google" class="google-btn hidden" type="button"><svg viewBox="0 0 48 48" width="16" height="16" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>Confirm with Google</button>
      <button id="methods-confirm-microsoft" class="ms-btn hidden" type="button"><svg viewBox="0 0 21 21" width="15" height="15" aria-hidden="true"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg>Confirm with Microsoft</button>
      <button id="methods-confirm-github" class="gh-btn hidden" type="button"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>Confirm with GitHub</button>
      <button id="methods-confirm-email" class="secondary hidden" type="button">Email me a code</button>
    </div>
    <div id="methods-cemail" class="email-mini hidden">
      <form id="methods-cemail-form">
        <input id="methods-cemail-addr" type="email" required autocomplete="email"
               placeholder="you@example.com" aria-label="The email address you sign in with">
        <button id="methods-cemail-send" type="submit">Send code</button>
      </form>
      <form id="methods-cemail-code-form" class="hidden">
        <input id="methods-cemail-code" type="text" required inputmode="numeric" pattern="[0-9]{6}"
               maxlength="6" autocomplete="one-time-code" placeholder="6-digit code"
               aria-label="The 6-digit code from your email">
        <button id="methods-cemail-verify" type="submit">Continue</button>
      </form>
    </div>
    <p class="status" id="methods-confirm-status"></p>
  </div>

  <!-- Add an email address — its own serial step (the sign-in door's
       two-step shape: address → code), posting verify with link:true. -->
  <div id="methods-email" class="hidden screen">
    <button id="methods-email-back" class="icon-back" type="button" aria-label="Back to sign-in options"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title" id="methods-email-title" tabindex="-1">Add an email address</h2>
    <p class="create-sub">A 6-digit code confirms it's yours. We never keep the
       address — only a fingerprint that lets you sign in with it.</p>
    <div class="email-mini">
      <form id="methods-email-form">
        <input id="methods-email-addr" type="email" required autocomplete="email"
               placeholder="you@example.com" aria-label="Your email address">
        <button id="methods-email-send" type="submit">Send code</button>
      </form>
      <form id="methods-email-code-form" class="hidden">
        <input id="methods-email-code" type="text" required inputmode="numeric" pattern="[0-9]{6}"
               maxlength="6" autocomplete="one-time-code" placeholder="6-digit code"
               aria-label="The 6-digit code from your email">
        <button id="methods-email-verify" type="submit">Add email</button>
      </form>
    </div>
    <p class="status" id="methods-email-status"></p>
  </div>

  <!-- Add another passkey — its own serial step: one button, so the
       ceremony fires inside a fresh tap (Safari activation) with the
       proof-carrying options prefetched when the step opened. -->
  <div id="methods-passkey" class="hidden screen">
    <button id="methods-passkey-back" class="icon-back" type="button" aria-label="Back to sign-in options"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title" id="methods-passkey-title" tabindex="-1">Add another passkey</h2>
    <p class="create-sub">Create a passkey on this device or in your password
       manager — one more one-tap way into this account.</p>
    <div class="actions">
      <button id="methods-passkey-create" class="secondary" type="button">Create the passkey</button>
    </div>
    <p class="status" id="methods-passkey-status"></p>
  </div>

  <!-- Combine your accounts (#1098) — the serial step behind the 409 offer.
       Three stages, one visible at a time (home.js drives): prove the OTHER
       account is yours (a fresh email code, or an Apple round trip via the
       merge-apple intent), sort out its saved spaces (unlock with ITS
       passkey and bring them over; or, behind an inline are-you-sure,
       combine without them — destroying its sealed list), then the merge
       call moves every sign-in method and device over. Cancel anywhere
       leaves both accounts untouched — nothing destructive happens before
       the explicit beats. -->
  <div id="methods-combine" class="hidden screen">
    <button id="combine-back" class="icon-back" type="button" aria-label="Back to sign-in options"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title" id="combine-title" tabindex="-1">Combine your accounts</h2>
    <p class="create-sub">Merge your spaces list from two accounts.</p>
    <div id="combine-prove" class="hidden">
      <p class="anchor-note" id="combine-prove-note"></p>
      <div id="combine-code" class="email-mini hidden">
        <form id="combine-code-form">
          <input id="combine-code-input" type="text" required inputmode="numeric" pattern="[0-9]{6}"
                 maxlength="6" autocomplete="one-time-code" placeholder="6-digit code"
                 aria-label="The 6-digit code from your email">
          <button id="combine-code-verify" type="submit">Continue</button>
        </form>
        <button id="combine-resend" class="passkey-link" type="button">Send a new code</button>
      </div>
      <div class="actions">
        <button id="combine-oidc-go" class="hidden" type="button"></button>
        <button id="combine-apple-go" class="apple-btn hidden" type="button"><svg viewBox="0 0 814 1000" width="14" height="17" fill="currentColor" aria-hidden="true"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>Continue with Apple</button>
      </div>
    </div>
    <div id="combine-vault" class="hidden">
      <p class="create-sub" id="combine-vault-note"></p>
      <div class="actions">
        <button id="combine-unlock" class="secondary hidden" type="button">Unlock its spaces with its passkey</button>
        <button id="combine-skip" class="passkey-link hidden" type="button">Combine without its spaces…</button>
      </div>
      <div id="combine-skip-confirm" class="hidden">
        <p class="create-sub stern-copy danger-ink" id="combine-skip-note">Without unlocking them, the
           other account's saved spaces list is <b>deleted forever</b> when the accounts combine —
           the spaces themselves keep running, but that account's saved ways back into them are
           lost. <b>This cannot be undone.</b></p>
        <div class="actions">
          <button id="combine-skip-yes" class="btn-danger" type="button">Delete its spaces list and combine</button>
          <button id="combine-skip-no" class="wide-quiet" type="button">Keep it — go back</button>
        </div>
      </div>
    </div>
    <p class="status" id="combine-status"></p>
  </div>

  <!-- Create a space: a focused screen — one line, one button. On success the
       pitch is replaced by a single-serve confirmation with a Done. -->
  <div id="create" class="hidden screen">
    <button id="create-back" class="icon-back" type="button" aria-label="Back to your spaces"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <div id="create-pitch">
      <h2 class="create-title">Slide to create</h2>
      <p class="create-sub">Your new space will be created immediately.</p>
      <!-- The goes-to-eleven fader (fader.js): slide 1→10, hold the pull for a
           beat and it snaps to eleven — which fires the real create. -->
      <div class="strip">
        <div class="meter" id="fader-meter"></div>
        <div class="fader" id="fader">
          <div class="slot"></div>
          <div class="cap" role="slider" aria-label="Slide to create"
               aria-valuemin="1" aria-valuemax="11" aria-valuenow="1" tabindex="0"><div class="stripe"></div></div>
        </div>
      </div>
      <p class="status" id="new-space-status"></p>
    </div>
    <div id="create-building" class="hidden">
      <div class="build-spin" aria-hidden="true"></div>
      <h3>Hold on…</h3>
      <p>Building your space</p>
    </div>
    <div id="new-space-result" class="hidden">
      <div id="new-space-body"></div>
      <button id="create-done" type="button" class="wide-quiet">Done</button>
    </div>
  </div>

  <!-- Upgrade a space: pick a plan; the payment itself happens on Stripe's
       hosted page, so this screen is just the choice + the handoff. -->
  <div id="upgrade" class="hidden screen">
    <button id="upgrade-back" class="icon-back" type="button" aria-label="Back to your spaces"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title">Upgrade <span id="upgrade-host"></span></h2>
    <p class="create-sub">An upgraded space doesn't count toward your space limit.
       You'll pay on Stripe's secure page — we never see your card, name, or email.</p>
    <!-- The honor-band row (docs/pricing-bands.md): four open prices, any
         selectable, no questions asked. Hidden while the price book has no
         bands; home.js fills it. -->
    <div id="upgrade-bands" class="band-row hidden" role="group" aria-label="Choose your price"></div>
    <p id="upgrade-band-note" class="band-note"></p>
    <div id="upgrade-tiers" role="group" aria-label="Choose a plan"></div>
    <p id="upgrade-fx" class="fx-note hidden"></p>
    <p id="upgrade-cap" class="cap-note"></p>
    <p class="status" id="upgrade-status"></p>
  </div>

  <!-- Keep a demo space: the in-space countdown banner deep-links here as
       #claim=<host>. One confirm, one call — the provisioner does the real
       work (ownership, quota, expiry guard); success folds the space into
       this account's list exactly like a create. -->
  <div id="claim" class="hidden screen">
    <button id="claim-back" class="icon-back" type="button" aria-label="Back to your spaces"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="create-title">Keep <span id="claim-host"></span></h2>
    <p class="create-sub">Claiming stops this demo space's 24-hour countdown —
       it becomes one of your free spaces, saved to your list, and everything
       in it stays.</p>
    <div class="actions">
      <button id="claim-go" type="button">Keep this space</button>
      <a id="claim-open" class="btn-link hidden" href="#">Open your space</a>
    </div>
    <p class="status" id="claim-status"></p>
  </div>

  <!-- The archive: spaces you've set aside, hidden from the main list. Bring one
       back (unarchive), or delete it forever behind a stern typed-confirmation —
       "delete your access" (held while the space reports this is its ONLY admin
       key), and for spaces this account created, the deeper "destroy for
       everyone" (fresh-passkey ceremony). -->
  <div id="archive" class="hidden screen">
    <button id="archive-back" class="icon-back" type="button" aria-label="Back to your spaces"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <div id="archive-main">
      <h2 class="create-title">Archived spaces</h2>
      <p class="create-sub">Hidden from your list. Bring one back anytime, or remove it for good.</p>
      <div id="archive-list"></div>
    </div>
    <!-- Shown while the delete step's checks run (ownership + last-admin), so
         the stern panel appears fully assembled instead of pieces popping in.
         Only appears at all when the answers take more than a beat (home.js). -->
    <div id="archive-checking" class="hidden">
      <div class="build-spin" aria-hidden="true"></div>
      <p class="create-sub">Checking with the space…</p>
    </div>
    <div id="archive-stern" class="hidden">
      <h2 class="create-title danger-ink" id="stern-title">Delete your access?</h2>
      <p class="create-sub stern-copy" id="stern-intro">Deleting <b id="stern-name"></b> removes your only
         saved way back into <b id="stern-host"></b>. If you're not signed in to it on
         another device, you'll lose access <b>forever</b> — there will be no way back
         in. <b>This cannot be undone.</b></p>
      <!-- The last-admin hold: revealed when the space itself reports this is its
           ONLY admin key — deleting the last saved copy would orphan the space. -->
      <p class="create-sub stern-copy danger-ink hidden" id="sole-admin-note"></p>
      <input id="delete-arm" type="text" autocomplete="off" autocapitalize="off"
             spellcheck="false" aria-label="Type the space address to confirm">
      <button id="delete-access" type="button" class="btn-danger" disabled>Delete forever</button>
      <!-- Owner-only, revealed once ownership is confirmed: also destroy the space
           itself, for everyone. Gated by the same typed confirmation + a passkey.
           When the last-admin hold engages too, destroying is the only real action
           left, so home.js promotes this from a footnote link to THE button. -->
      <div id="destroy-zone" class="hidden">
        <p class="create-sub stern-copy" id="destroy-note">You created this space — deleting just
           your access keeps it <b>counting toward your space limit</b>, with nobody able to manage
           it. Destroying it for everyone frees that slot: every message, photo, and member in it.</p>
        <button id="destroy-forever" type="button" class="linkish danger-link" disabled>Destroy the space for everyone…</button>
      </div>
      <button id="archive-cancel" type="button" class="wide-quiet">Cancel</button>
    </div>
    <p class="status" id="archive-status"></p>
  </div>
</main>

<!-- Reassurance lives outside the card, under it; hidden once signed in. -->
<p class="reassure" id="reassure">No signup required, we don't store your email
  or any personal details. We can't spam what we don't have.</p>
<p class="cookie-ask"><button id="cookie-ask" type="button">Where's the cookie banner?</button></p>
<!-- The invite-only pitch: its own quiet card below the main one, shown only
     for a signed-in, truly-empty account (renderSpaces toggles it). -->
<aside id="invite-note" class="invite-card hidden">
  <p>🎉 Need an invite? Ask your socials!</p>
</aside>
<dialog id="cookie-dialog" aria-labelledby="cookie-title">
  <h2 id="cookie-title">There isn't one.</h2>
  <p>There are no cookies. We're not tracking you. We don't want your data.</p>
  <p class="cookie-small">This page keeps your sign-in on your own device — and nothing about you anywhere else.</p>
  <button id="cookie-close" type="button" class="secondary">Nice</button>
</dialog>
<!-- The demo offer (demo.go) lives OUTSIDE the sign-in card — it isn't a
     sign-in. Its own tinted card: below everything on narrow screens, a
     tilted flap peeking out beside the main card on wide ones (see
     .demo-card). Newcomers only — shown when /api/features offers demos AND
     this browser has never signed in (the #1112 last-used marker, home.js),
     and only while the sign-in doors are up (the body:has rule). -->
<aside class="demo-card hidden" id="demo-offer" aria-label="Try a demo space">
  <div class="path-divider">👋 Just looking?</div>
  <button id="try-demo" class="secondary" type="button">Try a demo space</button>
  <p class="demo-hint">No sign-in needed. Demo spaces disappear after 24 hours — claiming one keeps it.</p>
</aside>
<script type="module" src="/static/home.js"></script>
</body>
</html>

```
