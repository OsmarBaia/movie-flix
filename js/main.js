import NavMenu from "./navmenu.js";
import Carousel from './carousel.js';

document.addEventListener("DOMContentLoaded", () => {
    // const navMenu = new NavMenu();
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(`.${carousel.classList[0]}`));
});
