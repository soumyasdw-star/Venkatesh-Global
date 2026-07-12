// =====================
// Mobile Navigation
// =====================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
mobileMenu
  .querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => mobileMenu.classList.add("hidden")),
  );

// =====================
// Sticky Navigation & Back-to-Top
// =====================
const navBar = document.getElementById("site-nav");
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navBar.classList.add("shadow-md");
  } else {
    navBar.classList.remove("shadow-md");
  }
  if (window.scrollY > 700) {
    backToTopBtn.classList.remove("hidden");
    backToTopBtn.classList.add("flex");
  } else {
    backToTopBtn.classList.add("hidden");
    backToTopBtn.classList.remove("flex");
  }
});
backToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

// =====================
// Scroll Reveal Animations
// =====================
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealElements.forEach((el) => revealObserver.observe(el));

// =====================
// FAQ Accordion
// =====================
document.querySelectorAll(".faq-item").forEach((faqItem) => {
  const questionBtn = faqItem.querySelector(".faq-q");
  const answerContent = faqItem.querySelector(".accordion-content");
  const icon = faqItem.querySelector(".faq-icon");
  questionBtn.addEventListener("click", () => {
    const isOpen =
      answerContent.style.maxHeight && answerContent.style.maxHeight !== "0px";
    document
      .querySelectorAll(".accordion-content")
      .forEach((c) => (c.style.maxHeight = "0px"));
    document
      .querySelectorAll(".faq-icon")
      .forEach((i) => (i.textContent = "+"));
    if (!isOpen) {
      answerContent.style.maxHeight = answerContent.scrollHeight + "px";
      icon.textContent = "\u2212";
    }
  });
});

// =====================
// Footer Year
// =====================
document.getElementById("year").textContent = new Date().getFullYear();
