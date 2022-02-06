const hamburgerIcon = document.querySelector(".header-hamburger");
const hamburgerMenu = document.querySelector(".header-hamburger__menu");

hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("show");
    hamburgerIcon.classList.toggle("show");
    hamburgerIcon.classList.toggle("rotate");
});