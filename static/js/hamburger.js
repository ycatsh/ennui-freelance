const hamburger = document.querySelector('.hamburger');
const navCenter = document.querySelector('.navbar-center');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navCenter.classList.toggle('active');
})

document.querySelectorAll('a.navbar-center').forEach(n => n.addEventListener('click'), () => {
    hamburger.classList.remove('active');
    navCenter.classList.remove('active');
})
