// Motion layer: smooth scroll, text reveals, magnetic + tilt hovers, scroll-linked bits.
// Everything here is decoration — the page works without it, and it all switches off
// for prefers-reduced-motion.

(() => {
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const springy = "cubic-bezier(.34,1.56,.64,1)";

  // ---- smooth scroll (Lenis) -----------------------------------------------
  let lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: t => 1 - Math.pow(1 - t, 4), smoothWheel: true });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  window.smoothTo = (target, opts = {}) => {
    if (lenis) lenis.scrollTo(target, { offset: -72, ...opts });
    else (typeof target === "number" ? scrollTo({ top: target, behavior: reduced ? "auto" : "smooth" })
      : target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: opts.center ? "center" : "start" }));
  };
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute("href");
    const el = id === "#top" ? 0 : document.querySelector(id);
    if (el === null) return;
    e.preventDefault();
    smoothTo(el);
    history.replaceState(null, "", id === "#top" ? location.pathname : id);
  });
  if (location.hash && document.querySelector(location.hash)) {
    addEventListener("load", () => setTimeout(() => smoothTo(document.querySelector(location.hash), { immediate: true }), 50));
  }

  if (reduced) { document.documentElement.classList.add("no-motion"); return; }
  document.documentElement.classList.add("motion");

  // ---- split helpers ---------------------------------------------------------
  // headline: each letter rises out of its line
  let d = 0;
  $$("h1 .w").forEach(w => {
    w.innerHTML = [...w.textContent].map(ch => `<span class="ch" style="--d:${d++}">${ch}</span>`).join("");
  });
  $$("h1").forEach(h => h.classList.add("split"));

  // contact heading: each word rises out of a mask
  const maskWords = el => {
    let k = 0;
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.append(part);
          const o = document.createElement("span"); o.className = "mw";
          const i = document.createElement("span"); i.className = "mi"; i.style.setProperty("--k", k++); i.textContent = part;
          o.append(i); frag.append(o);
        });
        n.replaceWith(frag);
      } else walk(n);
    });
    walk(el);
  };
  $$(".contact h2").forEach(maskWords);

  // stagger indexes
  $$(".bento .shot, .now .card, .work .item, .rows .row").forEach(el => {
    el.style.setProperty("--k", [...el.parentNode.children].indexOf(el));
  });

  // ---- scramble labels as their section enters ------------------------------
  const glyphs = "abcdefghijklmnopqrstuvwxyz0123456789/_-·";
  const scramble = el => {
    const final = el.textContent, total = 18; let f = 0;
    const id = setInterval(() => {
      if (++f >= total) { clearInterval(id); el.textContent = final; return; }
      el.textContent = [...final].map((c, i) =>
        c === " " ? " " : i < (f / total) * final.length ? c : glyphs[Math.random() * glyphs.length | 0]).join("");
    }, 32);
  };
  const labelText = lab => [...lab.firstElementChild.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
  $$(".label").forEach(lab => {
    const t = labelText(lab); if (!t) return;
    const s = document.createElement("span"); s.className = "scr"; s.textContent = t.textContent; t.replaceWith(s);
  });

  // ---- count-up ---------------------------------------------------------------
  const countUp = el => {
    const to = +el.dataset.total || 0, t0 = performance.now(), dur = 1600;
    const f = () => {
      const p = Math.min(1, Math.max(0, (performance.now() - t0) / dur)), e = 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(to * (p === 1 ? 1 : e)).toLocaleString();
      if (p < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
    setTimeout(() => el.textContent = to.toLocaleString(), dur + 200);
  };

  // ---- section enter hooks ----------------------------------------------------
  const seen = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    seen.unobserve(e.target);
    $$(".scr", e.target).forEach(scramble);
    const gh = $("#ghTotal", e.target); if (gh && gh.dataset.total) countUp(gh);
  }), { threshold: 0.15 });
  $$("section").forEach(s => seen.observe(s));

  if (!fine) return;  // the rest is pointer-only

  // ---- magnetic buttons -----------------------------------------------------------
  $$(".btn, .icons a, .mail").forEach(el => {
    const pull = el.classList.contains("mail") ? .12 : .3;
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * pull, y = (e.clientY - r.top - r.height / 2) * pull;
      el.style.transition = "translate .15s ease-out, background .2s, border-color .2s, color .2s";
      el.style.translate = `${x}px ${y}px`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transition = `translate .7s ${springy}, background .2s, border-color .2s, color .2s`;
      el.style.translate = "0 0";
    });
  });

  // ---- soft 3D tilt on cards ---------------------------------------------------------
  $$(".now .card, .work .item").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      el.style.transition = "transform .2s ease-out, border-color .25s, box-shadow .4s";
      el.style.transform = `perspective(700px) rotateX(${-py * 5}deg) rotateY(${px * 6}deg) translateY(-4px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transition = `transform .8s ${springy}, border-color .25s, box-shadow .4s`;
      el.style.transform = "";
    });
  });

  // ---- photo parallax ------------------------------------------------------------------
  const shots = $$(".shot img");
  if (shots.length) {
    const upd = () => {
      const vh = innerHeight;
      shots.forEach(img => {
        const r = img.parentNode.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh;  // -0.5..0.5 around center
        img.style.setProperty("--py", `${(-p * 28).toFixed(1)}px`);
      });
    };
    lenis ? lenis.on("scroll", upd) : addEventListener("scroll", upd, { passive: true });
    upd();
  }
})();

// ---- copy burst (called from site.js) --------------------------------------------------
window.burst = el => {
  if (reduced) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("i"); p.className = "spark";
    p.style.left = cx + "px"; p.style.top = cy + "px";
    if (i % 3 === 0) p.style.borderRadius = "50%";
    document.body.append(p);
    const a = (i / 16) * Math.PI * 2 + Math.random() * .4, dist = 50 + Math.random() * 60;
    p.animate([
      { transform: "translate(-50%,-50%) scale(1) rotate(0deg)", opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(a) * dist}px), calc(-50% + ${Math.sin(a) * dist}px)) scale(.2) rotate(${Math.random() * 360}deg)`, opacity: 0 },
    ], { duration: 700 + Math.random() * 300, easing: "cubic-bezier(.2,.7,.2,1)" }).onfinish = () => p.remove();
  }
};
