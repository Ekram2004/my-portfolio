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

// In your contact form handler (frontend)
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Use absolute URL with HTTPS
  const backendUrl = "https://my-portfolio-backend-tn8w.onrender.com";

  try {
    const response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      }),
      credentials: 'same-origin'
    });

    if (!response.ok) throw new Error(await response.text());
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Submission error:', error);
    alert(`Failed to send: ${error.message}`);
  }
};

