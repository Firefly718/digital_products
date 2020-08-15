$(document).ready(function() {
  $('.slider-one').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
  });
   $('.slider-two').slick({
      arrows: true,
      nextArrow: '<a href="#" class="arrow arrow--right"></a>',
      prevArrow: '<a href="#" class="arrow arrow--left"></a>', 
      slidesToShow: 3,
      adaptiveHeight: true,
      autoplay: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

//------------------------------------------------MAP

function initMap() {
  let geo = {
    lat: -7.963919,
    lng: 112.589311
  }
  let markerPosition = {
    lat: -7.946573,
    lng: 112.600527
  }
  // responsive for 425px ---------------------------------------
  function myFunction(geoPosMobileL) {
    if (geoPosMobileL.matches) {
      geo = {
        lat: -7.963919,
        lng: 112.600527
      }
    } else {
    }
  }
  let geoPosMobileL = window.matchMedia("(max-width: 425px)")
  myFunction(geoPosMobileL)
  geoPosMobileL.addListener(myFunction)
// ----------------------------------------------------------------
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: geo,
  });

  let marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    icon: './img/marker.png',
    title: 'Ikan Piranha Atas 220C  Malang - East Java Indonesia'
  });


//--------------------------------------------------FORM -> FILL
$(".form__input--name").unbind().blur(function() {
        if ($(".form__input--name").val().length !== 0) {
          $(".form__star--name").addClass("hide");
        } else {
          $(".form__star--name").removeClass("hide");
        }
});
$(".form__input--email").unbind().blur(function() {
  if ($(".form__input--email").val().length !== 0) {
            $(".form__star--email").addClass("hide");
          } else {
            $(".form__star--email").removeClass("hide");
        }
});
$(".form__text").unbind().blur(function() {
      if ($(".form__text").val().length !== 0) {
            $(".form__star--text").addClass("hide");
          } else {
            $(".form__star--text").removeClass("hide");
          }
});          
}
//-------------------------------------------------- Burger-menu
$(document).ready(function(){
  $("#header > div > nav > i").click(function(){
    $("#header > div > nav > div").toggle('slow', 'swing');
  });
});