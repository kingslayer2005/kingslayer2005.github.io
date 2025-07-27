// Typing animation for hero section
const text = "Hi, I'm Aarush Gupta.";
let i = 0;
function type() {
  if (i <= text.length) {
    document.getElementById('typed-text').textContent = text.slice(0, i);
    i++;
    setTimeout(type, 80);
  }
}
type();

// Animate skill bars on scroll
function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Section highlighting in nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('text-[#00ffae]');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-[#00ffae]');
    }
  });
});

// Smooth scroll for anchor links
navLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}); 