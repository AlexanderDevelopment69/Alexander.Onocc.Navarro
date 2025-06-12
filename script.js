// Smooth scroll and active menu highlight
const links = document.querySelectorAll('.menu-link');
const sections = [...document.querySelectorAll('.section')];
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === id);
        if(link.classList.contains('active')) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  });
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
