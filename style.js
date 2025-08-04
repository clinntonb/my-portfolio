function showPage(pageId, event) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active-nav')); // Remove from all
    if (event && event.target) { // Ensure event and target exist
        event.target.classList.add('active-nav'); // Add to clicked link
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Set 'home' as the default active page and activate its nav link on initial load
    showPage('home');
    const homeNavLink = document.querySelector('a[onclick*="showPage(\'home\')"]');
    if (homeNavLink) {
        homeNavLink.classList.add('active-nav');
    }

    // Add skill card animations
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.style.animation = 'fadeInUp 0.8s ease forwards';
    });
});