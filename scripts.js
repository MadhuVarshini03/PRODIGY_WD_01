window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.getElementById('sign-in').addEventListener('click', function() {
    window.location.href = 'signin.html';
});

document.getElementById('sign-up').addEventListener('click', function() {
    window.location.href = 'signup.html';
});