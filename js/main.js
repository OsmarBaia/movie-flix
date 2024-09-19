// Containers
const navMenuContainer = document.querySelector("nav");
const toggleNavMenuBgBlur = document.querySelector(".bg-blur");
// Toggles
const toggleNavMenu = document.querySelector(".nav-toggle");
const toggleNavMenuIcon = document.querySelector(".nav-toggle i");
const navCloseToggles = document.querySelectorAll(".nav-close");

function OpenNavMenu(){
    if(!navMenuContainer.classList.contains("active")){
        toggleNavMenuIcon.classList.remove("bx-menu");
        toggleNavMenuIcon.classList.add("bx-x");
        navMenuContainer.classList.add("active");
        toggleNavMenuBgBlur.classList.add("active");
    }
}

function CloseNavMenu(){
    if(navMenuContainer.classList.contains("active")){
        toggleNavMenuIcon.classList.remove("bx-x");
        toggleNavMenuIcon.classList.add("bx-menu");
        navMenuContainer.classList.remove("active");
        toggleNavMenuBgBlur.classList.remove("active");
    }
}

function ToggleNavMenu(){
    !navMenuContainer.classList.contains("active") ?   OpenNavMenu():  CloseNavMenu();
}

toggleNavMenu.addEventListener("click",ToggleNavMenu);
navCloseToggles.forEach(item => item.addEventListener("click", CloseNavMenu));