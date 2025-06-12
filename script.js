document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');

    if (isOpen) {
      content.classList.remove('open');
      header.classList.remove('active');
    } else {
      // Close all others (optional UX choice)
      document.querySelectorAll('.collapsible-content.open').forEach(openContent => {
        openContent.previousElementSibling.classList.remove('active');
        openContent.classList.remove('open');
      });
      // Open this one
      content.classList.add('open');
      header.classList.add('active');
    }
  });
});

