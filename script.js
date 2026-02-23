(function () {
  'use strict';

  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var newsletterForm = document.getElementById('newsletterForm');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
      document.body.style.overflow = navLinks.classList.contains('is-open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('.newsletter-input');
      var email = input && input.value ? input.value.trim() : '';
      if (email) {
        console.log('Newsletter signup:', email);
        if (input) input.value = '';
        alert('Grazie! Controlla la tua email per la guida.');
      }
    });
  }
})();
