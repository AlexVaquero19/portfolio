(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active');
        $('body').toggleClass('dark-mode');

        $('.mode').show();
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        let $anchor = $(this);
        if(!$(this)[0].getAttribute("href") == "#")
        {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        }
      });
    });

})(jQuery);

$(document).ready(function() { 
    
  let dob = new Date("1999/04/19");
  let today = new Date();
  let dayDiff = Math.ceil(today - dob) / (1000 * 60 * 60 * 24 * 365);
  let age = parseInt(dayDiff);
  let counter = 0;
  
  $(".edad").text(age);
  $(".anio").text(today.getFullYear());

  $(".txtAboutMe").hide();

  if($(window).width() <= 768) 
    $(".miSwitch").appendTo(".spanSwitchMobile");
  
  if($(window).width() >= 768) 
    $(".miSwitch").appendTo(".spanSwitchPc");
  
  $(window).resize(function() {
    if($(window).width() >= 768) 
      $(".miSwitch").appendTo(".spanSwitchPc");
    
    if($(window).width() <= 768) 
      $(".miSwitch").appendTo(".spanSwitchMobile");
  });

  $(".btnSobreMi").on("click", function(){
      if(counter % 2 == 0){
          $(".txtAboutMe").addClass("animate__animated animate__bounceInDown");
          $(".txtAboutMe").show();

          $(".imgDivPrincipal").hide();
      }else{
          $(".txtAboutMe").hide();

          $(".imgDivPrincipal").addClass("animate__animated animate__backInLeft");
          $(".imgDivPrincipal").show();
      }

      counter++;
  });

  $(window).scroll(function(){
    $(".dropdown-toggle").removeClass("show");
    $(".dropdown-menu").removeClass("show");
  });

  let animatedText = ["Programador", "Desarrollador Web"];
  let contAnimated = 0;
  
  function animateText(){
      setInterval(function(){ 
          $(".txtAnim").toggleClass("animate__fadeOutRight animate__fadeInLeft");
          $(".delete").text(animatedText[contAnimated]);
          
          setTimeout(function(){
              $('.txtAnim').toggleClass('animate__fadeInLeft animate__fadeOutRight');
              //$(".txtAnim").removeClass("animate__animated animate__zoomIn");
          }, 2000);

          contAnimated++;

          if(contAnimated > animatedText.length-1)
              contAnimated = 0
      }, 3000);        
  }

  animateText();

  var swiper = new Swiper('.blog-slider', {
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
