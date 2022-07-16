(() => {
  const refs = {
    menuBtnRef: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.menuBtnRef.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded = refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    refs.menuBtnRef.setAttribute('aria-expanded', !expanded);

    refs.menuBtnRef.classList.toggle('is-open');
    refs.menu.classList.toggle('is-open');
    
    refs.body.classList.toggle('no-scroll');
  }
})();
