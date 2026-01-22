// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Log the data (in a real app, you'd send this to a server)
        console.log('Form submitted:', data);
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '#contact') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
