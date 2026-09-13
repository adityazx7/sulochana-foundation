/**
 * SULOCHANA FOUNDATION - MULTI-PAGE INTERACTIVE SCRIPT
 * Handles active page nav highlighting across all pages and subpages, 
 * mobile hamburger menu, and contact form validation.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. ACTIVE PAGE NAVIGATION HIGHLIGHTING
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const projectSubpages = ['projects.html', 'healthcare.html', 'environment.html', 'education.html', 'social-welfare.html'];

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.remove('active');
    
    if (href === currentPath || 
       (currentPath === '' && href === 'index.html') ||
       (currentPath === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href === 'projects.html' && projectSubpages.includes(currentPath)) {
      link.classList.add('active');
    }
  });

  /* ==========================================================================
     2. MOBILE HAMBURGER MENU
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-links');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      const isOpen = navMenu.classList.contains('mobile-open');
      hamburgerBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // Sticky Navbar Shadow on scroll
  window.addEventListener('scroll', () => {
    if (navbar && window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else if (navbar) {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     3. CONTACT FORM VALIDATION (contact.html)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const successAlert = document.getElementById('form-success-message');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');

      let isValid = true;

      // Full Name
      if (!fullName.value.trim()) {
        showError(fullName, 'Please enter your full name.');
        isValid = false;
      } else {
        clearError(fullName);
      }

      // Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(email);
      }

      // Phone
      const phonePattern = /^[0-9+\-\s()]{7,15}$/;
      if (!phone.value.trim() || !phonePattern.test(phone.value.trim())) {
        showError(phone, 'Please enter a valid phone number.');
        isValid = false;
      } else {
        clearError(phone);
      }

      // Message
      if (!message.value.trim()) {
        showError(message, 'Please enter your message.');
        isValid = false;
      } else {
        clearError(message);
      }

      if (isValid) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

        setTimeout(() => {
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;

          if (successAlert) {
            successAlert.style.display = 'flex';
            successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            setTimeout(() => {
              successAlert.style.display = 'none';
            }, 6000);
          }
        }, 1200);
      }
    });
  }

  function showError(inputElement, message) {
    const formGroup = inputElement.closest('.form-group');
    if (formGroup) {
      formGroup.classList.add('error');
      const errorSpan = formGroup.querySelector('.error-msg');
      if (errorSpan) errorSpan.textContent = message;
    }
  }

  function clearError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    if (formGroup) {
      formGroup.classList.remove('error');
    }
  }

});
