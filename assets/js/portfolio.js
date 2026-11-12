/**
 * SUSHANT THAKUR — DIGITAL PRODUCT ENGINEER
 * Interactive Engine & Behavioral Layer
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // 1. Navbar Scroll Effect & Reading Progress Bar
  const navbar = document.querySelector(".site-navbar");
  const scrollProgressBar = document.getElementById("navScrollProgress");

  function handleNavScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (scrollProgressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
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
  const drawerLinks = document.querySelectorAll(".drawer-nav-item, .drawer-nav a");

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add("open");
    if (drawerOverlay) drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    if (drawerOverlay) drawerOverlay.classList.remove("active");
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
  const desktopNavLinks = document.querySelectorAll(".nav-links-desktop a");
  const drawerNavLinks = document.querySelectorAll(".drawer-nav-item");

  function scrollSpy() {
    const scrollPos = window.scrollY + 160;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
        drawerNavLinks.forEach((link) => {
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

          // Store action button if live
          const storeActionContainer = document.getElementById("modalStoreAction");
          if (storeActionContainer) {
            if (projectData.liveUrl) {
              const iconClass = projectData.liveUrl.includes("apple.com")
                ? "bi-apple"
                : (projectData.liveUrl.includes("play.google") ? "bi-google-play" : "bi-globe");
              storeActionContainer.innerHTML = `
                <a href="${projectData.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-store d-inline-flex align-items-center">
                  <i class="bi ${iconClass} fs-5 me-1"></i> Visit ${projectData.storeLabel || "Project"} <i class="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              `;
            } else {
              storeActionContainer.innerHTML = "";
            }
          }

          bsModal.show();
        }
      });
    });
  }

  // 8. Contact Form Handling (Robust FormSubmit + Gmail Compose Fallback)
  const contactForm = document.getElementById("portfolioContactForm");
  const contactFeedback = document.getElementById("contactFeedback");
  const contactSubmitBtn = document.getElementById("contactSubmitBtn");
  const contactSubmitBtnText = document.getElementById("contactSubmitBtnText");
  const contactSubmitBtnIcon = document.getElementById("contactSubmitBtnIcon");

  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("contactName");
      const emailInput = document.getElementById("contactEmail");
      const subjectInput = document.getElementById("contactSubject");
      const messageInput = document.getElementById("contactMessage");

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !email || !message) {
        contactFeedback.className = "contact-feedback error";
        contactFeedback.innerHTML = `<div><i class="bi bi-exclamation-triangle-fill me-1"></i> Please fill in all required fields (Name, Email, Message).</div>`;
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        contactFeedback.className = "contact-feedback error";
        contactFeedback.innerHTML = `<div><i class="bi bi-exclamation-triangle-fill me-1"></i> Please enter a valid email address.</div>`;
        return;
      }

      // Target email address
      const recipientEmail = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.contact && window.PORTFOLIO_CONFIG.contact.email)
        ? window.PORTFOLIO_CONFIG.contact.email
        : "sushantthakur.profile@gmail.com";

      const cleanSubject = subject || `New Portfolio Inquiry from ${name}`;
      const emailBody = `Hi Sushant,\n\nName: ${name}\nEmail: ${email}\nSubject: ${cleanSubject}\n\nMessage:\n${message}\n\nSent from Portfolio Contact Form`;
      const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(emailBody)}`;
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Update hidden subject if present
      const hiddenSubjectEl = document.getElementById("hiddenFormSubject");
      if (hiddenSubjectEl) {
        hiddenSubjectEl.value = cleanSubject;
      }

      // If browsing locally via file://, FormSubmit rejects due to missing Origin/Referer
      if (window.location.protocol === "file:") {
        contactFeedback.className = "contact-feedback warning";
        contactFeedback.innerHTML = `
          <div class="fw-bold mb-2 text-warning fs-6"><i class="bi bi-info-circle-fill me-1"></i> Direct Email Dispatch</div>
          <div class="mb-3 text-contrast" style="font-size: 0.92rem; line-height: 1.5;">
            Local file mode (<code>file:///</code>) detect hua hai. Message direct <strong>${recipientEmail}</strong> ko bhejne ke liye niche diye option par click karein:
          </div>
          <div class="d-flex flex-column flex-sm-row gap-2 mb-2">
            <a href="${gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="btn-prime justify-content-center flex-fill text-decoration-none">
              <i class="bi bi-google me-1"></i> Send via Gmail Web <i class="bi bi-arrow-up-right ms-1"></i>
            </a>
            <a href="${mailtoUrl}" class="btn-secondary justify-content-center flex-fill text-decoration-none" style="padding: 0.65rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: inline-flex; align-items: center; justify-content: center; color: var(--text-contrast);">
              <i class="bi bi-envelope me-1"></i> Open Mail App
            </a>
          </div>
        `;
        // Trigger mail client as fallback
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 1200);
        return;
      }

      // UI Loading state
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = true;
      }
      if (contactSubmitBtnText) {
        contactSubmitBtnText.textContent = "Sending Message...";
      }
      if (contactSubmitBtnIcon) {
        contactSubmitBtnIcon.className = "spinner-border spinner-border-sm ms-2";
      }

      contactFeedback.className = "contact-feedback info";
      contactFeedback.innerHTML = `
        <div class="d-flex align-items-center gap-2">
          <div class="spinner-border spinner-border-sm" role="status"></div>
          <span>Sending your message directly to <strong>${recipientEmail}</strong>...</span>
        </div>
      `;

      fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: cleanSubject,
          message: message,
          _captcha: "false",
          _template: "table"
        })
      })
      .then(async (res) => {
        let data = null;
        try {
          data = await res.json();
        } catch (err) {
          data = { success: res.ok ? "true" : "false" };
        }

        if (data && (data.success === "true" || data.success === true)) {
          contactFeedback.className = "contact-feedback success";
          contactFeedback.innerHTML = `
            <div class="fw-bold mb-1 fs-6"><i class="bi bi-check2-circle me-1"></i> Message Delivered Successfully!</div>
            <div class="text-contrast">Your inquiry has been sent directly to <strong>${recipientEmail}</strong>. Sushant will reply to <strong>${email}</strong> shortly.</div>
          `;
          contactForm.reset();
        } else if (data && data.message && data.message.toLowerCase().includes("activation")) {
          contactFeedback.className = "contact-feedback warning";
          contactFeedback.innerHTML = `
            <div class="fw-bold mb-2 text-warning fs-6"><i class="bi bi-exclamation-triangle-fill me-1"></i> One-Time Email Activation Required!</div>
            <div class="mb-3 text-contrast" style="font-size: 0.92rem; line-height: 1.5;">
              FormSubmit ne <strong>${recipientEmail}</strong> par ek confirmation link bheja hai.<br>
              Apne Gmail inbox (ya Spam/Updates folder) me jakar <strong>"Activate Form"</strong> button par click karein.
            </div>
            <div class="d-flex flex-column flex-sm-row gap-2">
              <a href="${gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="btn-prime justify-content-center flex-fill text-decoration-none">
                <i class="bi bi-google me-1"></i> Send Directly via Gmail <i class="bi bi-arrow-up-right ms-1"></i>
              </a>
              <a href="${mailtoUrl}" class="btn-secondary justify-content-center flex-fill text-decoration-none" style="padding: 0.65rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: inline-flex; align-items: center; justify-content: center; color: var(--text-contrast);">
                <i class="bi bi-envelope me-1"></i> Open Mail App
              </a>
            </div>
          `;
        } else {
          throw new Error((data && data.message) || "Unable to send message via form endpoint.");
        }
      })
      .catch((err) => {
        contactFeedback.className = "contact-feedback warning";
        contactFeedback.innerHTML = `
          <div class="fw-bold mb-2 text-warning fs-6"><i class="bi bi-envelope-check-fill me-1"></i> Direct Send Options</div>
          <div class="mb-3 text-contrast" style="font-size: 0.92rem; line-height: 1.5;">
            Automatic server delivery me dikkat aayi. Aap direct Gmail ya default Mail App se 1-click me message bhej sakte hain:
          </div>
          <div class="d-flex flex-column flex-sm-row gap-2">
            <a href="${gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="btn-prime justify-content-center flex-fill text-decoration-none">
              <i class="bi bi-google me-1"></i> Send via Gmail Web <i class="bi bi-arrow-up-right ms-1"></i>
            </a>
            <a href="${mailtoUrl}" class="btn-secondary justify-content-center flex-fill text-decoration-none" style="padding: 0.65rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: inline-flex; align-items: center; justify-content: center; color: var(--text-contrast);">
              <i class="bi bi-envelope me-1"></i> Open Mail App
            </a>
          </div>
        `;
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 1200);
      })
      .finally(() => {
        if (contactSubmitBtn) {
          contactSubmitBtn.disabled = false;
        }
        if (contactSubmitBtnText) {
          contactSubmitBtnText.textContent = "Send Message";
        }
        if (contactSubmitBtnIcon) {
          contactSubmitBtnIcon.className = "bi bi-send-fill ms-1";
        }
      });
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
