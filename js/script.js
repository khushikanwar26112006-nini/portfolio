/* Builds the page from PORTFOLIO (js/data.js). Sections with no data are skipped. */
(function () {
  const D = PORTFOLIO, P = D.person;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = a => Array.isArray(a) && a.length > 0;
  const btn = (href, label, cls, extra = "") => href ? `<a class="btn ${cls}" href="${esc(href)}" ${extra}>${esc(label)}</a>` : "";
  const ext = 'target="_blank" rel="noopener"';
  const tags = a => `<ul class="tags">${a.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;
  const initials = P.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2);

  /* ---------- Section builders ---------- */
  const home = () => `
    <div class="wrap hero">
      <div class="hero-text">
        <p class="hello">Hello, I am</p>
        <h1>${esc(P.name)}</h1>
        <p class="headline">${esc(P.headline)}</p>
        ${D.intro ? `<p class="lead">${esc(D.intro)}</p>` : ""}
        <div class="actions">
          ${btn("#projects", "View projects", "primary")}
          ${btn("#contact", "Contact me", "ghost")}
          ${btn(P.resume, "Download resume", "ghost", "download")}
        </div>
        ${P.location ? `<p class="meta">${esc(P.location)}</p>` : ""}
      </div>
      <div class="photo">${P.photo ? `<img src="${esc(P.photo)}" alt="Portrait of ${esc(P.name)}" data-fallback="avatar" data-text="${esc(initials)}">` : `<div class="avatar">${esc(initials)}</div>`}</div>
    </div>`;

  const about = () => D.about.map(p => `<p>${esc(p)}</p>`).join("");

  const education = () => `<ol class="timeline">${D.education.map(e => `
    <li><h3>${esc(e.title)}</h3><p>${esc(e.place)}</p>
    <p class="muted">${esc([e.period, e.note].filter(Boolean).join(" · "))}</p></li>`).join("")}</ol>`;

  const skills = () => `<dl class="skills">${D.skills.filter(g => has(g.items)).map(g => `<div><dt>${esc(g.group)}</dt><dd>${tags(g.items)}</dd></div>`).join("")}</dl>`;

  const projects = () => D.projects.map(p => `
    <article class="project">
      <div class="shot">${p.image ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.name)}" data-fallback="shot-ph" data-text="${esc(p.name)}">` : `<div class="shot-ph">${esc(p.name)}</div>`}</div>
      <div class="body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.description)}</p>
        ${has(p.tech) ? tags(p.tech) : ""}
        ${has(p.contribution) ? `<h4>My contribution</h4><ul class="list">${p.contribution.map(c => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
        <div class="actions">${btn(p.demo, "Live demo", "primary", ext)}${btn(p.repo, "Source code", "ghost", ext)}</div>
      </div>
    </article>`).join("");

  const training = () => D.training.map(t => `
    <div class="block"><h3>${esc(t.role)}</h3><p>${esc(t.org)}</p><p class="muted">${esc(t.period)}</p>
    ${has(t.learned) ? `<h4>Skills learned</h4>${tags(t.learned)}` : ""}</div>`).join("");

  const certs = () => `<div class="certs">${D.certifications.map(c => `
    <article class="cert">
      ${c.image ? `<a href="${esc(c.file || c.link || c.image)}" ${ext}><img src="${esc(c.image)}" alt="${esc(c.name)} certificate" loading="lazy"></a>` : ""}
      <div><h3>${esc(c.name)}</h3><p>${esc(c.org)}</p><p class="muted">${esc(c.year)}</p>
      <div class="actions">${btn(c.link, "Verify online", "primary", ext)}${btn(c.file, "View certificate", "ghost", ext)}</div></div>
    </article>`).join("")}</div>`;

  const contact = () => `
    <p>I am open to learning and job opportunities. Feel free to get in touch.</p>
    <ul class="contact">
      ${P.email ? `<li><span>Email</span><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>` : ""}
      ${P.showPhone && P.phone ? `<li><span>Phone</span><a href="tel:${esc(P.phone)}">${esc(P.phone)}</a></li>` : ""}
      ${P.linkedin ? `<li><span>LinkedIn</span><a href="${esc(P.linkedin)}" ${ext}>Khushi Kanwar on LinkedIn</a></li>` : ""}
      ${P.github ? `<li><span>GitHub</span><a href="${esc(P.github)}" ${ext}>${esc(P.github.replace("https://", ""))}</a></li>` : ""}
      ${P.location ? `<li><span>Location</span>${esc(P.location)}</li>` : ""}
    </ul>`;

  const sections = [
    { id: "home", label: "Home", show: true, full: true, html: home },
    { id: "about", label: "About", show: has(D.about), html: about },
    { id: "education", label: "Education", show: has(D.education), html: education },
    { id: "skills", label: "Skills", show: has(D.skills), html: skills },
    { id: "projects", label: "Projects", show: has(D.projects), html: projects },
    { id: "training", label: "Training", show: has(D.training), html: training },
    { id: "certifications", label: "Certifications", show: has(D.certifications), html: certs },
    { id: "contact", label: "Contact", show: !!(P.email || P.linkedin || P.github), html: contact }
  ].filter(s => s.show);

  /* ---------- Render ---------- */
  $("#brand").textContent = P.name;
  $("#navList").innerHTML = sections.filter(s => s.id !== "home").map(s => `<li><a href="#${s.id}">${esc(s.label)}</a></li>`).join("");
  $("#main").innerHTML = sections.map(s => s.full
    ? `<section id="${s.id}" class="sec home">${s.html()}</section>`
    : `<section id="${s.id}" class="sec fade"><div class="wrap split"><h2>${esc(s.label)}</h2><div class="content">${s.html()}</div></div></section>`).join("");
  $("#footer").textContent = `© ${new Date().getFullYear()} ${P.name}`;
  document.title = `${P.name} | Portfolio`;

  /* Fallback if an image file is missing (initials avatar / placeholder) */
  document.querySelectorAll("img[data-fallback]").forEach(img => {
    const swap = () => { const d = document.createElement("div"); d.className = img.dataset.fallback === "avatar" ? "avatar" : "shot-ph"; d.textContent = img.dataset.text || ""; img.replaceWith(d); };
    img.addEventListener("error", swap);
    if (img.complete && img.naturalWidth === 0) swap();
  });

  /* ---------- Theme toggle (remembered) ---------- */
  const root = document.documentElement, tbtn = $("#themeBtn");
  let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
  const setTheme = t => {
    root.dataset.theme = t;
    tbtn.textContent = t === "dark" ? "☀" : "☾";
    tbtn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };
  setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  tbtn.addEventListener("click", () => {
    const t = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(t); try { localStorage.setItem("theme", t); } catch (e) {}
  });

  /* ---------- Mobile menu ---------- */
  const menu = $("#menuBtn"), nav = $("#nav");
  const closeMenu = () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); };
  menu.addEventListener("click", () => menu.setAttribute("aria-expanded", nav.classList.toggle("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });

  /* ---------- Scroll fade-in and active link ---------- */
  if ("IntersectionObserver" in window) {
    const fade = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); fade.unobserve(e.target); } }), { threshold: 0.08 });
    document.querySelectorAll(".fade").forEach(el => fade.observe(el));
    const links = [...document.querySelectorAll("#navList a")];
    const spy = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach(s => spy.observe(s));
  } else document.querySelectorAll(".fade").forEach(el => el.classList.add("in"));
})();
