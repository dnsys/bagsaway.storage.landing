//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
let AOS = require('aos');

class Application{
    constructor(){
        console.log('application start');
        this._init();
    }

    _init(){
        $(window).on('load', function() {
            AOS.init();
        });
    }
}

new Application();
