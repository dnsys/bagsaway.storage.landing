import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

export default class TestimonialsSlider{
    constructor(){
        this._carouselInit();
    }

    _carouselInit(){
        $('#testimonialContainer').owlCarousel({
            items: 3,
            margin: 40,
            loop: true,
            //autoWidth: true
        });
    }
}