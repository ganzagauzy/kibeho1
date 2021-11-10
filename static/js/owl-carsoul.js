$(document).ready(function () {

    $(".owl-carousel").owlCarousel({

        autoPlay: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        center: true,
        nav:true,
        loop: true,
        autoPlayTimeout:50000,
        pagination: false,
        autoPlayHoverPause: false,
        responsive: {
            600: {
                items: 3
            }
        }
        // items: 3,
        // itemsDesktop: [1024,3],
        // itemsTablet: [770,2],
        // itemsMobile : [480,1],
        // autoPlay: false,
        // navigation: true,
        // navigationText : false,
        // pagination: true,
        // afterInit : function(elem){
        //     $(this).css("display", "block");
        // }


    }).owlCarousel();

});
