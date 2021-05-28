(function ($) {
	"use strict";

    jQuery(document).ready(function($){



 //  offcanvas-menu

        //    click-action
        $(".bar").on("click", function() {
            $(".offcanva, .overlay").addClass("active");
            return false;
        });

        $(".cross").on("click", function() {
            $(".offcanva, .overlay").removeClass("active");
        });

        $(".overlay, .offcanva-menu ul li a").on("click", function() {
            $(".offcanva, .overlay").removeClass("active");
        });

       
              
        $(".single-slider-item").owlCarousel({
            items:5,
            nav:true,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:4,
                   
                },
                1000:{
                    items:5,
                   
                }
            }
            
          
        });




    });


    jQuery(window).load(function(){
// Menu Nav
function smoothSctollTop() {
    $('a').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });
}
smoothSctollTop();

    });


}(jQuery));	