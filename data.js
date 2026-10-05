// Edit this file to update the site. No HTML changes needed.
const DATA = {
  name: "Abdalrahman Albeshtawi",
  handle: "Cyto0x",
  headline: "Application Security & Offensive Security",
  summary: "Cybersecurity graduate focused on application security and offensive security, with hands-on experience in web and API penetration testing, exploit development, and security research.",
  links: { github: "https://github.com/Cyto0x", linkedin: "https://www.linkedin.com/in/beshtawi/", email: "", cv: "", tryhackme: "https://tryhackme.com/p/Cyto0x", portswigger: "" },
  snapshot: "September 2026",

  // Cert pills shown under hero headline
  certpills: ["eWPTX", "eCPPT", "BSc Cybersecurity"],

  // Primary focus — 2 cards (AppSec + Offensive)
  primary: [
    ["Application Security", "Primary focus",
      "Web and API penetration testing — authentication and authorization attacks, JWT, SSRF, SSTI, SQLi, XSS, XXE, LFI, deserialization, race conditions, business logic, and exploit chaining. Tools: Burp Suite Pro, OWASP ZAP, ffuf, Postman, Caido."],
    ["Offensive Security & Pentesting", "Penetration testing",
      "Full-scope penetration testing across networked systems, Active Directory, and application layers. Domain reconnaissance, Kerberos attacks (Kerberoasting, AS-REP roasting), ACL abuse, AD CS, RBCD, DCSync, and lateral movement. Tools: BloodHound / SharpHound, Impacket, NetExec, Rubeus, Evil-WinRM, Metasploit, Nmap, Wireshark."]
  ],

  // Secondary domains — 2 cards
  secondary: [
    ["Binary Exploitation & RE", "Pwn · Reverse engineering",
      "Heap exploitation (UAF, tcache poisoning, safe-linking), ROP and SROP, stack pivots, seccomp-aware ORW chains, and libc leaks. Tools: GDB with pwndbg / GEF, pwntools, Ghidra, Radare2."],
    ["Mobile Security", "Android · iOS",
      "Static and dynamic analysis of Android and iOS applications — APK/IPA reversing, SSL pinning bypass, insecure IPC, local secret extraction, and traffic interception. Tools: Frida, Android Studio, ADB, JADX-GUI, APKTool, Burp Suite."]
  ],

  // Security focus keywords — shown as a tag cloud
  keywords: [
    "Web & API Pentesting", "Authentication Attacks", "JWT Security",
    "SSRF · SSTI · SQLi · XSS", "Exploit Chaining", "Binary Exploitation",
    "Heap Exploitation", "SROP", "Active Directory", "Privilege Escalation",
    "Lateral Movement", "Mobile Analysis", "Security Tooling", "Docker / CTF Infra"
  ],

  // Featured projects — rendered with visible summary (no click needed for overview)
  featured: [
    { title: "Web Vulnerability Scanner",
      kind: "Graduation project · Python · Security tooling",
      summary: "Modular web vulnerability scanner covering SSRF, SSTI, LFI/path traversal and reflected, stored and DOM XSS — with browser-based validation and authenticated scanning.",
      text: "Crawls a site recursively, identifies reflective parameters, and runs targeted payloads. XSS is validated in a headless Playwright browser. SSRF supports out-of-band detection via Burp Collaborator. SSTI covers Jinja2, Twig, Freemarker, ERB and Velocity engines, with an interactive post-exploitation shell. Results export to JSON, CSV and XML.",
      tags: ["Python", "Playwright", "Burp Collaborator", "SSRF", "SSTI", "XSS", "LFI"], repo: "" },
    { title: "Stolen Hilal",
      kind: "JCC Catch The Hilal · Web · Challenge Author",
      summary: "Multi-stage web challenge: JWT algorithm confusion (RS256 → HS256) chained with stored XSS against an admin bot to steal a session cookie.",
      text: "Flask/SQLite app with asymmetric JWT signing — the public RSA key is exposed, and the server accepts both RS256 and HS256. Players forge an HS256 token to gain observer role, inject stored XSS into notes rendered to an admin bot (Selenium, headless Chrome), and exfiltrate the flag from a non-HttpOnly cookie. Fully Dockerized including bot automation.",
      tags: ["JWT", "Algorithm Confusion", "Stored XSS", "Flask", "Selenium", "Docker"], repo: "" },
    { title: "Forged Hilal",
      kind: "JCC Catch The Hilal · Web · Challenge Author",
      summary: "Black-box Flask/Jinja2 challenge — weak JWT secret cracking chained to server-side template injection.",
      text: "Players discover a weak HS256 signing secret, forge a JWT with an elevated role claim, and abuse role-controlled render_template_string calls to reach SSTI and execute arbitrary code. Designed as a multi-step exploit chain with SQLite, PyJWT, and Docker Compose infrastructure.",
      tags: ["JWT", "SSTI", "Jinja2", "Flask", "Weak Secret", "Docker"], repo: "" },
    { title: "Bank Al-Ummi",
      kind: "JCC Catch The Hilal · Pwn · Challenge Author",
      summary: "AMD64 heap exploitation — use-after-free under glibc safe-linking, chained to a GOT/libc leak and function-pointer overwrite.",
      text: "A stale pointer left by a freed deposit chunk allows continued access via update/view operations. Exploit chain: heap layout reasoning → UAF → tcache poisoning (safe-linking aware) → forged structures in .bss → arbitrary read/write primitive → write@GOT leak → libc base → function-pointer overwrite → shell. Full Docker infrastructure with solver included.",
      tags: ["Heap", "UAF", "tcache", "Safe-linking", "GOT Leak", "pwntools", "Docker"], repo: "" },
    { title: "Do Not Disturb",
      kind: "JCC Catch The Hilal · Pwn · Challenge Author",
      summary: "Hard SROP challenge combining PIE, canary, NX, Full RELRO and a strict seccomp filter — two-stage stack interaction required.",
      text: "Protections: PIE, stack canary, NX, Full RELRO, seccomp (allowlist: read, write, openat, exit, rt_sigreturn). Exploit path: leak canary + PIE base → overflow into second read → stage payload in writable memory → SROP frame → ORW syscall chain to read and print flag. Demonstrates syscall-level exploitation under layered mitigations.",
      tags: ["SROP", "PIE", "Canary", "seccomp", "ORW", "Stack Pivot", "pwntools"], repo: "" }
  ],

  // Other projects — smaller grid
  other: [
    { title: "PCAP JPEG Extractor", kind: "Independent project · Python",
      text: "Network-forensics utility that extracts JPEG images from TCP streams in PCAP files using tshark. Supports filtering by IP, port, and stream index.",
      tags: ["Python", "tshark", "PCAP", "Forensics"], repo: "https://github.com/Cyto0x/pcap-jpeg-extractor" },
    { title: "PatternEncoder", kind: "Security tooling · Python",
      text: "Wordlist generator using reusable transformation patterns — Base64, MD5, SHA-256 and more — for authentication and token testing.",
      tags: ["Python", "Wordlist", "Auth Testing"], repo: "https://github.com/Cyto0x/PatternEncoder" },
    { title: "LyricMiner", kind: "Automation · Python",
      text: "Resumable lyrics extractor with proxy support, user-agent rotation and TXT/JSON output.",
      tags: ["Python", "Automation", "HTTP"], repo: "https://github.com/Cyto0x/LyricMiner" }
  ],

  // CTF competitions
  ctf: {
    competitions: [
      ["The Vault Protocol — 2nd Place", "Team S.K Crew · Cyber Future: Railway Edition (CFR)", "Competed as part of team S.K Crew and placed 2nd in a multi-discipline offensive security competition spanning host enumeration, exploitation, port-knocking logic, API abuse, command injection and privilege escalation.", ""],
      ["CTF Participation", "Web · Pwn · Reverse Engineering · Network", "Consistent CTF experience across TryHackMe, Hack The Box, PortSwigger, picoCTF, CTFlearn, Flag Yard, and CTFtime — covering web exploitation, binary exploitation, reverse engineering, and network challenges."]
    ]
  },

  // Work experience only
  exp: [
    ["Technology and Product Trainee Intern", "Devorise AI · Amman · February – March 2026", "Contributed to architecture review, threat modeling, pre-deployment penetration testing, vulnerability assessment and security documentation."],
    ["Cybersecurity Trainee, Masar Program", "NCSC Jordan · 204 hours over eight weeks", "Practical training in reconnaissance, vulnerability assessment, exploitation, Linux post-exploitation, incident handling, digital forensics, threat intelligence, secure configuration and GRC fundamentals."]
  ],

  // Education separate
  edu: [
    ["BSc Cybersecurity", "Al al-Bayt University (AABU) · 2026", ""]
  ],

  certs: [
    ["eWPTX", "Web Application Penetration Tester eXtreme", "INE Security · July 2026", "https://certs.ine.com/9eddb8fe-5005-4173-8f13-f88eda81f0fb"],
    ["eCPPT", "Certified Professional Penetration Tester", "INE Security · August 2026", "https://certs.ine.com/c0e2210a-94b2-4159-be40-b6eba75956ef"]
  ],

  labs: {
    thm: { rooms: 475, streak: 750, top: "1%" },
    ps: [["Apprentice", 52, 61], ["Practitioner", 118, 173], ["Expert", 16, 39]]
  },

  writeups: []
};
