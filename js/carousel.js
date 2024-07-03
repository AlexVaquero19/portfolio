$(function(){
    // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    nav:true
  });

  let swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
});