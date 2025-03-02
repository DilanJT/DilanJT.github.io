// Skills Orbit Interaction JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.querySelector('.skills-container');
    const skillItems = document.querySelectorAll('.skill-item');
    const skillsCore = document.querySelector('.skills-core');
    
    if (!skillsContainer || !skillItems.length) return;
    
    // Pause orbital rotation on hover over any skill
    skillsContainer.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    skillsContainer.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
    
    // Add custom behaviors for each skill
    skillItems.forEach(item => {
        // Add slight randomized movement to each skill for more organic feel
        const randomDelay = Math.random() * 5;
        item.style.animationDelay = `${randomDelay}s`;
        
        // Add slight rotation to each skill icon
        const icon = item.querySelector('.skill-icon i');
        if (icon) {
            icon.style.transition = 'transform 0.5s ease';
        }
        
        // On hover effects
        item.addEventListener('mouseenter', function() {
            // Scale up the skill
            this.style.transform = this.style.transform.replace('scale(1)', '') + ' scale(1.2)';
            
            // Make core pulse faster
            if (skillsCore) {
                skillsCore.style.animationDuration = '1s';
            }
            
            // Rotate the icon slightly
            if (icon) {
                icon.style.transform = 'rotate(10deg) scale(1.2)';
            }
            
            // Add ripple effect to the skill core
            const skillName = this.getAttribute('data-skill');
            if (skillsCore) {
                skillsCore.innerHTML = `<span class="core-text">${skillName}</span>`;
            }
        });
        
        item.addEventListener('mouseleave', function() {
            // Reset icon rotation
            if (icon) {
                icon.style.transform = 'rotate(0) scale(1)';
            }
            
            // Reset core pulse rate
            if (skillsCore) {
                skillsCore.style.animationDuration = '2s';
                setTimeout(() => {
                    skillsCore.innerHTML = '<span class="core-text">Skills</span>';
                }, 500);
            }
        });
    });
    
    // Add occasional "highlight" effect to random skills
    function randomSkillHighlight() {
        if (skillItems.length) {
            // Select a random skill
            const randomIndex = Math.floor(Math.random() * skillItems.length);
            const randomSkill = skillItems[randomIndex];
            
            // Add highlight class
            randomSkill.classList.add('highlight-pulse');
            
            // Remove highlight after animation
            setTimeout(() => {
                randomSkill.classList.remove('highlight-pulse');
            }, 2000);
        }
        
        // Schedule next highlight
        const nextTime = 5000 + Math.random() * 10000; // Between 5-15 seconds
        setTimeout(randomSkillHighlight, nextTime);
    }
    
    // Start random highlights after a delay
    setTimeout(randomSkillHighlight, 3000);
});