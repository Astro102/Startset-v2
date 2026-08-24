// Mobile menu toggle
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navLinks = document.getElementById('nav-links');

if (mobileMenuIcon && navLinks) {
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scroll for anchor links (backup for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations - fade in sections
const sections = document.querySelectorAll('.section');

if (sections.length > 0) {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Active nav highlight on scroll
const navLinksArray = document.querySelectorAll('.nav-links li a');

if (navLinksArray.length > 0 && sections.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.style.background = 'transparent';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.background = 'rgba(157, 170, 248, 0.15)';
            }
        });
    });
}

// Quiz modal functionality
const quizModal = document.getElementById('quiz-modal');
const startQuizBtn = document.getElementById('start-quiz');
const closeModal = document.getElementById('close-modal');
const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.getElementById('quiz-result');

if (startQuizBtn && quizModal) {
    startQuizBtn.addEventListener('click', () => {
        quizModal.style.display = 'block';
    });
}

if (closeModal && quizModal) {
    closeModal.addEventListener('click', () => {
        quizModal.style.display = 'none';
        if (quizResult) quizResult.textContent = '';
    });
}

// Close modal when clicking outside
if (quizModal) {
    window.addEventListener('click', (e) => {
        if (e.target === quizModal) {
            quizModal.style.display = 'none';
            if (quizResult) quizResult.textContent = '';
        }
    });
}

// Quiz logic
if (quizOptions.length > 0 && quizResult) {
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (option.textContent === 'Mars') {
                quizResult.textContent = '✅ Correct! Mars is the Red Planet.';
                quizResult.style.color = '#4caf50';
            } else {
                quizResult.textContent = '❌ Not quite. Try again!';
                quizResult.style.color = '#ff4d4d';
            }
        });
    });
}