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

// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    console.log('Form Data:', formData);
    
    // Show success message
    alert('धन्यवाद! आपका संदेश सफलतापूर्वक भेजा जा चुका है।\nहम जल्द ही आपसे संपर्क करेंगे।');
    
    // Reset form
    this.reset();
});

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .info-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mobile menu toggle
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Add responsive behavior
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        // Mobile optimizations if needed
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('PRK Jan Sewa Kendra Website Loaded Successfully!');
    
    // Add any initialization code here
});

// Utility function to format phone numbers
function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, '$1-$2-$3');
}

// Log website info
console.log('%cPRK Computer Center Jan Sewa Kendra', 'font-size: 20px; font-weight: bold; color: #1e40af;');
console.log('Location: Haji Market, Tambaur, Sitapur, UP 261208');
console.log('Phone: 9118663177');
console.log('Email: buddhilal9118@gmail.com');
