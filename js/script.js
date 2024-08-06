const toggle = document.querySelector(".toggle");
const Menu = document.querySelector(".menu");
const Link = document.querySelectorAll(".link");

toggle.addEventListener("click", mobileMenu);
Link.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    toggle.classList.toggle("active");
    Menu.classList.toggle("active");
}

function closeMenu() {
    toggle.classList.remove("active");
    Menu.classList.remove("active");
}