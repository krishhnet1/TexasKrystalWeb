/* ========================================
   TEXAS KRYSTAL — Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── MOBILE MENU ──
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    const setMenu = (open) => {
      toggle.classList.toggle('open', open);
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setMenu(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // ── CONTACT FORM (Web3Forms) ──
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      const status = document.getElementById('formStatus');
      if (status) status.textContent = '';
      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const formData = new FormData(form);
        const resp = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });
        const data = await resp.json();

        if (data.success) {
          btn.textContent = '✓ Message Sent!';
          btn.style.background = '#2C6A4A';
          form.reset();
          if (status) status.textContent = "Thanks. We'll respond within 24 hours.";
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
          }, 3000);
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        btn.textContent = 'Error — Try Again';
        btn.style.background = '#A63A24';
        btn.disabled = false;
        if (status) status.textContent = "Your message didn't send. Please try again, call 832-224-5918, or email admin@texaskrystal.com.";
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 3000);
      }
    });
  }

  // ── ACTIVE NAV LINK ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
