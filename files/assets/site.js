// The header: a Menu toggle on narrow screens, and on every width the header
// slides away while reading down and comes back on the first scroll up.
// Without this script the links stay visible and the header scrolls away.
(() => {
  const top = document.querySelector(".top");
  const toggle = top && top.querySelector(".menu-toggle");
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
    if (open) panel.querySelector("a").focus();
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
