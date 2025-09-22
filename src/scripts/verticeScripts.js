// Scripts originais da página index-vertice.html reintegrados

// Função para inicializar todos os scripts quando o DOM estiver carregado
export const initializeVerticeScripts = () => {
  // Loading Screen
  const initLoadingScreen = () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 2000);
    }
  };

  // Header Scroll Effect
  const initHeaderScrollEffect = () => {
    const header = document.querySelector('header');
    const progressBar = document.querySelector('.progress-bar');
    
    if (header && progressBar) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        // Progress bar
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = Math.floor(scrolled / totalDocScrollLength * 100);
        
        progressBar.style.width = scrollPostion + '%';
      });
    }
  };

  // Smooth Scroll for Navigation Links
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // Mobile Menu Toggle
  const initMobileMenu = () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
      });
      
      // Close menu when clicking on links
      document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
        });
      });
    }
  };

  // Intersection Observer for Animations
  const initIntersectionObserver = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Trigger counter animation if element has counters
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            animateCounter(counter);
          });
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .card, .feature-card, .testimonial-card').forEach(el => {
      observer.observe(el);
    });
  };

  // Counter Animation
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  };

  // Countdown Timer
  const initCountdownTimer = () => {
    const countdownElements = {
      days: document.querySelector('.countdown-days'),
      hours: document.querySelector('.countdown-hours'),
      minutes: document.querySelector('.countdown-minutes'),
      seconds: document.querySelector('.countdown-seconds')
    };

    if (Object.values(countdownElements).some(el => el)) {
      const updateCountdown = () => {
        const now = new Date().getTime();
        const targetDate = now + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (32 * 60 * 1000) + (45 * 1000);
        const distance = targetDate - now;

        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          if (countdownElements.days) countdownElements.days.textContent = days.toString().padStart(2, '0');
          if (countdownElements.hours) countdownElements.hours.textContent = hours.toString().padStart(2, '0');
          if (countdownElements.minutes) countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
          if (countdownElements.seconds) countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');
        }
      };

      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  };

  // Floating Elements Animation
  const initFloatingElements = () => {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
      const delay = index * 0.5;
      const duration = 3 + (index * 0.5);
      
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = `${duration}s`;
    });
  };

  // Parallax Effect
  const initParallaxEffect = () => {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  };

  // Form Validation and Submission
  const initFormHandling = () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
          } else {
            input.classList.remove('error');
          }
        });
        
        // Email validation
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (input.value && !emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('error');
          }
        });
        
        if (isValid) {
          // Simulate form submission
          const submitBtn = form.querySelector('button[type="submit"]');
          const originalText = submitBtn.textContent;
          
          submitBtn.textContent = 'Enviando...';
          submitBtn.disabled = true;
          
          setTimeout(() => {
            submitBtn.textContent = 'Enviado!';
            setTimeout(() => {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
              form.reset();
            }, 2000);
          }, 1000);
        }
      });
    });
  };

  // Video Player Controls
  const initVideoControls = () => {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
      const video = container.querySelector('video');
      const playBtn = container.querySelector('.play-btn');
      
      if (video && playBtn) {
        playBtn.addEventListener('click', () => {
          if (video.paused) {
            video.play();
            playBtn.style.display = 'none';
          } else {
            video.pause();
            playBtn.style.display = 'block';
          }
        });
        
        video.addEventListener('click', () => {
          if (video.paused) {
            video.play();
            playBtn.style.display = 'none';
          } else {
            video.pause();
            playBtn.style.display = 'block';
          }
        });
        
        video.addEventListener('ended', () => {
          playBtn.style.display = 'block';
        });
      }
    });
  };

  // Tooltip Initialization
  const initTooltips = () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        setTimeout(() => tooltip.classList.add('show'), 10);
      });
      
      element.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  };

  // Initialize all functions
  initLoadingScreen();
  initHeaderScrollEffect();
  initSmoothScroll();
  initMobileMenu();
  initIntersectionObserver();
  initCountdownTimer();
  initFloatingElements();
  initParallaxEffect();
  initFormHandling();
  initVideoControls();
  initTooltips();
};

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeVerticeScripts);
} else {
  initializeVerticeScripts();
}