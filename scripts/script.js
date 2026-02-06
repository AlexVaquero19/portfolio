const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (document.documentElement.classList.contains('dark')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.theme = 'dark';
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.theme = 'light';
    }
});

// Simple Fade In Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
    observer.observe(section);
});

tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f0fdf4',
                    500: '#4c979b', // Emerald
                    600: '#366a7f',
                    950: '#020617', // Slate-950
                }
            }
        }
    }
}