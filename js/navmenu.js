class NavMenu {
    constructor() {
        this.navMenuContainer = document.querySelector("nav");
        this.toggleNavMenuBgBlur = document.querySelector(".bg-blur");
        this.toggleNavMenu = document.querySelector(".nav-toggle");
        this.toggleNavMenuIcon = document.querySelector(".nav-toggle i");
        this.navCloseToggles = document.querySelectorAll(".nav-close");
        this.init();
    }

    init() {
        this.toggleNavMenu.addEventListener("click", () => this.toggleNavMenuHandler());
        this.navCloseToggles.forEach(item =>
            item.addEventListener("click", () => this.closeNavMenu())
        );
    }
    /*

    Toggle Menu

    */
    openNavMenu() {
        if (!this.navMenuContainer.classList.contains("active")) {
            this.toggleNavMenuIcon.classList.remove("bx-menu");
            this.toggleNavMenuIcon.classList.add("bx-x");
            this.navMenuContainer.classList.add("active");
            this.toggleNavMenuBgBlur.classList.add("active");
        }
    }

    closeNavMenu() {
        if (this.navMenuContainer.classList.contains("active")) {
            this.toggleNavMenuIcon.classList.remove("bx-x");
            this.toggleNavMenuIcon.classList.add("bx-menu");
            this.navMenuContainer.classList.remove("active");
            this.toggleNavMenuBgBlur.classList.remove("active");
        }
    }

    toggleNavMenuHandler() {
        this.navMenuContainer.classList.contains("active") ? this.closeNavMenu() : this.openNavMenu();
    }
}

export default NavMenu;

