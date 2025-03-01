// Theme Toggle JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // Initialize the theme based on saved preference or system preference
    if (savedTheme) {
        // Apply saved theme
        if (savedTheme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeSwitch.checked = true;
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            themeSwitch.checked = false;
        }
    } else {
        // Check system preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (prefersDarkMode) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeSwitch.checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            themeSwitch.checked = false;
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Toggle theme when switch is clicked
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            
            // Animate transition
            animateThemeTransition('dark');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            
            // Animate transition
            animateThemeTransition('light');
        }
    });
    
    // Theme transition animation
    function animateThemeTransition(theme) {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'theme-transition-ripple';
        
        // Position the ripple in the center of the screen
        const posX = window.innerWidth / 2;
        const posY = window.innerHeight / 2;
        
        ripple.style.cssText = `
            position: fixed;
            top: ${posY}px;
            left: ${posX}px;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.5;
            z-index: 9999;
            background-color: ${theme === 'dark' ? '#121212' : '#ffffff'};
            transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
        `;
        
        document.body.appendChild(ripple);
        
        // Trigger animation
        setTimeout(() => {
            const diagonal = Math.sqrt(
                Math.pow(Math.max(posX, window.innerWidth - posX) * 2, 2) +
                Math.pow(Math.max(posY, window.innerHeight - posY) * 2, 2)
            );
            
            ripple.style.transform = `translate(-50%, -50%) scale(${diagonal / 5})`;
            ripple.style.opacity = '0';
        }, 50);
        
        // Remove ripple element after animation
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 1000);
    }
    
    // Add necessary styles for the ripple animation
    const style = document.createElement('style');
    style.textContent = `
        .light-mode {
            transition: background-color 0.5s ease, color 0.5s ease;
        }
        
        .dark-mode {
            transition: background-color 0.5s ease, color 0.5s ease;
        }
        
        .theme-transition-ripple {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.5;
            transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), opacity 1s ease;
        }
    `;
    document.head.appendChild(style);
});