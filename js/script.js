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

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);