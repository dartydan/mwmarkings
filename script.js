// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('service-card')) {
                entry.target.style.transitionDelay = `${entry.target.dataset.delay}s`;
            }
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Add delay to service cards animation
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.dataset.delay = index * 0.1;
        observer.observe(card);
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update header opacity
    const scrolled = window.scrollY;
    const maxScroll = 200;
    const opacity = Math.min(0.98, 0.8 + (scrolled / maxScroll) * 0.18);
    header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
});

// Smooth scroll for navigation links
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

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
});

// Form handling
const form = document.querySelector('.contact-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = form.querySelector('.submit-button');
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    // Simulate form submission (replace with actual form handling)
    await new Promise(resolve => setTimeout(resolve, 1500));

    submitButton.classList.remove('loading');
    submitButton.disabled = false;
    submitButton.textContent = 'Message Sent!';
    
    setTimeout(() => {
        submitButton.textContent = 'Request Quote';
        form.reset();
    }, 3000);
}); 