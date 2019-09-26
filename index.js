import {Carousel} from "carousel.js";
    const arrowRight = document.querySelector(".arrow-right");
    const arrowLeft = document.querySelector(".arrow-left");
const carousel = new Carousel;
    arrowRight.addEventListener("click", event => {
        carousel.incrementPosition();
        carousel.scroll();
    });

    arrowLeft.addEventListener("click", event => {
        carousel.decrementPosition();
        carousel.scroll();
    });
console.log(carousel.limit)