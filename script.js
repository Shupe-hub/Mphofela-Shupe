document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add form submission alert (replace with real backend later)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message! (This is a demo—connect to a backend for real submissions.)');
});