(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const form = document.querySelector('#contact-form');
  const interestField = form?.querySelector('[name="interest"]');
  const formNote = document.querySelector('#form-note');

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  document.querySelectorAll('[data-interest]').forEach((button) => {
    button.addEventListener('click', () => {
      if (interestField) interestField.value = button.dataset.interest || '';
    });
  });

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -45px' })
    : null;

  document.querySelectorAll('.reveal').forEach((element) => {
    if (observer) observer.observe(element);
    else element.classList.add('is-visible');
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const interest = String(data.get('interest') || '').trim();
    const message = String(data.get('message') || '').trim();

    const whatsappMessage = [
      'Olá, BiotecBrazil!',
      '',
      `Meu nome é ${name}.`,
      `E-mail: ${email}`,
      `Interesse: ${interest}`,
      '',
      'Mensagem:',
      message,
      '',
      'Enviei este contato pela nova landing page.'
    ].join('\n');

    const url = `https://wa.me/5511978512581?text=${encodeURIComponent(whatsappMessage)}`;
    formNote.textContent = 'Abrindo o WhatsApp com sua mensagem...';
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
