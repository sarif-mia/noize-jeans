/** Small progressive enhancements for the shared navigation. */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('#menu__toggle');

  if (!menuToggle) {
    return;
  }

  const closeMenu = () => {
    menuToggle.checked = false;
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  menuToggle.addEventListener('change', () => {
    const isOpen = menuToggle.checked;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  document.querySelectorAll('.menu__item').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.checked) {
      closeMenu();
    }
  });
});
