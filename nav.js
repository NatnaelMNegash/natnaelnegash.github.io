// Shared header + footer for every page.
// Set data-page on <body> to highlight the active nav link.
(function () {
  const pages = [
    ["index.html", "Home"],
    ["research.html", "Research"],
    ["teaching.html", "Teaching"],
    ["publications.html", "Publications"],
    ["service.html", "Service"],
    ["gallery.html", "Gallery"],
    ["news.html", "News"],
  ];
  const current = document.body.getAttribute("data-page") || "index.html";

  const links = pages
    .map(([href, label]) => {
      const active = href === current ? ' class="active"' : "";
      return `<li><a href="${href}"${active}>${label}</a></li>`;
    })
    .join("");

  const header = `
    <header class="site-header">
      <div class="nav-inner">
        <a class="brand" href="index.html">Natnael M. Negash</a>
        <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
        <ul class="nav-links" id="navLinks">${links}</ul>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="footer-inner">
        <span class="name">Natnael M. Negash, Ph.D.</span>
        <span>Email: <a href="mailto:natnael_negash@baylor.edu">natnael_negash@baylor.edu</a></span>
        <span>Alternative: <a href="mailto:natnaelnegash314@gmail.com">natnaelnegash314@gmail.com</a></span>
        <span>LinkedIn: <a href="https://www.linkedin.com/in/natnael-m-negash-12721473/" target="_blank" rel="noopener">linkedin.com/in/natnael-m-negash-12721473</a></span>
        <span style="margin-top:0.6rem;font-size:0.82rem;">&copy; ${new Date().getFullYear()} Natnael M. Negash · Last updated April 2026</span>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
