(function () {
  var header = document.querySelector('[data-header]');
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');
  var contactForm = document.querySelector('[data-contact-form]');
  var formMessage = document.querySelector('[data-form-message]');

  function syncHeader() {
    if (!header) {
      return;
    }
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  if (toggle && nav && header) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      header.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName !== 'A') {
        return;
      }
      nav.classList.remove('is-open');
      header.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (formMessage) {
        formMessage.textContent = 'Webフォーム送信は準備中です。お手数ですが、03-6883-9298 までお電話ください。';
      }
    });
  }
})();
