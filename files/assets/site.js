// The header: a Menu toggle on narrow screens, and on every width the header
// slides away while reading down and comes back on the first scroll up.
// Without this script the links stay visible and the header scrolls away.
(() => {
  const top = document.querySelector(".top");
  const toggle = top && top.querySelector(".menu-toggle");

  // Copy buttons: shown only with this script. Beside an email address, for
  // visitors whose device has no mail app to open a mailto link; on the brand
  // kit, for its bios and colours. data-copy-name names long text for screen
  // readers, which would otherwise hear it all read back.
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const label = button.querySelector("[data-copy-label]");
    const idle = label.textContent;
    const status = document.createElement("span");
    status.className = "visually-hidden";
    status.setAttribute("aria-live", "polite");
    button.after(status);
    button.hidden = false;
    button.addEventListener("click", async () => {
      const text = button.dataset.copy;
      const name = button.dataset.copyName || text;
      let done = false;
      try { await navigator.clipboard.writeText(text); done = true; } catch (e) {
        const area = Object.assign(document.createElement("textarea"), { value: text });
        area.setAttribute("readonly", "");
        area.style.cssText = "position:fixed;opacity:0";
        document.body.append(area);
        area.select();
        try { done = document.execCommand("copy"); } catch (e2) {}
        area.remove();
      }
      label.textContent = done ? "Copied" : (button.dataset.copyName ? "Copy failed" : text);
      status.textContent = done ? `Copied ${name}` : `Select and copy ${name}`;
      button.classList.toggle("is-copied", done);
      clearTimeout(button.copyTimer);
      button.copyTimer = setTimeout(() => { label.textContent = idle; button.classList.remove("is-copied"); status.textContent = ""; }, 2500);
    });
  });
  // Colour theme: System follows the device; Light and Dark are remembered on
  // this device. The head's inline script has already set the scheme for
  // this page view; this wires the control and keeps the scheme current.
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const stored = () => { try { return localStorage.getItem("theme"); } catch (e) { return null; } };
  const applyTheme = (choice) => {
    const forced = choice === "light" || choice === "dark";
    if (forced) root.dataset.theme = choice; else delete root.dataset.theme;
    const dark = forced ? choice === "dark" : systemDark.matches;
    root.dataset.scheme = dark ? "dark" : "light";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#141414" : "#ffffff";
    document.querySelectorAll("[data-theme-set]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.themeSet === (forced ? choice : "system"))));
  };
  document.querySelectorAll("[data-theme-set]").forEach((b) => b.addEventListener("click", () => {
    const choice = b.dataset.themeSet;
    try { if (choice === "system") localStorage.removeItem("theme"); else localStorage.setItem("theme", choice); } catch (e) {}
    applyTheme(choice);
  }));
  systemDark.addEventListener("change", () => applyTheme(stored()));
  window.addEventListener("storage", (e) => { if (e.key === "theme") applyTheme(e.newValue); });
  applyTheme(stored());

  // In the header the theme control is one button that opens the three
  // choices; a choice, Escape, a click elsewhere or a scroll closes it. In
  // the phone menu the three are a row and the button is hidden.
  const theme = document.querySelector(".theme");
  const themeToggle = theme && theme.querySelector(".theme-toggle");
  if (themeToggle) {
    const themeOpen = () => theme.classList.contains("is-open");
    const setThemeOpen = (open, returnFocus) => {
      theme.classList.toggle("is-open", open);
      themeToggle.setAttribute("aria-expanded", String(open));
      if (open) theme.querySelector('[data-theme-set][aria-pressed="true"]').focus();
      else if (returnFocus) themeToggle.focus();
    };
    themeToggle.addEventListener("click", () => setThemeOpen(!themeOpen(), false));
    theme.querySelectorAll("[data-theme-set]").forEach((b) => b.addEventListener("click", () => { if (themeOpen()) setThemeOpen(false, true); }));
    document.addEventListener("click", (e) => { if (themeOpen() && !theme.contains(e.target)) setThemeOpen(false, false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && themeOpen()) setThemeOpen(false, true); });
    theme.addEventListener("focusout", (e) => { if (themeOpen() && e.relatedTarget && !theme.contains(e.relatedTarget)) setThemeOpen(false, false); });
    window.addEventListener("scroll", () => { if (themeOpen()) setThemeOpen(false, false); }, { passive: true });
  }

  // The stroke under a word further down the page draws itself when the word
  // is reached. Only words that start below the window are held back, so
  // nothing that is already on screen changes; with less motion asked for,
  // or without this script, every stroke is simply there.
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const seen = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-drawn");
      seen.unobserve(entry.target);
    }), { threshold: 1 });
    document.querySelectorAll(".section-title mark, .community-title mark, .foot-sign mark").forEach((mark) => {
      if (mark.getBoundingClientRect().top < window.innerHeight) return;
      mark.classList.add("to-draw");
      seen.observe(mark);
    });
  }

  // Services: a link to #name opens that offer's row, and every row is open
  // on paper.
  const offers = document.querySelectorAll("details.offer");
  if (offers.length) {
    const openTarget = () => {
      let el = null;
      try { el = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (e) {}
      if (el && el.matches("details.offer")) el.open = true;
    };
    window.addEventListener("hashchange", openTarget);
    window.addEventListener("beforeprint", () => offers.forEach((o) => { o.open = true; }));
    openTarget();
  }

  // Posts and notes: a line across the top of the window that grows as the
  // text is read. Only where the text is longer than a screen and a half.
  const prose = document.querySelector(".post .prose");
  if (prose && prose.offsetHeight > window.innerHeight * 1.5) {
    const bar = document.createElement("div");
    bar.className = "read-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.append(bar);
    let waiting = false;
    const draw = () => {
      waiting = false;
      const box = prose.getBoundingClientRect();
      const start = Math.max(0, box.top + window.scrollY - (top ? top.offsetHeight : 0));
      const end = box.bottom + window.scrollY - window.innerHeight;
      const done = end > start ? (window.scrollY - start) / (end - start) : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, done))})`;
    };
    const ask = () => { if (!waiting) { waiting = true; requestAnimationFrame(draw); } };
    window.addEventListener("scroll", ask, { passive: true });
    window.addEventListener("resize", ask);
    draw();
  }

  const panel = document.getElementById("site-menu");
  if (!top || !toggle || !panel) return;

  document.documentElement.classList.add("js");
  toggle.hidden = false;
  const label = toggle.querySelector(".menu-toggle-label");
  const isOpen = () => top.classList.contains("is-open");

  const setOpen = (open, returnFocus) => {
    top.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Close" : "Menu";
    document.documentElement.classList.toggle("menu-open", open);
    if (open) panel.querySelector("a").focus({ preventScroll: true });
    else if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => setOpen(!isOpen(), false));
  panel.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false, false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen()) setOpen(false, true); });
  document.addEventListener("click", (e) => { if (isOpen() && !top.contains(e.target)) setOpen(false, false); });
  window.matchMedia("(max-width: 960px)").addEventListener("change", () => { if (isOpen()) setOpen(false, false); });
  // Tabbing out of the open menu closes it, so focus is never on the page hidden behind it.
  top.addEventListener("focusout", (e) => { if (isOpen() && e.relatedTarget && !top.contains(e.relatedTarget)) setOpen(false, false); });

  let last = window.scrollY;
  let queued = false;
  const update = () => {
    queued = false;
    const y = window.scrollY;
    if (!isOpen()) {
      if (y <= top.offsetHeight || y < last) top.classList.remove("is-hidden");
      else if (y > last) top.classList.add("is-hidden");
    }
    last = y;
  };
  window.addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
  top.addEventListener("focusin", () => top.classList.remove("is-hidden"));
})();
