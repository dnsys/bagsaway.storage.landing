//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
let AOS = require('aos');

import TestimonialsSlider from './modules/TestimonialsSlider';

class Application{
    constructor(){
        console.log('application start');
        this._init();
    }

    _init(){
        $(window).on('load', function() {
            AOS.init();
        });
        new TestimonialsSlider();
    }
}

new Application();
