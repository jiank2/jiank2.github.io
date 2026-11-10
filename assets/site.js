(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    document.addEventListener('keydown', (event) => { if(event.key === 'Escape' && nav.classList.contains('open')) {closeMenu(); toggle.focus();} });
    nav.addEventListener('click', (event) => { if(event.target.closest('a')) closeMenu(); });
    window.matchMedia('(min-width: 791px)').addEventListener('change', event => { if(event.matches) closeMenu(); });
  }
})();
