// Timeline JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Timeline scroll interactions
    const timelineProgressBar = document.querySelector('.timeline-progress');
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const timelineYears = document.querySelectorAll('.timeline-year');
    const timelineNavItems = document.querySelectorAll('.timeline-nav-item');
    
    // Set initial values
    let lastScrollTop = 0;
    let ticking = false;
    
    // Handle timeline navigation click
    timelineNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Remove active class from all nav items
                timelineNavItems.forEach(navItem => {
                    navItem.classList.remove('active');
                });
                
                // Add active class to clicked nav item
                this.classList.add('active');
                
                // Scroll to target year section
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize timeline events visibility
    initTimelineEvents();
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateTimelineProgress();
                updateTimelineEventsVisibility();
                updateActiveNavItem();
                ticking = false;
            });
            
            ticking = true;
        }
    });
    
    // Update progress bar based on scroll position
    function updateTimelineProgress() {
        if (!timelineProgressBar) return;
        
        const timelineSection = document.querySelector('.interactive-timeline');
        if (!timelineSection) return;
        
        const sectionTop = timelineSection.offsetTop;
        const sectionHeight = timelineSection.offsetHeight;
        const scrollPosition = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress percentage
        let scrollPercentage = 0;
        
        if (scrollPosition > sectionTop) {
            const availableScroll = sectionHeight - viewportHeight;
            const currentScroll = scrollPosition - sectionTop;
            scrollPercentage = Math.min((currentScroll / availableScroll) * 100, 100);
        }
        
        // Update progress bar height
        timelineProgressBar.style.height = `${scrollPercentage}%`;
    }
    
    // Initialize timeline events (show events in viewport on load)
    function initTimelineEvents() {
        if (!timelineEvents.length) return;
        
        timelineEvents.forEach(event => {
            if (isElementInViewport(event)) {
                event.classList.add('visible');
            }
        });
    }
    
    // Update timeline events visibility based on scroll position
    function updateTimelineEventsVisibility() {
        if (!timelineEvents.length) return;
        
        timelineEvents.forEach(event => {
            if (isElementPartiallyInViewport(event, 0.25)) {
                event.classList.add('visible');
            }
        });
    }
    
    // Update active navigation item based on current year in view
    function updateActiveNavItem() {
        if (!timelineYears.length || !timelineNavItems.length) return;
        
        let activeYearId = null;
        
        // Find the current year in view
        timelineYears.forEach(year => {
            if (isElementPartiallyInViewport(year, 0.3)) {
                activeYearId = year.id;
            }
        });
        
        if (activeYearId) {
            // Remove active class from all nav items
            timelineNavItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to current nav item
            const activeNavItem = document.querySelector(`.timeline-nav-item[href="#${activeYearId}"]`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }
        }
    }
    
    // Helper: Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Helper: Check if element is partially in viewport (with threshold)
    function isElementPartiallyInViewport(el, threshold = 0) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const elementHeight = rect.bottom - rect.top;
        
        // Element is considered in viewport if specified threshold of its height is visible
        return visibleHeight > elementHeight * threshold;
    }
    
    // Add parallax effect to timeline events
    function addParallaxEffect() {
        const yearMarkers = document.querySelectorAll('.year-marker');
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            yearMarkers.forEach(marker => {
                const speed = 0.05;
                const yPos = -(scrollPosition * speed);
                marker.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Initialize parallax effect
    addParallaxEffect();
});