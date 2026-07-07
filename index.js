/* ==========================================================================
   nourir — Main JavaScript File
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feather Icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // 1. STICKY NAV ON SCROLL
  const mainNav = document.getElementById("main-nav");
  const scrollThreshold = 60;

  const handleScroll = () => {
    if (mainNav) {
      if (window.scrollY > scrollThreshold) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  // Run once on load in case page is already scrolled
  handleScroll();

  // 2. MOBILE MENU HAMBURGER TOGGLE
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const navLinksList = document.querySelector(".nav-links");

  if (menuToggleBtn && navLinksList) {
    menuToggleBtn.addEventListener("click", () => {
      navLinksList.classList.toggle("nav-active");
      menuToggleBtn.classList.toggle("open");
    });

    // Close menu when a link is clicked
    const links = navLinksList.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinksList.classList.remove("nav-active");
        menuToggleBtn.classList.remove("open");
      });
    });
  }

  // 3. CATEGORY PILL INTERACTION
  const categoryPills = document.querySelectorAll(".category-tag");
  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      // Clear tag-selected from all
      categoryPills.forEach(p => p.classList.remove("tag-selected"));
      // Add to clicked
      pill.classList.add("tag-selected");
      console.log("Selected category:", pill.textContent.trim());
    });
  });

  // 4. NEWSLETTER SUBSCRIPTION ALERT
  const newsletterForm = document.getElementById("newsletter-subscribe-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector(".newsletter-input");
      if (emailInput && emailInput.value) {
        alert(`Thank you for subscribing, ${emailInput.value}!`);
        emailInput.value = "";
      }
    });
  }
});
