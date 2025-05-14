document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        // Calculate scroll percentage (0 to 1)
        const scrollPercent = Math.min(
            window.scrollY / (document.documentElement.scrollHeight - window.innerHeight),
            1
        );
        
        // Create vertical gradient that moves up based on scroll position
        header.style.background = `linear-gradient(
            to top,
            var(--color-dark-alt) ${scrollPercent * 100}%,
            var(--color-dark) ${scrollPercent * 100}%
        )`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});