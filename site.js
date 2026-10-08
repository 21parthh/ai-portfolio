// ---- edit me -------------------------------------------------------------
const EMAIL = "parth.deore@icloud.com";
const TZ = "Asia/Kolkata";
const LINKS = [
  { label: "GitHub", url: "https://github.com/21parthh" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/parth-deore/" },
  { label: "Medium", url: "https://medium.com/@parth.deore" },
];
// --------------------------------------------------------------------------

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>';


if ($("#mailText")) $("#mailText").textContent = EMAIL;
const BRAND = {
  GitHub: '<path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>',
  LinkedIn: '<path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>',
  Medium: '<path fill="currentColor" d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.52-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"/>',
};
if ($("#heroIcons")) $("#heroIcons").innerHTML = LINKS.map(l => `<a href="${l.url}" target="_blank" rel="noopener" aria-label="${l.label}" title="${l.label}"><svg viewBox="0 0 24 24">${BRAND[l.label] || ""}</svg></a>`).join("");
if ($("#socials")) $("#socials").innerHTML = LINKS.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ${arrow}</a>`).join("");
$("#yr").textContent = new Date().getFullYear();

// toast
let toastT;
function toast(msg) {
  const t = $("#toast");
  $("span", t).textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 1800);
}

// copy email
async function copyEmail() {
  try { await navigator.clipboard.writeText(EMAIL); toast("email copied"); return true; }
  catch { location.href = "mailto:" + EMAIL; return false; }
}
const mail = $("#mail");
if (mail) mail.addEventListener("click", async () => {
  if (!(await copyEmail())) return;
  window.burst?.(mail);
  mail.classList.add("copied"); $(".hint span", mail).textContent = "copied";
  setTimeout(() => { mail.classList.remove("copied"); $(".hint span", mail).textContent = "copy"; }, 1800);
});

// local time
const clock = $("#clock");
const tick = () => {
  const t = new Date().toLocaleTimeString("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit" });
  if (clock) clock.textContent = t + " my time";
  if ($("#heroClock")) $("#heroClock").textContent = t + " IST";
};
tick(); setInterval(tick, 30000);

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.1 });
$$(".reveal").forEach(el => io.observe(el));

// deep link to a project card (projects.html#p1)
const workList = $("#workList");
if (workList && /^#p\d+$/.test(location.hash)) setTimeout(() => {
  const el = workList.children[+location.hash.slice(2) - 1]; if (!el) return;
  window.smoothTo ? smoothTo(el, { offset: -(innerHeight - el.offsetHeight) / 2 }) : el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  el.classList.add("flash");
}, 300);

// github contribution graph (live, public data)
(async () => {
  const box = $("#gh"); if (!box) return;
  try {
    const r = await fetch("https://github-contributions-api.jogruber.de/v4/21parthh?y=last");
    if (!r.ok) throw 0;
    const { total, contributions } = await r.json();
    const weeks = innerWidth < 560 ? 26 : 53;
    let days = contributions.slice(-weeks * 7);
    const pad = new Date(days[0].date + "T00:00").getDay();
    days = Array(pad).fill(null).concat(days);
    box.innerHTML = days.map((d, i) => d
      ? `<i class="l${d.level}" style="--c:${Math.floor(i / 7) + (i % 7)}" data-d="${d.date}" data-n="${d.count}"></i>`
      : `<i style="visibility:hidden"></i>`).join("");
    const cols = Math.ceil(days.length / 7);
    const fmt = (d, o) => new Date(d + "T00:00").toLocaleDateString("en-GB", o);
    // label a column when a new month starts in it; skip labels too close together
    let lastShown = -9, prevM = "";
    $("#ghMonths").innerHTML = Array.from({ length: cols }, (_, c) => {
      const d = days.slice(c * 7, c * 7 + 7).find(Boolean); if (!d) return "<span></span>";
      const m = new Date(d.date + "T00:00").toLocaleDateString("en-US", { month: "short" }).toLowerCase();
      const isNew = m !== prevM; prevM = m;
      const show = isNew && c - lastShown >= 4 && c < cols - 2 && (c > 0 || +d.date.slice(8) <= 7);
      if (show) lastShown = c;
      return `<span>${show ? m : ""}</span>`;
    }).join("");
    const n = innerWidth < 560 ? days.reduce((s, d) => s + (d ? d.count : 0), 0) : total.lastYear;
    $("#ghTotal").dataset.total = n;
    $("#ghTotal").textContent = (document.documentElement.classList.contains("motion") ? 0 : n).toLocaleString();
    if (innerWidth < 560) $(".gh-total").lastChild.textContent = " contributions in the last 6 months";
    const out = $("#ghHover");
    box.addEventListener("pointerover", e => {
      const d = e.target.dataset; if (!d.d) return;
      out.textContent = `${d.n == 0 ? "no" : d.n} contribution${d.n == 1 ? "" : "s"} · ${fmt(d.d, { day: "numeric", month: "short", year: "numeric" }).toLowerCase()}`;
    });
    box.closest("section").hidden = false;
  } catch {}
})();
