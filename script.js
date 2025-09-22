// Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden') === false;
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Scroll progress indicator
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    scrollProgress.style.transform = `scaleX(${scrollPercent})`;
});

// Navbar scroll effect (transparent to solid)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.remove('transparent-header');
        navbar.classList.add('glass-morphism');
        navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        navbar.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
        
        // Update text colors for solid header
        const logoText = navbar.querySelector('.text-slate-800');
        const navLinks = navbar.querySelectorAll('.text-slate-600');
        if (logoText) logoText.style.color = '#1e293b';
        navLinks.forEach(link => link.style.color = '#475569');
    } else {
        navbar.classList.remove('glass-morphism');
        navbar.classList.add('transparent-header');
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
        
        // Update text colors for transparent header
        const logoText = navbar.querySelector('.text-slate-800');
        const navLinks = navbar.querySelectorAll('.text-slate-600');
        if (logoText) logoText.style.color = 'black';
        navLinks.forEach(link => link.style.color = 'black');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Show a small inline thanks message when redirected back with #thank-you
(function(){
    if (window.location.hash === '#thank-you') {
        const thanks = document.getElementById('form-thanks');
        if (thanks) {
            thanks.classList.remove('hidden');
        }
        // Clean the hash after showing the message
        history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
})();

// Intercept secondary contact form submit and send via AJAX to prevent leaving the site
(function(){
    const form = document.getElementById('contact-form-secondary');
    if (!form) return;
    const thanks = document.getElementById('form-thanks-secondary');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
                submitBtn.style.cursor = 'not-allowed';
            }

            const formData = new FormData(form);
            const endpoint = 'https://formsubmit.co/ajax/partner@quantfive.in';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (!response.ok) throw new Error('Network response was not ok');

            // Show inline thank you message
            if (thanks) {
                thanks.classList.remove('hidden');
                thanks.textContent = 'Thank you! We will reach out to you shortly.';
            }

            form.reset();

            // Show thank you message
            if (thanks) {
                thanks.classList.remove('hidden');
                setTimeout(() => {
                    thanks.classList.add('hidden');
                }, 5000);
            }
        } catch (err) {
            // Fallback: reveal a basic message and keep user on site
            if (thanks) {
                thanks.classList.remove('hidden');
                thanks.textContent = 'Thanks! Your message was received.';
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '';
                submitBtn.style.cursor = '';
            }
        }
    });
})();

// CTA button functionality
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Explore Innovation')) {
        button.addEventListener('click', () => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        });
    } else if (button.textContent.includes('Book Consultation')) {
        button.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Book consultation button functionality
document.querySelectorAll('.book-consultation-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// Progress ring animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const progressRings = entry.target.querySelectorAll('.progress-ring circle:last-child');
            progressRings.forEach((ring, index) => {
                setTimeout(() => {
                    ring.classList.add('animate-progress');
                }, index * 200);
            });
            observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

// Observe hero section for progress rings
const heroSection = document.querySelector('#home');
if (heroSection) {
    observer.observe(heroSection);
}

// Typing animation restart
setInterval(() => {
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        typingElement.style.animation = 'none';
        setTimeout(() => {
            typingElement.style.animation = 'typing 4s steps(40, end), blink-caret 0.75s step-end infinite';
        }, 100);
    }
}, 8000);

// Enhanced card hover effects
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service icon interactions
document.querySelectorAll('.service-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Mobile-specific optimizations
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Optimize Cal.com calendar for mobile
        const calContainer = document.getElementById('my-cal-inline-quickchat');
        if (calContainer) {
            calContainer.style.height = '400px';
            calContainer.style.overflow = 'auto';
        }
        
        // Ensure mobile navigation is properly styled
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('mobile-nav');
        }
    }
}

// Enhanced mobile experience
function enhanceMobileExperience() {
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('button, .cta-button, .border-gradient');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Run mobile optimizations on load and resize
window.addEventListener('load', () => {
    optimizeForMobile();
    enhanceMobileExperience();
});
window.addEventListener('resize', () => {
    optimizeForMobile();
});

// Testimonials Carousel Functionality
const testimonialsCarousel = {
    container: document.querySelector('.testimonials-carousel-container'),
    slides: document.querySelectorAll('.testimonials-carousel-slide'),
    dots: document.querySelectorAll('.testimonials-carousel-dot'),
    prevBtn: document.querySelector('.testimonials-carousel-prev'),
    nextBtn: document.querySelector('.testimonials-carousel-next'),
    currentSlide: 0,
    totalSlides: 3,

    init() {
        if (!this.container) return;
        
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // Add dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Add touch/swipe support for mobile
        let startX = 0;
        let endX = 0;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                this.nextSlide(); // Swipe left
            } else if (endX - startX > 50) {
                this.prevSlide(); // Swipe right
            }
        });

        this.updateCarousel();
    },

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    },

    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.updateCarousel();
    },

    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    },

    updateCarousel() {
        // Calculate translateX based on slide width (100% for each slide)
        const translateX = -this.currentSlide * 100;
        this.container.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
            dot.classList.toggle('bg-blue-500', index === this.currentSlide);
            dot.classList.toggle('bg-slate-300', index !== this.currentSlide);
        });
    }
};
testimonialsCarousel.init();

// Handle Explore Details button clicks
document.querySelectorAll('.explore-details-btn').forEach(button => {
        button.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        
        // Scroll to the contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            setTimeout(() => {
                const projectTypeSelect = document.querySelector('#contact-form-secondary select[name="project_type"]');
                if (projectTypeSelect) {
                    // Map service names to select options
                    const serviceMap = {
                        'Hospitals': 'Hospitals',
                        'IVF Clinic Excellence': 'ivf',
                        'Operations & Admin': 'operations',
                        'Growth Strategy': 'growth',
                        'Digital Transformation': 'digital'
                    };
                    
                    if (serviceMap[service]) {
                        projectTypeSelect.value = serviceMap[service];
                    }
                }
            }, 500);
        }
    });
});

// Also handle all buttons with "Explore Details" text
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Explore Details')) {
        button.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
