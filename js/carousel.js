class Carousel {
    constructor(selector) {
        this.carousel = document.querySelector(selector);
        this.imagesContainer = this.carousel.querySelector('.carousel__images');
        this.prevButton = this.carousel.querySelector('#carousel__button-prev');
        this.nextButton = this.carousel.querySelector('#carousel__button-next');
        this.images = this.imagesContainer.querySelectorAll('.carousel__images img');
        this.totalImages = this.images.length;
        this.currentIndex = 0;

        this.init();
    }

    init() {
        // this.updateCarousel();
        this.prevButton.addEventListener('click', () => this.showPrev());
        this.nextButton.addEventListener('click', () => this.showNext());
    }

    updateCarousel() {
        const imageWidth = this.images[this.currentIndex].width;
        const offset = -this.currentIndex * imageWidth;
        this.imagesContainer.style.transform = `translateX(${offset}px)`;
    }

    showPrev() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.totalImages - 1;
        this.updateCarousel();
    }

    showNext() {
        this.currentIndex = (this.currentIndex < this.totalImages - 1) ? this.currentIndex + 1 : 0;
        this.updateCarousel();
    }
}

export default Carousel;
