const D = DATA, L = D.links, $ = s => document.querySelector(s);
const A = (u, t) => u ? `<a href="${u}" target="_blank" rel="noopener">${t}</a>` : "";
const G = a => `<div class="grid">${a.join("")}</div>`;
const S = (id, t, b) => { const e = $("#" + id); b ? e.innerHTML = `<h2>${t}</h2>${b}` : e.remove(); };
const B = `<div class="btns">${A(L.github, "GitHub")}${A(L.linkedin, "LinkedIn")}${A(L.cv, "Download CV")}${A(L.email && "mailto:" + L.email, "Email")}</div>`;

/* ── Row card helper ── */
const C = ([t, k, x, u], extraClass = "") =>
  `<div class="row fade-in ${extraClass}"><h3>${t}</h3><span class="k">${k || ""}</span><p>${x || ""}</p><p>${A(u, "↗ Details")}</p></div>`;

/* ── Hero: animated terminal prompt ── */
const promptFull = `${D.handle.toLowerCase()}@sec:~$ whoami`;
let typed = 0;
document.getElementById("hero").innerHTML =
  `<p id="prompt"><span id="cursor-text"></span><span class="cursor-blink">▋</span></p>` +
  `<h1>${D.name}</h1>` +
  `<p class="acc">${D.headline}</p>` +
  `<p class="lead">${D.summary}</p>${B}`;
const promptEl = document.getElementById("cursor-text");
const typeInterval = setInterval(() => {
  promptEl.textContent = promptFull.slice(0, ++typed);
  if (typed >= promptFull.length) clearInterval(typeInterval);
}, 50);

/* ── Expertise ── */
S("focus", "Expertise", G(D.focus.map(f => C(f))));

/* ── Projects ── */
const accordion = (c, extraClass = "") =>
  `<details class="fade-in ${extraClass}">` +
  `<summary><b>${c.title}</b><span class="k">${c.kind}</span></summary>` +
  `<p>${c.text}</p>` +
  `<p class="tags">${c.tags.map(t => `<span>${t}</span>`).join("")}</p>` +
  `<p>${c.repo ? A(c.repo, "↗ View repository") : ""}</p>` +
  `</details>`;

S("work", "Projects and case studies",
  `<div class="cases-list">` +
  D.cases.map(c => accordion(c)).join("") +
  `</div>` +
  `<p class="sub">Tools I built</p>` +
  G(D.tools.map(([n, x, u]) => `<div class="row fade-in"><h3>${A(u, n)}</h3><p>${x}</p></div>`))
);

/* ── CTF and challenge development ── */
const ctf = D.ctf;

// Competition cards — Vault Protocol gets special amber card
const compCards = ctf.competitions.map((comp, i) => {
  const isVault = i === 0; // first entry is always The Vault Protocol
  return C(comp, isVault ? "vault-card" : "");
});

// Challenge accordions — pwn get red, web get purple
const challengeAccordions = ctf.challenges.map(c => {
  const isPwn = c.kind.toLowerCase().includes("pwn");
  return accordion(c, `ctf-challenge${isPwn ? " ctf-pwn" : ""}`);
});

S("ctf", "CTF and challenge development",
  G(compCards) +
  `<p class="sub">Challenges I authored &mdash; JCC Catch The Hilal</p>` +
  `<div class="cases-list">` + challengeAccordions.join("") + `</div>`
);

/* ── Experience ── */
S("exp", "Experience and education", G(D.exp.map(e => C(e))));

/* ── Certifications ── */
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

/* ── Labs ── */
const th = D.labs.thm, ps = D.labs.ps, tot = ps.reduce((s, x) => s + x[1], 0);
S("labs", `Labs and practice<small>snapshot, ${D.snapshot}</small>`, G([
  `<div class="row fade-in">
    <h3>TryHackMe</h3>
    <p class="stat">${th.rooms}</p>
    <p class="k">rooms completed</p>
    <p>${th.streak}-day streak &mdash; my personal longest streak &middot; top ${th.top} globally</p>
    <p>${A(L.tryhackme, "↗ View profile")}</p>
  </div>`,
  `<div class="row fade-in">
    <h3>PortSwigger Web Security Academy</h3>
    <p class="stat">${tot}</p>
    <p class="k">labs completed</p>
    <p>${ps.map(x => `${x[0]}: <strong>${x[1]}</strong>/${x[2]}`).join(" &middot; ")}</p>
    <p>${A(L.portswigger, "↗ View profile")}</p>
  </div>`
]));

/* ── Writeups ── */
S("writeups", "Writeups", D.writeups.length ? G(D.writeups.map(w => C(w))) : "");

/* ── Contact ── */
S("contact", "Contact",
  `<p class="lead" style="margin-top:0">Find me on LinkedIn, or browse the code on GitHub.</p>${B}`
);

/* ── Navbar ── */
const N = { focus: "Expertise", work: "Projects", ctf: "CTF", exp: "Experience", certs: "Certs", labs: "Labs", writeups: "Writeups", contact: "Contact" };
$("#nav").innerHTML = Object.keys(N).filter(k => $("#" + k)).map(k => `<a href="#${k}">${N[k]}</a>`).join("");

/* ── Footer ── */
$("#foot").innerHTML =
  `<span>&copy; ${new Date().getFullYear()} ${D.name}</span>` +
  `<span class="mono" style="color:var(--ac);letter-spacing:1px">${D.handle}</span>`;

/* ── Scroll fade-in observer ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
  });
}, { threshold: 0.05, rootMargin: "0px 0px -24px 0px" });
document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
