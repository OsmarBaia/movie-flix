

const toggleNavMenu = document.querySelector(".toggle-nav");
const toggleNavMenuIcon = document.querySelector(".toggle-nav i");
const navMenuContainer = document.querySelector("nav");

function toggleMenu() {
    navMenuContainer.classList.toggle("active");
    toggleNavMenuIcon.classList.toggle("bx-menu");
    toggleNavMenuIcon.classList.toggle("bx-x");
}

toggleNavMenu.addEventListener("click", toggleMenu);