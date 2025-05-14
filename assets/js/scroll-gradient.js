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