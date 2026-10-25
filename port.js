
const roles = [
  "Frontend Developer",
  "Web Developer",
  "JavaScript Developer",
  "C Programmer",
  "Java Programmer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentRole.substring(0, charIndex);

  let delay = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    delay = 1300;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350;
  }

  setTimeout(typeRole, delay);
}

typeRole();

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Close the mobile menu after clicking a navigation link
const navLinks = document.querySelectorAll("#navbarMenu .nav-link");
const navMenu = document.getElementById("navbarMenu");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu && navMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});
