// Generate stars
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}

function scrollToTickets() {
  document.getElementById("tickets").scrollIntoView({ behavior: "smooth" });
}

// Modal functionality
function openBookingModal() {
  const modal = document.getElementById("bookingModal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("modal-open");
  }, 10);
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  modal.classList.remove("modal-open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Prevent form submission in demo
document.querySelector(".modal form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "🎃 Thank you for your interest! This is a demo form and does not process bookings."
  );
});

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - scrolled / 700;
  }
  // Animate feature cards on scroll
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      card.classList.add("animate-in");
    }
  });
});

// Enhanced spooky cursor trail effect
let lastGhostTime = 0;
document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastGhostTime > 100 && Math.random() > 0.9) {
    lastGhostTime = now;
    const ghost = document.createElement("div");
    const icons = ["👻", "🎃", "🦇", "🕷️", "💀"];
    ghost.textContent = icons[Math.floor(Math.random() * icons.length)];
    ghost.className = "ghost-trail";
    ghost.style.left = e.clientX + "px";
    ghost.style.top = e.clientY + "px";
    document.body.appendChild(ghost);
    setTimeout(() => ghost.remove(), 3000);
  }
});

// Intersection Observer for testimonials animation
const testimonials = document.querySelectorAll(".testimonial-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  },
  { threshold: 0.2 }
);

testimonials.forEach((card) => observer.observe(card));

// Dynamic fog effect
const fog = document.querySelector(".fog");
setInterval(() => {
  fog.style.opacity = 0.3 + Math.random() * 0.2;
}, 5000);
