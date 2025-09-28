document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    alert(`Thank you for your message, ${name}! (Demo: Connect to a backend for real submissions.)`);
    this.reset();
});

// Modal functionality for Java skill
const javaSkill = document.querySelector('.skill-item[data-skill="java"]');
const modal = document.getElementById('java-modal');
const closeModal = document.querySelector('.modal-close');

javaSkill.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});