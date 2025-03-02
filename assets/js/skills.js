// Skills Orbit JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    const skillsCore = document.querySelector('.skills-core');
    
    if (!skillItems.length || !skillsCore) return;
    
    // Add interaction for each skill
    skillItems.forEach(item => {
        // On hover effects
        item.addEventListener('mouseenter', function() {
            // Change the core text to the skill name
            const skillName = this.getAttribute('data-skill');
            if (skillsCore) {
                skillsCore.style.animationDuration = '1s';
                skillsCore.innerHTML = `<span class="core-text">${skillName}</span>`;
            }
            
            // Highlight this skill
            this.style.zIndex = '15';
        });
        
        item.addEventListener('mouseleave', function() {
            // Reset core text and animation
            if (skillsCore) {
                skillsCore.style.animationDuration = '2s';
                setTimeout(() => {
                    skillsCore.innerHTML = '<span class="core-text">SKILLS</span>';
                }, 300);
            }
            
            // Reset z-index
            this.style.zIndex = '5';
        });
    });
    
    // Add occasional "highlight" effect to random skills
    function randomSkillHighlight() {
        if (skillItems.length) {
            // Select a random skill
            const randomIndex = Math.floor(Math.random() * skillItems.length);
            const randomSkill = skillItems[randomIndex];
            
            // Define the highlight class if it doesn't exist
            if (!document.getElementById('highlight-style')) {
                const style = document.createElement('style');
                style.id = 'highlight-style';
                style.textContent = `
                    @keyframes highlightPulse {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(66, 99, 235, 0.7); }
                        50% { transform: scale(1.15); box-shadow: 0 0 20px 10px rgba(66, 99, 235, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(66, 99, 235, 0); }
                    }
                    
                    .highlight-pulse {
                        animation: highlightPulse 2s ease-in-out forwards !important;
                        z-index: 20 !important;
                    }
                `;
                document.head.appendChild(style);
            }
            
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