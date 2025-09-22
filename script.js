// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.problem-item, .benefit-item, .testimonial, .bonus-item, .guarantee-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    if (number && !stat.classList.contains('animated')) {
                        stat.classList.add('animated');
                        animateCounter(stat, number);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    const dashboardStats = document.querySelector('.dashboard-stats');
    if (dashboardStats) {
        statsObserver.observe(dashboardStats);
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Typing effect for headline
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Add hover effects to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click tracking for CTA buttons
    const mainCTA = document.getElementById('main-cta');
    if (mainCTA) {
        mainCTA.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add a pulse effect
            this.style.animation = 'pulse 0.3s ease';
            
            // Simulate form opening or redirect
            setTimeout(() => {
                alert('Redirecionando para o formulário de inscrição...\n\nEm uma implementação real, aqui você redirecionaria para uma página de checkout ou abriria um modal de inscrição.');
            }, 300);
            
            // Reset animation
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    }
    
    // Add floating animation to dashboard preview
    const dashboardPreview = document.querySelector('.dashboard-preview');
    if (dashboardPreview) {
        setInterval(() => {
            dashboardPreview.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                dashboardPreview.style.transform = 'translateY(0)';
            }, 1000);
        }, 3000);
    }
    
    // Add progressive loading effect to testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Mobile menu toggle (if needed)
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('.nav');
            const header = document.querySelector('.header .container');
            
            if (!document.querySelector('.mobile-menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.className = 'mobile-menu-toggle';
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                menuToggle.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #333;
                    cursor: pointer;
                    display: block;
                `;
                
                header.appendChild(menuToggle);
                
                menuToggle.addEventListener('click', () => {
                    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                    nav.style.position = 'absolute';
                    nav.style.top = '100%';
                    nav.style.left = '0';
                    nav.style.right = '0';
                    nav.style.background = 'white';
                    nav.style.flexDirection = 'column';
                    nav.style.padding = '1rem';
                    nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                });
            }
        }
    };
    
    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
    
    // Add scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };
    
    createScrollProgress();
    
    // Add loading animation
    const addLoadingAnimation = () => {
        const body = document.body;
        body.style.opacity = '0';
        body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            body.style.opacity = '1';
        }, 100);
    };
    
    addLoadingAnimation();
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .mobile-menu-toggle {
        display: none !important;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block !important;
        }
    }
`;
document.head.appendChild(style);