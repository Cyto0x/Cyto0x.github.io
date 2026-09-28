// Edit this file to update the site. No HTML changes needed. Empty links are hidden automatically.
const DATA = {
  name: "Abdalrahman Albeshtawi",
  handle: "Cyto0x",
  headline: "Offensive Security | Application Security | Vulnerability Research",
  summary: "Cybersecurity graduate (AABU, 2026) focused on offensive security, penetration testing, application security and exploit development. Hands-on across web and API security, Active Directory, Linux, binary exploitation, reverse engineering and security automation, built through professional training, an industry internship, hundreds of labs and CTFs, challenge development and independent tooling.",
  links: { github: "https://github.com/Cyto0x", linkedin: "https://www.linkedin.com/in/beshtawi/", email: "", cv: "", tryhackme: "https://tryhackme.com/p/Cyto0x", hackthebox: "", portswigger: "" },
  snapshot: "September 2026",

  // [title, label, text]
  focus: [
    ["Application security", "Primary focus", "Web and API testing, authentication and access control, JWT, SQL injection, XSS, SSRF, SSTI, XXE, LFI, deserialization, race conditions, business logic and exploit chaining."],
    ["Binary exploitation", "Pwn and reverse engineering", "Heap exploitation (use-after-free, tcache poisoning, safe-linking), ROP and SROP, stack pivots, seccomp-aware ORW chains, libc leaks. Analysis with Ghidra, GDB, pwndbg and Radare2."],
    ["Windows and Active Directory", "Hands-on lab experience", "Enumeration, Kerberoasting, AS-REP roasting, ACL abuse, BloodHound paths, AD CS, RBCD, DCSync, coercion and lateral movement in extensive lab environments."],
    ["Linux and networking", "Hands-on lab experience", "Enumeration and privilege escalation, service and traffic analysis, tunneling and pivoting with Chisel and Ligolo-NG."],
    ["Mobile", "Hands-on lab experience", "Android and iOS static analysis with JADX and APKTool, secret discovery and Burp-based traffic inspection."],
    ["Security automation", "Builder", "Python tooling for scanning, network forensics and wordlist generation, plus Docker-based challenge infrastructure."]
  ],

  cases: [
    { title: "Web Vulnerability Scanner", kind: "Graduation project · Python",
      text: "A modular scanner that crawls a site, finds parameters that reflect input, and tests for SSRF, SSTI, path traversal/LFI and reflected, stored and DOM XSS. XSS findings are validated in a headless Playwright browser, and SSRF supports out-of-band detection through Burp Collaborator. SSTI covers Jinja2, Twig, Freemarker, ERB and Velocity, with an interactive post-exploitation shell. Results export to JSON, CSV and XML, and scans can run with session or cookie authentication.",
      tags: ["Python", "Requests", "BeautifulSoup", "Playwright", "ThreadPoolExecutor"], repo: "" },
    { title: "PCAP JPEG Extractor", kind: "Independent project · Python",
      text: "A network-forensics helper that uses tshark to extract JPEG images from TCP streams in PCAP files. Filter by source IP, destination, port or stream index, with interactive suggestions and extraction logging.",
      tags: ["Python", "tshark", "PCAP", "forensics"], repo: "https://github.com/Cyto0x/pcap-jpeg-extractor" }
  ],

  // [name, text, url]
  tools: [
    ["PatternEncoder", "Generates structured wordlists from reusable transformation patterns (Base64, MD5, SHA-256 and more) for authentication and token testing.", "https://github.com/Cyto0x/PatternEncoder"],
    ["LyricMiner", "Resumable lyrics extractor with proxy support, user-agent rotation and TXT/JSON output. A general Python and HTTP automation project.", "https://github.com/Cyto0x/LyricMiner"]
  ],

  // CTF: competitions first, then authored challenges (rendered as accordions in JS)
  ctf: {
    competitions: [
      ["The Vault Protocol – 2nd Place", "Team S.K Crew · Cyber Future: Railway Edition (CFR)", "Competed as part of team S.K Crew and placed 2nd in a multi-discipline offensive security competition. Challenges spanned host enumeration, exploitation, port-knocking logic, API abuse, command injection and privilege escalation across a realistic railway-themed infrastructure scenario.", ""],
      ["CTF Participation", "Web · Pwn · Reverse Engineering · Network · Crypto", "Consistent CTF experience across platforms and competitions — TryHackMe, Hack The Box, PortSwigger, picoCTF, CTFlearn, Flag Yard, CTFtime — spanning web exploitation, binary exploitation, reverse engineering, network challenges and cryptography."]
    ],
    challenges: [
      { title: "Bank Al-Ummi", kind: "JCC Catch The Hilal · Pwn",
        text: "A medium-to-hard AMD64 heap challenge built around a use-after-free under glibc safe-linking. Players must reason about heap layout, construct a reliable leak strategy, and chain a UAF → tcache poisoning → GOT leak → libc base → function-pointer overwrite into a working exploit. Designed and containerized end-to-end including solver and Docker infrastructure.",
        tags: ["Heap", "UAF", "tcache", "safe-linking", "GOT leak", "pwntools", "Docker"] },
      { title: "Do Not Disturb", kind: "JCC Catch The Hilal · Pwn",
        text: "A medium-hard to hard challenge that layers PIE, stack canaries, NX, Full RELRO and a seccomp allowlist. The intended path chains information disclosure → canary leak → PIE-base recovery → controlled re-entry into a second read → SROP → ORW syscall chain under a restrictive seccomp filter.",
        tags: ["PIE", "canary", "SROP", "seccomp", "ORW", "stack pivot", "pwntools"] },
      { title: "Forged Hilal", kind: "JCC Catch The Hilal · Web",
        text: "A Flask/Jinja2/SQLite web challenge containerized with Docker Compose, built around weak JWT secrets and server-side template injection. Players interact with a black-box app, discover the weak signing secret, forge a JWT with a modified role claim, and abuse role-controlled template rendering to reach SSTI. Designed as a multi-step exploit chain rather than a single bug.",
        tags: ["Flask", "JWT", "SSTI", "Jinja2", "weak secret", "Docker"] },
      { title: "Stolen Hilal", kind: "JCC Catch The Hilal · Web",
        text: "A follow-up Flask challenge replacing the earlier SSTI surface with JWT algorithm-confusion and a stored-XSS chain against an admin bot. Intended chain: register → discover exposed RSA public key → forge HS256 token to gain observer role → inject stored XSS → admin bot (Selenium, headless Chrome) visits page → steal flag from non-HttpOnly cookie.",
        tags: ["JWT", "RS256/HS256", "Algorithm Confusion", "Stored XSS", "Selenium", "Docker"] }
    ]
  },

  exp: [
    ["Technology and Product Trainee Intern, Devorise AI", "Amman · February to March 2026", "Contributed to architecture review, threat modeling, pre-deployment penetration testing, vulnerability assessment and security documentation."],
    ["Cybersecurity Trainee, Masar Program, NCSC Jordan", "National Cyber Security Center · 204 hours over eight weeks", "Practical training in reconnaissance, vulnerability assessment, exploitation, Linux post-exploitation, incident handling, digital forensics, threat intelligence, secure configuration and GRC fundamentals."],
    ["BSc Cybersecurity, AABU", "Al al-Bayt University · 2026", ""]
  ],

  certs: [
    ["eWPTX", "Web Application Penetration Tester eXtreme", "INE Security · July 2026", "https://certs.ine.com/9eddb8fe-5005-4173-8f13-f88eda81f0fb"],
    ["eCPPT", "Certified Professional Penetration Tester", "INE Security · August 2026", "https://certs.ine.com/c0e2210a-94b2-4159-be40-b6eba75956ef"]
  ],

  labs: {
    thm: { rooms: 475, streak: 750, top: "1%" },
    ps: [["Apprentice", 52, 61], ["Practitioner", 118, 173], ["Expert", 16, 39]]
  },

  // [title, label, text, url]
  writeups: []
};
