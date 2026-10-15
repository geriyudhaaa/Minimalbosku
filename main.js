document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // User dropdown (Robust click, outside click, ESC key)
  const userMenu = document.querySelector('.user-menu');
  const userBtn = document.getElementById('userBtn');
  const userDropdown = document.getElementById('userDropdown');

  if (userBtn && userDropdown) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = userDropdown.classList.toggle('show');
      userBtn.setAttribute('aria-expanded', isOpen);
    });

    userDropdown.addEventListener('click', (e) => {
      // Let links navigate, but prevent dropdown closing early
      e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
      if (!userMenu || !userMenu.contains(e.target)) {
        userDropdown.classList.remove('show');
        userBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        userDropdown.classList.remove('show');
        userBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});