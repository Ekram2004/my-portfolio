const toggle = document.getElementById("theme-toggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const cursor = document.querySelector(".custom-cursor");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

new TypeIt("#typed-role", {
  strings: [
    "Frontend Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "Building clean responsive websites",
  ],
  speed: 60,
  breakLines: false,
  loop: true,
}).go();

// ✅ Custom cursor movement
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// ✅ Custom cursor hover effect (Fixed here)
const hoverTargets = document.querySelectorAll("a, button");

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});


