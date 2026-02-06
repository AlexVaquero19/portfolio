// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Mobile Menu Logic
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Dynamic Years of Experience Calculation
const yearsElement = document.getElementById('years-count');
const heroElement = document.getElementById('hero-years');
const startYear = 2021;
const currentYear = new Date().getFullYear()-1;
const experience = currentYear - startYear;
yearsElement.innerText = `${experience}+`;
heroElement.innerText = `${experience}+`;

// Toggle Mobile Menu
function toggleMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
}

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Sync Theme Icon on Load
function syncIcon() {
    if (document.documentElement.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Initialize theme from localStorage
syncIcon();

if(localStorage.theme === 'light') {
    document.documentElement.classList.toggle('dark');
}

// Theme Toggle Handler
themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
    syncIcon();
});

// Enhanced Scroll Animations with Intersection Observer
const observerOptions = { 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach((section, index) => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
    section.style.transitionDelay = `${index * 100}ms`;
    observer.observe(section);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Counter Animation for Stats
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = element.textContent.replace(/\d+/, target);
        }
    };
    
    // Only animate if not already animated
    if (!element.classList.contains('animated')) {
        element.classList.add('animated');
        updateCounter();
    }
}

// Add stat-number class to stats
document.querySelectorAll('section .text-4xl.md\\:text-5xl').forEach(stat => {
    if (/^\d+\+?%?$/.test(stat.textContent.trim())) {
        stat.classList.add('stat-number');
        observer.observe(stat);
    }
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function highlightNavigation() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-brand-500');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-brand-500');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Parallax Effect for Hero Section
let lastScrollY = window.scrollY;

function parallaxScroll() {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    lastScrollY = scrolled;
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(parallaxScroll);
});

// Add Ripple Effect to Buttons
document.querySelectorAll('a[class*="rounded-full"], button').forEach(button => {
    button.classList.add('btn-ripple');
});

// Lazy Load Images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('shadow-lg');
    } else {
        navbar.classList.add('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// Enhanced Card Hover Effects with 3D Tilt
document.querySelectorAll('.bento-card, .card-3d').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Skill Progress Bars Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.dataset.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Performance Optimization: Debounce Scroll Events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(highlightNavigation, 50));

// Tailwind Config
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Archivo', 'sans-serif'],
                display: ['DM Serif Display', 'serif'],
            },
            colors: {
                brand: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#4c979b',
                    600: '#366a7f',
                    700: '#2d5a6b',
                    800: '#1e3a4a',
                    900: '#0f1d2a',
                    950: '#020617',
                }
            },
            animation: {
                'gradient-shift': 'gradient-shift 3s ease infinite',
                'float': 'float 3s ease-in-out infinite',
                'ripple': 'ripple 0.6s ease-out',
            }
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Remove preload class to enable transitions
    document.body.classList.remove('preload');
    
    // Trigger initial animations
    highlightNavigation();
});