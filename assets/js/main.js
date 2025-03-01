// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Construct email link
            const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
            const mailtoLink = `mailto:dicmandilan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form
            this.reset();
            
            // Show success message
            alert('Thank you for your message! Your email client should open now.');
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // This would typically be an API call to a newsletter service
            console.log(`Subscribed email: ${email}`);
            
            // Reset form
            this.reset();
            
            // Show success message
            alert('Thank you for subscribing to the newsletter!');
        });
    }

    // Articles Search Functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            searchArticles();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchArticles();
            }
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            searchArticles();
        });
    }
    
    function searchArticles() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        
        // This would typically be handled by a back-end search
        console.log(`Searching for: ${searchTerm} in category: ${category}`);
        
        // For the static demo, we can add a message
        if (searchTerm || category !== 'all') {
            alert(`Search functionality would filter articles by "${searchTerm}" in category "${category}"`);
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });

    // Add active class to nav links based on current page
    function updateActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            // Remove active class from all links
            link.classList.remove('active');
            
            // Add active class to current page link
            if (linkPath === '/' && currentPath === '/') {
                link.classList.add('active');
            } else if (linkPath !== '/' && currentPath.startsWith(linkPath)) {
                link.classList.add('active');
            }
        });
    }
    
    updateActiveNavLink();

    // Add styles for mobile navigation when active
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: var(--bg-color);
                padding: 1.5rem;
                box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                z-index: 100;
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        }
    `;
    document.head.appendChild(style);
});