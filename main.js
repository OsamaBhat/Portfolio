// =========================================
// MOBILE MENU TOGGLE
// =========================================
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');

    // Add animation to menu button
    menuBtn.classList.add('hover-shake');
    setTimeout(() => menuBtn.classList.remove('hover-shake'), 500);
});

// Close menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

// =========================================
// SCROLL-TRIGGERED REVEAL ANIMATIONS
// =========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// =========================================
// SKILL TAG ANIMATIONS
// =========================================
function initSkillTagAnimations() {
    const skillTags = document.querySelectorAll('#skills .flex-wrap span');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tags = entry.target.querySelectorAll('span');
                tags.forEach((tag, index) => {
                    tag.classList.add('skill-tag');
                    tag.style.setProperty('--delay', `${index * 0.1}s`);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('#skills .flex-wrap').forEach(container => {
        observer.observe(container);
    });
}

// =========================================
// HERO SECTION ANIMATIONS
// =========================================
function initHeroAnimations() {
    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, index) => {
        el.style.setProperty('--delay', `${0.2 + index * 0.15}s`);
    });

    // Add stamp animation to "Available for work" badge
    const badge = document.querySelector('section .transform.rotate-2');
    if (badge) {
        badge.classList.add('stamp-animate', 'float-badge');
    }

    // Add animation to hero image
    const heroImage = document.querySelector('section img[alt="Osama Umar"]');
    if (heroImage) {
        heroImage.classList.add('hero-image-animate');
    }
}

// =========================================
// TIMELINE/EXPERIENCE ANIMATIONS
// =========================================
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('#experience .space-y-8 > div');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll(':scope > div');
                items.forEach((item, index) => {
                    item.classList.add('timeline-item');
                    item.style.setProperty('--delay', `${index * 0.2}s`);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const experienceSection = document.querySelector('#experience .space-y-8');
    if (experienceSection) {
        observer.observe(experienceSection);
    }
}

// =========================================
// CARD HOVER EFFECTS
// =========================================
function initCardEffects() {
    // Add lift effect to skill cards
    document.querySelectorAll('#skills .border-4').forEach(card => {
        card.classList.add('card-lift');
    });

    // Add lift effect to project cards
    document.querySelectorAll('#projects .group').forEach(card => {
        card.classList.add('card-lift');
    });

    // Add hover effects to experience cards
    document.querySelectorAll('#experience .bg-white').forEach(card => {
        card.classList.add('shadow-expand');
    });
}

// =========================================
// ADD REVEAL CLASSES TO SECTIONS
// =========================================
function addRevealClasses() {
    // About section
    const aboutBox = document.querySelector('#about .bg-white');
    if (aboutBox) aboutBox.classList.add('reveal-scale');

    // Skills section heading
    const skillsHeading = document.querySelector('#skills h2');
    if (skillsHeading) skillsHeading.classList.add('reveal');

    // Skill cards
    document.querySelectorAll('#skills .border-4').forEach((card, index) => {
        card.classList.add('reveal', `stagger-${index + 1}`);
    });

    // Experience section
    const expHeading = document.querySelector('#experience h2');
    if (expHeading) expHeading.classList.add('reveal-rotate');

    // Projects section
    const projectsHeading = document.querySelector('#projects h2');
    if (projectsHeading) projectsHeading.classList.add('reveal');

    document.querySelectorAll('#projects .group').forEach((card, index) => {
        card.classList.add(index % 2 === 0 ? 'reveal-left' : 'reveal-right', `stagger-${index + 1}`);
    });

    // Contact section
    const contactBox = document.querySelector('#contact .bg-white');
    if (contactBox) contactBox.classList.add('reveal-scale');
}

// =========================================
// BUTTON EFFECTS
// =========================================
function initButtonEffects() {
    // Add neo-press effect to all buttons
    document.querySelectorAll('button, a.bg-neo-green, a.bg-white').forEach(btn => {
        btn.classList.add('neo-press');
    });

    // Add ripple effect to submit button
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.classList.add('btn-ripple');
    }

    // Add glitch effect to section headings
    document.querySelectorAll('h2').forEach(heading => {
        heading.classList.add('glitch');
    });
}

