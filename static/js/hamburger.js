document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav_menu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function () {
        nav_menu.classList.toggle("active");
        nav_menu.classList.toggle("slide-down");
    });
});
