const D = DATA, L = D.links, $ = s => document.querySelector(s);
const A = (u, t) => u ? `<a href="${u}" target="_blank" rel="noopener">${t}</a>` : "";
const G = (a, cls = "grid") => `<div class="${cls}">${a.join("")}</div>`;
const S = (id, t, b) => { const e = $("#" + id); b ? e.innerHTML = `<h2>${t}</h2>${b}` : e.remove(); };

/* ── Buttons ── */
const B = [
  A(L.github,   "GitHub"),
  A(L.linkedin, "LinkedIn"),
  A(L.cv,       "Download CV"),
  A(L.email && "mailto:" + L.email, "Email"),
  `<a href="#work">View Projects</a>`
].filter(Boolean).join("");
const Btns = `<div class="btns">${B}</div>`;

/* ── Row card ── */
const C = ([t, k, x, u], cls = "") =>
  `<div class="row fade-in ${cls}"><h3>${t}</h3><span class="k">${k || ""}</span><p>${x || ""}</p>${u ? `<p>${A(u, "↗ Details")}</p>` : ""}</div>`;

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
const certPills = D.certpills.map(c => `<span class="cert-pill">${c}</span>`).join("");
const promptFull = `${D.handle.toLowerCase()}@sec:~$ whoami`;
let typed = 0;
document.getElementById("hero").innerHTML =
  `<p id="prompt"><span id="cursor-text"></span><span class="cursor-blink">▋</span></p>` +
  `<h1>${D.name}</h1>` +
  `<p class="acc">${D.headline}</p>` +
  `<p class="cert-pills">${certPills}</p>` +
  `<p class="lead">${D.summary}</p>${Btns}`;
const promptEl = document.getElementById("cursor-text");
const typeInterval = setInterval(() => {
  promptEl.textContent = promptFull.slice(0, ++typed);
  if (typed >= promptFull.length) clearInterval(typeInterval);
}, 50);

/* ══════════════════════════════════════
   FEATURED PROJECTS
   — top summary always visible, full detail in accordion
══════════════════════════════════════ */
const featuredCard = c =>
  `<div class="feat-card fade-in">` +
  `<div class="feat-header">` +
  `<div><h3>${c.title}</h3><span class="k">${c.kind}</span></div>` +
  `${c.repo ? `<div>${A(c.repo, "↗ Repo")}</div>` : ""}` +
  `</div>` +
  `<p class="feat-summary">${c.summary}</p>` +
  `<p class="tags">${c.tags.map(t => `<span>${t}</span>`).join("")}</p>` +
  `<details>` +
  `<summary><b>More detail</b></summary>` +
  `<p>${c.text}</p>` +
  `</details>` +
  `</div>`;

S("work", "Featured Projects",
  `<div class="feat-list">${D.featured.map(featuredCard).join("")}</div>` +
  `<p class="sub">Other projects</p>` +
  G(D.other.map(c =>
    `<div class="row fade-in">` +
    `<h3>${c.repo ? A(c.repo, c.title) : c.title}</h3>` +
    `<span class="k">${c.kind}</span>` +
    `<p>${c.text}</p>` +
    `<p class="tags">${c.tags.map(t => `<span>${t}</span>`).join("")}</p>` +
    `</div>`
  ))
);

/* ══════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════ */
S("exp", "Experience", G(D.exp.map(e => C(e))));

/* ══════════════════════════════════════
   EDUCATION (separate)
══════════════════════════════════════ */
S("edu", "Education", G(D.edu.map(e => C(e))));

/* ══════════════════════════════════════
   CERTIFICATIONS
══════════════════════════════════════ */
S("certs", "Certifications",
  `<div class="cert-grid">` +
  D.certs.map(([abbr, full, meta, url]) =>
    `<div class="cert-card fade-in">` +
    `<div class="cert-badge">${abbr}</div>` +
    `<div class="cert-body">` +
    `<p class="cert-full">${full}</p>` +
    `<p class="cert-meta">${meta}</p>` +
    (url ? `<p>${A(url, "↗ Verify credential")}</p>` : "") +
    `</div></div>`
  ).join("") +
  `</div>`
);

/* ══════════════════════════════════════
   CTF — competitions + no challenge accordions (challenges are in Projects)
══════════════════════════════════════ */
const ctf = D.ctf;
S("ctf", "CTF & Challenge Development",
  G(ctf.competitions.map((comp, i) => C(comp, i === 0 ? "vault-card" : "")))
);

/* ══════════════════════════════════════
   TECHNICAL FOCUS
   — 2 primary cards + keyword cloud + 2 secondary cards
══════════════════════════════════════ */
const keywordCloud = `<div class="keyword-cloud">${D.keywords.map(k => `<span>${k}</span>`).join("")}</div>`;
S("focus", "Technical Focus",
  G(D.primary.map((f, i) => C(f, i === 0 ? "focus-primary" : "focus-primary focus-sec"))) +
  keywordCloud +
  `<p class="sub">Also practiced</p>` +
  G(D.secondary.map(f => C(f)))
);

/* ══════════════════════════════════════
   LABS
══════════════════════════════════════ */
const th = D.labs.thm, ps = D.labs.ps, tot = ps.reduce((s, x) => s + x[1], 0);
S("labs", `Labs & Practice<small>snapshot · ${D.snapshot}</small>`, G([
  `<div class="row fade-in">
    <h3>TryHackMe</h3>
    <p class="stat">${th.rooms}</p><p class="k">rooms completed</p>
    <p>${th.streak}-day streak — my longest streak &middot; top ${th.top} globally</p>
    <p>${A(L.tryhackme, "↗ View profile")}</p>
  </div>`,
  `<div class="row fade-in">
    <h3>PortSwigger Web Security Academy</h3>
    <p class="stat">${tot}</p><p class="k">labs completed</p>
    <p>${ps.map(x => `${x[0]}: <strong>${x[1]}</strong>/${x[2]}`).join(" &middot; ")}</p>
    <p>${A(L.portswigger, "↗ View profile")}</p>
  </div>`
]));

/* ══════════════════════════════════════
   WRITEUPS / CONTACT
══════════════════════════════════════ */
S("writeups", "Writeups", D.writeups.length ? G(D.writeups.map(w => C(w))) : "");
S("contact", "Contact",
  `<p class="lead" style="margin-top:0">Find me on LinkedIn or browse the code on GitHub.</p>${Btns}`
);

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
const N = {
  work: "Projects", exp: "Experience", edu: "Education",
  certs: "Certs", ctf: "CTF", focus: "Skills", labs: "Labs",
  writeups: "Writeups", contact: "Contact"
};
$("#nav").innerHTML = Object.keys(N).filter(k => $("#" + k)).map(k => `<a href="#${k}">${N[k]}</a>`).join("");

/* ── Footer ── */
$("#foot").innerHTML =
  `<span>&copy; ${new Date().getFullYear()} ${D.name}</span>` +
  `<span class="mono" style="color:var(--ac);letter-spacing:1px">${D.handle}</span>`;

/* ── Scroll fade-in ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
}, { threshold: 0.04, rootMargin: "0px 0px -20px 0px" });
document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
