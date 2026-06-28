// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// ===== CLOSE MENU ON LINK CLICK =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('.section, .hero');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== ANIMATE STATS ON SCROLL =====
const statNumbers = document.querySelectorAll('.stat h3, .stat-card h3');

const animateNumbers = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const text = el.textContent;
            if (!isNaN(text)) {
                const target = parseInt(text);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current) + '+';
                    }
                }, 30);
            }
        }
    });
};

const observer = new IntersectionObserver(animateNumbers, {
    threshold: 0.5
});

statNumbers.forEach(el => observer.observe(el));

// ===== ANIMATE LANGUAGE BARS =====
const langBars = document.querySelectorAll('.lang-progress');

const animateBars = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.style.width; // Trigger reflow
        }
    });
};

const barObserver = new IntersectionObserver(animateBars, {
    threshold: 0.5
});

langBars.forEach(bar => barObserver.observe(bar));

// ===== TYPING EFFECT FOR ROLES =====
const roles = [
    'Python Developer',
    'Java & JavaScript Developer',
    'Full Stack Developer',
    'Open Source Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.querySelector('.hero-roles');

// Optional: Add typing effect if you want
// I've kept it simple with the static display

console.log('🚀 Portfolio loaded successfully!');
console.log('👋 Hi there, I\'m Sparsh Shivhare!');
