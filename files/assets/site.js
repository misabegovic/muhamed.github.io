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
  window.matchMedia("(max-width: 860px)").addEventListener("change", () => { if (isOpen()) setOpen(false, false); });

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
