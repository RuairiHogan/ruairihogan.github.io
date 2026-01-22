// Modern animations and interactive effects
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add animation to project cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = (index * 0.1) + 's';
    observer.observe(card);
  });

  // Button ripple effect
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 12px 30px rgba(255, 107, 53, 0.5)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });

//   // Header scroll effect
//   const header = document.querySelector('#header');
//   let lastScroll = 0;

//   window.addEventListener('scroll', function() {
//     const currentScroll = window.pageYOffset;

//     if (currentScroll > 100) {
//       header.style.boxShadow = '0 8px 30px rgba(255, 156, 44, 0.95)';
//       header.style.backgroundColor = 'rgba(26, 31, 58, 0.95)';
//     } else {
//       header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
//       header.style.backgroundColor = '';
//     }

//     lastScroll = currentScroll;
//   });

  // Add hover glow effect to links
  const links = document.querySelectorAll('a:not(.button)');
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      if (this.closest('#copyright')) {
        this.style.textShadow = '0 0 15px rgba(50, 200, 255, 0.7)';
      }
    });

    link.addEventListener('mouseleave', function() {
      this.style.textShadow = '';
    });
  });

  // Animate numbers/stats if present
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Counter animation on scroll
  const stats = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        const endValue = parseInt(entry.target.getAttribute('data-value'));
        animateValue(entry.target, 0, endValue, 2000);
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => statsObserver.observe(stat));

  // Parallax scroll effect for hero
  const hero = document.querySelector('#hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
  }

  // Add pulse animation on hover to social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.animation = 'pulse 0.6s ease-in-out';
    });

    link.addEventListener('animationend', function() {
      this.style.animation = '';
    });
  });

  // Console message for personal touch
  console.log(
    '%cWelcome to Ruairi Hogan\'s Portfolio!',
    'color: #32c8ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(50, 200, 255, 0.5);'
  );

});

// Loading animation
window.addEventListener('load', function() {
  document.body.classList.remove('is-preload');
});

// Prevent animation on preload
if (document.body.classList.contains('is-preload')) {
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none !important';
    el.style.transition = 'none !important';
  });
}
