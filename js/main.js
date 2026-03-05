// Cursor personalizado
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Scroll reveal
const sections = document.querySelectorAll('.section');
const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('active');
    }
  });
};
window.addEventListener('scroll', reveal);
reveal();

// Animar barras al hacer scroll
const skillBars = document.querySelectorAll('.bar div');
const animateSkills = () => {
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.width;
    }
  });
};
window.addEventListener('scroll', animateSkills);
animateSkills();