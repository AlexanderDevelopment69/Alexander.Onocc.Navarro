// Navegación suave + activar el link correspondiente
const links = document.querySelectorAll('.menu-link');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Quitar active a todos y poner solo al clickeado
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Cambiar active según scroll (opcional)
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY || window.pageYOffset;
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= scrollPos + 100 &&
      section.offsetTop + section.offsetHeight > scrollPos + 100
    ) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
