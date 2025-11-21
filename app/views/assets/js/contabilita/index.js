const quickLinks = document.querySelectorAll('[href^="/contabilita/"][class~=btn]');

quickLinks.forEach((link) => {
  link.addEventListener('click', () => {
    console.debug('Navigating to', link.getAttribute('href'));
  });
});
