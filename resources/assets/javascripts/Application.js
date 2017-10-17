//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
let AOS = require('aos');

import TestimonialsSlider from './modules/TestimonialsSlider';

class Application{
    constructor(){
        console.log('application start');
        this._init();
        this._userMenuDropdown();
        this._burgerMenu();
    }

    _init(){
        $(window).on('load', function() {
            AOS.init();
        });
        new TestimonialsSlider();
    }

    _userMenuDropdown(){
        $('.js-user-menu-dropdown').on('click', function (event) {
            event.preventDefault();
            let $this = $(this);
            $this.toggleClass('open');
            $this.siblings('.header__user-menu-dropdown').slideToggle();
        });
    }

    _burgerMenu(){
        $('.header__burger').on('click', function () {
            let $this = $(this);
            $this.toggleClass('open');
            $('.header__mobile-menu').slideToggle(function () {
                if ($(this).is(':visible'))
                    $(this).css('display','flex');
            });
            $('html').toggleClass('opened-menu');
        });
    }
}

new Application();
