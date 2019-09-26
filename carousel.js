export class Carousel {
    constructor(selector) {
        this.position = 0;
        this.element = document.querySelector("#app-carousel");
        this.limit = this.element.children.length;
    }


    scroll() {
        this.element.scrollTo(window.innerWidth * this.position, 0)
        };

    incrementPosition() {
        this.position ++;
        console.log(this.position)
         if (this.position > this.limit-1) {
            this.position = 0;
        }
};

    decrementPosition(){
        this.position --;
        console.log(this.position)
       if (this.position < 0) {
            this.position = this.limit-1;
        }
    }
}