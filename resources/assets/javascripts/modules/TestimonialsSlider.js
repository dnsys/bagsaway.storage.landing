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
            margin: 40,
            loop: true,
            responsive: {
                992: {
                    items: 3,
                },
                640: {
                    items: 2,
                },
                480: {
                    margin: 10,
                    stagePadding: 20,
                    items: 1
                },
                0: {
                    margin: 10,
                    stagePadding: 20,
                    items: 1
                }
            }
        });
    }
}