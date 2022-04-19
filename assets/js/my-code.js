$(function () {
  $(".message-box-icon").click(function () {
    $(".message").css("display", "none")
  });

  $(".btn-open-nav-mobile").click(function () {
    $(".header-nav-overlay").fadeToggle(200);
    $(".header-nav-mobile").fadeToggle(200);
  });

  $(".header-nav-mobile-close").click(function () {
    $(".header-nav-overlay").fadeToggle(200);
    $(".header-nav-mobile").fadeToggle(200);
  });

  $(".header-nav-overlay").click(function () {
    $(this).fadeToggle(200);
    $(".header-nav-mobile").fadeToggle(200);
  });

  $(".slide-for-5").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    nextArrow: '.next-arrow',
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });


  $(".blog-slick").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    variableWidth: true,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          paddingCenter: '40px'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $(".slick-instagram").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // single-post
  $(".single-post-top-slide-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: $('.top-slide-next'),
    prevArrow: false,
    autoplay: true,
    autoplayspeed: 2000,
    infinite: true,
    variableWidth: true
  });

  $(".single-post-bot-slide-slick").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: $('.next'),
    dots: true,
    prevArrow: false,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings:
        {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          nextArrow: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  })
  // Product-style-1-slick
  $('.product-detail-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left" aria-hidden="true"></i><span class="sr-only">hide-text</span></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right" aria-hidden="true"></i><span class="sr-only">hide-text</span></button>',
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          variableWidth: true,
          arrows: false
        }
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    asNavFor: '.product-detail-slider-for',
    focusOnSelect: true,
    dots: false
  });
  $('.product-slide-slick').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right" aria-hidden="true"></i><span class="sr-only">hide-text</span></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings:
        {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          nextArrow: false
        }
      }
    ]
  })
  // blog
  $('.blog-slide-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i><span class="sr-only">hide-text</span></button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          nextArrow: false
        }
      }
    ]
  });

  $('.blog-product-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    infinite: true,
    cssEase: 'linear',
    arrows: true,
    appendDots: '.slider-nav',
    appendArrows: '.slider-nav',
    initialSlide: 2,
    nextArrow: '<span class="slick-arrow next-arrow">Older Posts</span>',
    prevArrow: '<span class="slick-arrow prev-arrow">Newer Posts</span>',
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>' + (i + 1) + '</a>';
    }
  });
  // shop kid
  $('.banner-top-slick').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: false,
    arrows: false
  })

  $('.feartured-products-slick').slick({
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true
  });

  $('.baby-girl-slick').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.list-product-slick').slick({
    slide: '.list-product-slick-slide',
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    nextArrow: '<span class="slick-arrow next-arrow">Next <i class="fas fa-chevron-right"></i></span>',
    prevArrow: '<span class="slick-arrow prev-arrow"><i class="fas fa-chevron-left"></i> Prev</span>',
    appendArrows: '.slider-nav',
    appendDots: '.slider-nav',
    customPaging: function (silder, i) {
      i = i + 1;
      var countSilde = $(silder.$slides[i]).data();
      return '<a class="dots">' + i + '</a>';
    }
  });

  $('.nav-filter').click(function () {
    $('.nav-filter-has-children').toggleClass('visible');
  })
  // shop men
  $('.collections-products-slick').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 1000
  })
})
// toggle nav-shop-kid
function toggleNav(click_id) {
  var item_child = click_id + '-item';
  $('#' + item_child).toggle(300);
}

function toggleShop() {
  $('.nav-shop').toggle(400, "swing");
}

function toggleHome() {
  $('.nav-home').toggle(400, "swing");
}



