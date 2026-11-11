/**
 * SUSHANT THAKUR — DIGITAL PRODUCT ENGINEER
 * Interactive Engine & Behavioral Layer
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // 1. Navbar Scroll Effect
  const navbar = document.querySelector(".site-navbar");
  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  // 2. Custom Cursor (Desktop Only)
  const cursorDot = document.querySelector(".custom-cursor-dot");
  const cursorRing = document.querySelector(".custom-cursor-ring");

  if (cursorDot && cursorRing && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover expanders
    const interactiveElements = document.querySelectorAll("a, button, .clickable, .project-card-editorial, .stat-box, .service-card");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorRing.classList.add("cursor-grow");
      });
      el.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("cursor-grow");
      });
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.querySelector(".mobile-toggle-btn");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const drawerOverlay = document.querySelector(".drawer-overlay");
  const drawerClose = document.querySelector(".drawer-close-btn");
  const drawerLinks = document.querySelectorAll(".drawer-nav a");

  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);
  drawerLinks.forEach((link) => link.addEventListener("click", closeDrawer));

  // 4. Dark / Light Theme Toggle
  const themeToggles = document.querySelectorAll(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("st-portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);

  themeToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("st-portfolio-theme", nextTheme);
      updateThemeIcons(nextTheme);
    });
  });

  function updateThemeIcons(theme) {
    themeToggles.forEach((btn) => {
      const icon = btn.querySelector("i");
      if (icon) {
        if (theme === "light") {
          icon.className = "bi bi-moon-stars";
        } else {
          icon.className = "bi bi-sun";
        }
      }
    });
  }

  // 5. Scroll Spy for Nav Links
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links-desktop a, .drawer-nav a");

  function scrollSpy() {
    const scrollPos = window.scrollY + 200;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
  window.addEventListener("scroll", scrollSpy, { passive: true });

  // 6. Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card-editorial");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filterVal = this.getAttribute("data-filter");
      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        if (filterVal === "all" || categories.includes(filterVal)) {
          card.style.display = "";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });

  // 7. Case Study Modal Population
  const caseStudyModalEl = document.getElementById("caseStudyModal");
  if (caseStudyModalEl && window.bootstrap) {
    const bsModal = new bootstrap.Modal(caseStudyModalEl);

    document.querySelectorAll(".view-case-study-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const projectId = this.getAttribute("data-project-id");
        const projectData = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.projects)
          ? window.PORTFOLIO_CONFIG.projects.find((p) => p.id === projectId)
          : null;

        if (projectData) {
          document.getElementById("modalProjectNumber").textContent = `PROJECT ${projectData.number}`;
          document.getElementById("modalProjectCategory").textContent = projectData.category;
          document.getElementById("modalProjectTitle").textContent = projectData.name;
          document.getElementById("modalProjectOverview").textContent = projectData.longOverview || projectData.shortDescription;

          // Tech stack
          const stackContainer = document.getElementById("modalTechStack");
          stackContainer.innerHTML = projectData.techStack
            .map((t) => `<span class="project-tech-pill">${t}</span>`)
            .join("");

          // Contributions
          const contribContainer = document.getElementById("modalContributions");
          contribContainer.innerHTML = projectData.contributions
            .map((c) => `<li>${c}</li>`)
            .join("");

          // Screens
          const screensContainer = document.getElementById("modalScreens");
          if (screensContainer && projectData.screens) {
            screensContainer.innerHTML = projectData.screens
              .map(
                (s) => `
                <div class="col-md-4 mb-3">
                  <div class="p-3 rounded" style="background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                    <div class="text-lime fw-bold font-mono mb-1" style="font-size: 0.8rem;">FEATURE</div>
                    <div class="fw-semibold mb-1" style="font-size: 0.95rem;">${s.title}</div>
                    <div class="text-muted small" style="font-size: 0.8rem;">${s.subtitle}</div>
                  </div>
                </div>
              `
              )
              .join("");
          }

          bsModal.show();
        }
      });
    });
  }

  // 8. Contact Form Handling (Client-side validation, honest notification)
  const contactForm = document.getElementById("portfolioContactForm");
  const contactFeedback = document.getElementById("contactFeedback");

  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value.trim();
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !email || !message) {
        contactFeedback.className = "contact-feedback error";
        contactFeedback.textContent = "Please fill in all required fields (Name, Email, Message).";
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        contactFeedback.className = "contact-feedback error";
        contactFeedback.textContent = "Please enter a valid email address.";
        return;
      }

      // Transparent feedback & open direct mailto compose
      contactFeedback.className = "contact-feedback success";
      contactFeedback.innerHTML = `
        <div class="fw-bold mb-1"><i class="bi bi-check2-circle me-1"></i> Ready to send!</div>
        <div>Launching your default email client for <strong>sushantthakur.dev@gmail.com</strong> with your message pre-filled. You can also write directly to Sushant on LinkedIn or GitHub.</div>
      `;

      const mailtoUrl = `mailto:sushantthakur.dev@gmail.com?subject=${encodeURIComponent(
        subject || "Mobile Product Inquiry from Portfolio"
      )}&body=${encodeURIComponent(
        `Hi Sushant,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  // 9. Scroll to Top
  const scrollTopBtn = document.querySelector(".scroll-top-btn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 10. Initialize AOS (Animate on Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 50
    });
  }
});