// =========================================
// FORM INPUT ANIMATIONS
// =========================================
function initFormAnimations() {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.classList.add('input-animate');

        // Add focus ring animation
        input.addEventListener('focus', () => {
            input.parentElement?.classList.add('input-focused');
        });

        input.addEventListener('blur', () => {
            input.parentElement?.classList.remove('input-focused');
        });
    });
}

// =========================================
// NAV LINKS HOVER EFFECT
// =========================================
function initNavAnimations() {
    const navLinks = document.querySelectorAll('nav .hidden.md\\:flex a');

    navLinks.forEach(link => {
        link.classList.add('underline-grow');
    });
}

// =========================================
// SOCIAL LINKS ANIMATION
// =========================================
function initSocialAnimations() {
    const socialLinks = document.querySelectorAll('#contact .flex-wrap.justify-center a');

    socialLinks.forEach((link, index) => {
        link.classList.add('reveal', `stagger-${index + 1}`);
        link.classList.add('hover-bounce');
    });
}

// =========================================
// MARQUEE PAUSE ON HOVER
// =========================================
function initMarqueeEffects() {
    const marquee = document.querySelector('.animate-marquee');
    if (marquee) {
        const parent = marquee.parentElement;
        parent.addEventListener('mouseenter', () => {
            marquee.style.animationPlayState = 'paused';
        });
        parent.addEventListener('mouseleave', () => {
            marquee.style.animationPlayState = 'running';
        });
    }
}

// =========================================
// DECORATIVE PATTERN ANIMATION
// =========================================
function initDecorativeAnimations() {
    const patternBg = document.querySelector('.absolute.inset-0.opacity-10');
    if (patternBg) {
        patternBg.classList.add('animated-dots');
    }
}

// =========================================
// SMOOTH SCROLL WITH ANIMATION
// =========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Add a brief highlight effect
                targetElement.style.transition = 'background-color 0.5s';

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =========================================
// PARALLAX SCROLL EFFECT (SUBTLE)
// =========================================
function initParallaxEffect() {
    const heroImage = document.querySelector('section img[alt="Osama Umar"]');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (heroImage && scrolled < 600) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    }, { passive: true });
}

// =========================================
// CURSOR TRAIL EFFECT (OPTIONAL - SUBTLE)
// =========================================
function initCursorEffects() {
    // Add subtle cursor effects on hero section
    const heroSection = document.querySelector('section.min-h-\\[80vh\\]');

    if (heroSection && window.innerWidth > 768) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            const heroImage = heroSection.querySelector('img');
            if (heroImage) {
                heroImage.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    }
}

// =========================================
// PAGE LOAD ANIMATION
// =========================================
function initPageLoadAnimation() {
    // Create page transition overlay
    const overlay = document.createElement('div');
    overlay.classList.add('page-transition');
    document.body.prepend(overlay);

    // Remove overlay after animation
    setTimeout(() => {
        overlay.remove();
    }, 1000);
}

// =========================================
// COUNTER ANIMATION FOR STATS (if any)
// =========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// =========================================
// INITIALIZE ALL ANIMATIONS
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // Page load effect
    initPageLoadAnimation();

    // Add reveal classes first
    addRevealClasses();

    // Initialize all animation systems
    setTimeout(() => {
        initScrollReveal();
        initHeroAnimations();
        initSkillTagAnimations();
        initTimelineAnimations();
        initCardEffects();
        initButtonEffects();
        initFormAnimations();
        initNavAnimations();
        initSocialAnimations();
        initMarqueeEffects();
        initDecorativeAnimations();
        initSmoothScroll();
        initParallaxEffect();
        initCursorEffects();
    }, 100);
});

// =========================================
// HANDLE REDUCED MOTION PREFERENCE
// =========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable most animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}
