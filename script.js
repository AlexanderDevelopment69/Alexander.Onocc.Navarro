const sidebar = document.getElementById('sidebar');
const btnToggle = document.getElementById('btnToggle');
const navLinks = document.querySelectorAll('.nav-link');

btnToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// Cambiar clase active en links y cerrar sidebar en móvil
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    if(window.innerWidth <= 900) {
      sidebar.classList.add('collapsed');
    }
  });
});
