$(document).ready(function(){

    $('.service-active').owlCarousel({
        loop:true,
        margin: 20,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })


  $('.brand-active').owlCarousel({
    loop:true,
    margin: 50,
    nav: false,
    responsive:{
        0:{
            items:2
        },
        580:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})


$('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });

  $('.search-select-box select').selectpicker();

})