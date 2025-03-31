// Add this at the top of the file
function createColorBlobs() {
    const colors = ['#ff3366', '#4CAF50', '#2196F3', '#FFEB3B'];
    const container = document.createElement('div');
    container.className = 'background-effects';
    
    colors.forEach((color, index) => {
        const blob = document.createElement('div');
        blob.className = 'color-blob';
        blob.style.background = color;
        blob.style.width = `${200 + index * 50}px`;
        blob.style.height = blob.style.width;
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.top = `${Math.random() * 100}%`;
        blob.style.animationDelay = `${index * 2}s`;
        container.appendChild(blob);
    });
    
    document.body.insertBefore(container, document.querySelector('.thank-you-container'));
}

// Call this at the end of DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    
    createColorBlobs();
    
    // Add color-changing title effect
    const title = document.querySelector('h1');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        title.style.textShadow = `2px 2px 10px hsl(${hue}, 80%, 50%)`;
    }, 50);
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize confetti
    const defaults = {
        origin: { y: 0.7 },
        zIndex: 1051
    };

    // First burst
    confetti({
        ...defaults,
        particleCount: 100,
        spread: 55
    });

    // Fireworks effect
    setTimeout(() => {
        const end = Date.now() + 1000;
        const colors = ['#ff0000', '#ffa500', '#ffff00'];

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }, 500);

    // Button hover effect
    const button = document.querySelector('.home-button');
    button.addEventListener('mouseover', () => {
        confetti({
            particleCount: 30,
            spread: 60,
            origin: { y: 0.6 }
        });
    });

    // Social media hover effects
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });

    // Page load animation
    gsap.from('.thank-you-container', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});