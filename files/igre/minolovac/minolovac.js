(function () {
  const root = document.querySelector(".mines");
  const game = root && root.querySelector("[data-game]");
  if (!game) return;

  const $ = (sel) => root.querySelector(sel);
  const board = $("[data-board]");
  const leftEl = $("[data-left]");
  const statusEl = $("[data-status]");
  const timerEl = $("[data-timer]");
  const factEl = $("[data-fact]");
  const fullEl = $("[data-full]");
  const densityEl = $("[data-density]");
  const flagModeBtn = $("[data-flag-mode]");
  const osmLink = $("[data-osm]");

  const TEXT = {
    bs: {
      win: "Bravo! Tabla je očišćena.",
      lose: "Bum! Pokušaj ponovo.",
      density: (name, km2) => `Broj mina na tabli odražava stvarnu statistiku: u snimku podataka predio ${name} ima oko ${km2} km² minski sumnjivih područja u krugu od 30 km.`,
      facts: (d, region) => [
        `Stvarnost: u BiH je i dalje oko ${d.country_km2} km² označeno kao minski sumnjivo područje (BHMAC).`,
        `Stvarnost: predio ${region.name} ima oko ${Math.round(region.km2)} km² minski sumnjivih područja u krugu od 30 km (snimak ${d.snapshotBs}).`,
        `Stvarnost: snimak podataka sadrži ${d.source_count.toLocaleString("bs")} evidentiranih minski sumnjivih zapisa u BiH.`,
        "Za stvarne informacije koristi službenu aplikaciju „BH Mine Suspected Areas“ i BHMAC: bhmac.org, 033 253 800."
      ],
      cell: (r, c, state) => `Red ${r + 1}, kolona ${c + 1}, ${state}`,
      hidden: "neotkrivena", flagged: "zastavica", mine: "mina", empty: "nema evidentiranih područja u blizini",
      near: (n) => `${n} u blizini`
    },
    en: {
      win: "Well done! Board cleared.",
      lose: "Boom! Try again.",
      density: (name, km2) => `The number of mines mirrors real statistics: in the data snapshot, the ${name} region has about ${km2} km² of mine-suspected areas within 30 km.`,
      facts: (d, region) => [
        `Reality: about ${d.country_km2} km² of Bosnia and Herzegovina is still marked as mine-suspected (BHMAC).`,
        `Reality: the ${region.name} region has about ${Math.round(region.km2)} km² of mine-suspected areas within 30 km (snapshot of ${d.snapshotEn}).`,
        `Reality: the data snapshot holds ${d.source_count.toLocaleString("en")} recorded mine-suspected entries in Bosnia and Herzegovina.`,
        "For real information use the official \"BH Mine Suspected Areas\" app and BHMAC: bhmac.org, +387 33 253 800."
      ],
      cell: (r, c, state) => `Row ${r + 1}, column ${c + 1}, ${state}`,
      hidden: "hidden", flagged: "flagged", mine: "mine", empty: "no recorded areas nearby",
      near: (n) => `${n} nearby`
    }
  };

  let data = null;
  let lang = "bs";
  let region = "sarajevo";
  let level = "easy";
  let rows = 0, cols = 0;
  let mines = new Set();
  let cells = [];
  let revealed = 0, flags = 0;
  let over = false, started = false;
  let seconds = 0, timer = null;
  let factIndex = null;
  let focusIndex = 0;

  const t = () => TEXT[lang];

  function setLang(next) {
    lang = next === "en" ? "en" : "bs";
    root.dataset.lang = lang;
    root.lang = lang;
    root.querySelectorAll("[data-set-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
    try { localStorage.setItem("minolovac-lang", lang); } catch (e) {}
    if (data) { renderDensity(); relabelAll(); if (!factEl.hidden) showFact(true); if (over) statusEl.textContent = statusEl.dataset.won === "1" ? t().win : t().lose; }
  }

  function formatDates(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return { bs: `${d}. ${m}. ${y}`, en: `${d} ${months[m - 1]} ${y}` };
  }

  function readHash() {
    const [r, l] = location.hash.replace("#", "").split("/");
    if (data.regions.some((x) => x.slug === r)) region = r;
    if (data.levels[l]) level = l;
  }

  function currentRegion() { return data.regions.find((x) => x.slug === region); }

  function renderRegions() {
    const holder = $("[data-regions]");
    holder.innerHTML = "";
    data.regions.forEach((r) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "mines-pill";
      b.textContent = r.name;
      b.dataset.region = r.slug;
      b.addEventListener("click", () => { region = r.slug; newGame(true); });
      holder.appendChild(b);
    });
  }

  function markSelected() {
    root.querySelectorAll("[data-region]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.region === region)));
    root.querySelectorAll("[data-level]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.level === level)));
  }

  function renderDensity() {
    const r = currentRegion();
    densityEl.textContent = t().density(r.name, Math.round(r.km2));
  }

  function newGame(pushHash) {
    stopTimer();
    const spec = data.levels[level];
    rows = spec.rows; cols = spec.cols;
    mines = new Set(data.boards[`${region}/${level}`]);
    revealed = 0; flags = 0; over = false; started = false; seconds = 0; factIndex = null;
    timerEl.textContent = "0";
    statusEl.textContent = ""; statusEl.dataset.won = "";
    factEl.hidden = true;
    fullEl.hidden = mines.size !== rows * cols;
    if (pushHash) history.replaceState(null, "", `#${region}/${level}`);
    markSelected();
    renderDensity();
    const r = currentRegion();
    osmLink.href = `https://www.openstreetmap.org/?mlat=${r.lat}&mlon=${r.lon}#map=14/${r.lat}/${r.lon}`;

    board.innerHTML = "";
    board.style.setProperty("--cols", cols);
    cells = [];
    for (let i = 0; i < rows * cols; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "mines-cell";
      b.setAttribute("role", "gridcell");
      b.tabIndex = i === 0 ? 0 : -1;
      b.dataset.i = i;
      board.appendChild(b);
      cells.push({ el: b, revealed: false, flagged: false });
    }
    focusIndex = 0;
    relabelAll();
    updateLeft();
  }

  function neighbours(i) {
    const r = Math.floor(i / cols), c = i % cols, out = [];
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue;
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) out.push(nr * cols + nc);
    }
    return out;
  }

  const near = (i) => neighbours(i).filter((n) => mines.has(n)).length;

  function label(i) {
    const cell = cells[i], r = Math.floor(i / cols), c = i % cols;
    let state = t().hidden;
    if (cell.flagged) state = t().flagged;
    else if (cell.el.classList.contains("is-mine")) state = t().mine;
    else if (cell.revealed) { const n = near(i); state = n ? t().near(n) : t().empty; }
    cell.el.setAttribute("aria-label", t().cell(r, c, state));
  }

  function relabelAll() { for (let i = 0; i < cells.length; i++) label(i); }

  function reveal(i) {
    if (over) return;
    const cell = cells[i];
    if (cell.revealed || cell.flagged) return;
    if (!started) { started = true; startTimer(); }
    if (mines.has(i)) { lose(i); return; }
    const stack = [i];
    while (stack.length) {
      const j = stack.pop(), cur = cells[j];
      if (cur.revealed || cur.flagged) continue;
      cur.revealed = true; revealed++;
      cur.el.classList.add("is-open");
      const n = near(j);
      if (n) { cur.el.textContent = n; cur.el.dataset.n = n; }
      else neighbours(j).forEach((k) => { if (!cells[k].revealed) stack.push(k); });
      label(j);
    }
    if (revealed === rows * cols - mines.size) win();
  }

  function toggleFlag(i) {
    if (over) return;
    const cell = cells[i];
    if (cell.revealed) return;
    cell.flagged = !cell.flagged;
    flags += cell.flagged ? 1 : -1;
    cell.el.classList.toggle("is-flag", cell.flagged);
    label(i);
    updateLeft();
  }

  function showMines(hit) {
    mines.forEach((i) => {
      const el = cells[i].el;
      el.classList.remove("is-flag");
      el.classList.add("is-mine");
      if (i === hit) el.classList.add("is-hit");
      label(i);
    });
  }

  function lose(i) {
    over = true; stopTimer(); showMines(i);
    statusEl.textContent = t().lose; statusEl.dataset.won = "";
    showFact(false);
  }

  function win() {
    over = true; stopTimer(); showMines(null);
    flags = mines.size; updateLeft();
    statusEl.textContent = t().win; statusEl.dataset.won = "1";
    showFact(false);
  }

  function showFact(keep) {
    const facts = t().facts(data, currentRegion());
    if (!keep) factIndex = ((factIndex ?? Math.floor(Math.random() * facts.length)) + 1) % facts.length;
    factEl.textContent = facts[factIndex ?? 0];
    factEl.hidden = false;
  }

  function startTimer() { timer = setInterval(() => { seconds++; timerEl.textContent = seconds; }, 1000); }
  function stopTimer() { if (timer) clearInterval(timer); timer = null; }
  function updateLeft() { leftEl.textContent = Math.max(0, mines.size - flags); }

  function focusCell(i) {
    cells[focusIndex].el.tabIndex = -1;
    focusIndex = i;
    cells[i].el.tabIndex = 0;
    cells[i].el.focus();
  }

  const indexOf = (target) => { const el = target.closest(".mines-cell"); return el ? Number(el.dataset.i) : null; };

  let press = null, pressed = false;
  board.addEventListener("click", (e) => {
    const i = indexOf(e.target);
    if (i === null) return;
    if (pressed) { pressed = false; return; }
    if (flagModeBtn.getAttribute("aria-pressed") === "true") toggleFlag(i); else reveal(i);
  });
  board.addEventListener("contextmenu", (e) => {
    const i = indexOf(e.target);
    if (i === null) return;
    e.preventDefault();
    toggleFlag(i);
  });
  board.addEventListener("touchstart", (e) => {
    const i = indexOf(e.target);
    if (i === null) return;
    press = setTimeout(() => { pressed = true; toggleFlag(i); }, 450);
  }, { passive: true });
  ["touchend", "touchmove", "touchcancel"].forEach((ev) => board.addEventListener(ev, () => clearTimeout(press), { passive: true }));
  board.addEventListener("keydown", (e) => {
    const i = indexOf(e.target);
    if (i === null) return;
    const r = Math.floor(i / cols), c = i % cols;
    const moves = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };
    if (moves[e.key]) {
      e.preventDefault();
      const nr = Math.min(rows - 1, Math.max(0, r + moves[e.key][0]));
      const nc = Math.min(cols - 1, Math.max(0, c + moves[e.key][1]));
      focusCell(nr * cols + nc);
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault(); toggleFlag(i);
    }
  });
  board.addEventListener("focusin", (e) => { const i = indexOf(e.target); if (i !== null && i !== focusIndex) { cells[focusIndex].el.tabIndex = -1; focusIndex = i; cells[i].el.tabIndex = 0; } });

  flagModeBtn.addEventListener("click", () => flagModeBtn.setAttribute("aria-pressed", String(flagModeBtn.getAttribute("aria-pressed") !== "true")));
  $("[data-restart]").addEventListener("click", () => newGame(false));
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => { level = b.dataset.level; newGame(true); }));
  root.querySelectorAll("[data-set-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.setLang)));

  let saved = null;
  try { saved = localStorage.getItem("minolovac-lang"); } catch (e) {}
  setLang(saved || "bs");

  fetch("boards.json")
    .then((res) => res.json())
    .then((json) => {
      data = json;
      const dates = formatDates(data.data_as_of);
      data.snapshotBs = dates.bs;
      data.snapshotEn = dates.en;
      root.querySelectorAll("[data-snapshot-bs]").forEach((el) => { el.textContent = dates.bs; });
      root.querySelectorAll("[data-snapshot-en]").forEach((el) => { el.textContent = dates.en; });
      const age = (Date.now() - new Date(data.data_as_of).getTime()) / 86400000;
      $("[data-stale]").hidden = age <= 365;
      renderRegions();
      readHash();
      newGame(false);
    });
})();
