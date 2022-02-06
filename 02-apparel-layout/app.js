const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".menu");

hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("change");
    hamburgerIcon.classList.toggle("change");
});