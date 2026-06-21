// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    themeIcon.className = "fas fa-moon";
  } else {
    document.body.classList.remove("light");
    themeIcon.className = "fas fa-sun";
  }
}

// Load saved preference
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  const next = isLight ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== TYPED TEXT =====
const roles = [
  "Web Developer",
  "Android Developer",
  "Problem Solver",
  "IT Student",
];
let roleIndex = 0,
  charIndex = 0,
  isDeleting = false;
const typedEl = document.getElementById("typed");

function type() {
  const current = roles[roleIndex];
  typedEl.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  let delay = isDeleting ? 60 : 100;
  if (!isDeleting && charIndex === current.length + 1) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

// ===== SCROLL REVEAL =====
document
  .querySelectorAll(
    ".section > .container > *, .project-card, .timeline-item, .skill-category, .stat-card, .contact-item",
  )
  .forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute("id");
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

// ===== CONTACT FORM =====
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = "";
    btn.disabled = false;
    this.reset();
  }, 3000);
});
