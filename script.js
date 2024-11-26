document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");

    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 300);
    });
});

function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}
