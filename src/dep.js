$(document).ready(function () {
  $('.responsive').slick({
    dots: true,
    infinite: false,
    centerMode: true,
    speed: 300,
    slidesToShow: 3,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 2,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false
      },
      991: {
        items: 2,
        nav: false,
        loop: true,
        margin: 20
      },
      1000: {
        items: 2,
        nav: false,
        loop: true,
        dots: true,
        margin: 20
      },
      1250: {
        items: 2,
        nav: false,
        dots: false,
        margin: 20
      }
    }
  });
});


$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('#navbar').addClass('sticky');
  } else {
    $('#navbar').removeClass('sticky');
  }
});
