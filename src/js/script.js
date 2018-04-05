jQuery(document).ready(function(){
  var owl = $('.slider__auto .owl-carousel');
  owl.owlCarousel({
      items:5,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});