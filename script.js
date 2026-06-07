/* ══════════════════════════════════
   InAmigos Foundation — JS
══════════════════════════════════ */

// ── Navbar scroll effect ──────────
const navbar = document.getElementById('top')?.closest('header') || document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Hamburger menu ────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu on nav-link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ── Reveal on scroll ──────────────
const revealEls = document.querySelectorAll(
  '.project-card, .impact-card, .gallery-item, .about-card, .value-tag, .hero-stats, .cta-content'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 4 === 1) el.classList.add('reveal-delay-1');
  if (i % 4 === 2) el.classList.add('reveal-delay-2');
  if (i % 4 === 3) el.classList.add('reveal-delay-3');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ── Active nav link highlight ─────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = navLinks.querySelector(`[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < top + height)
        ? 'var(--white)'
        : 'rgba(255,255,255,0.7)';
    }
  });
}, { passive: true });
