import svg4everybody from 'svg4everybody';
import FastAverageColor from 'fast-average-color';
import Cookies from 'js-cookie';
// import { tns } from "tiny-slider/src/tiny-slider";
// import $ from 'jquery';


(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #1b1e64',
    'color: #fff',
    'display: inline-block',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.52',
    'text-align: left',
    'font-size: 14px',
    'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://igrlv.ru', styles);




  window.addEventListener('load', function () {

    const ac = new FastAverageColor();
    const items = document.querySelectorAll('.books__category');

    for (var i = 0; i < items.length; i++) {
      if ($(window).width() >= 500) {
        const
          item = items[i],
          image = item.querySelector('img'),
          picture = item.querySelector('.books__picture'),

          isBottom = item.classList.contains('item_bottom'),
          gradient = item.querySelector('.books__gradient'),

          size = 200,

          color = ac.getColor(image, isBottom ? {
            top: height - size,
            height: size
          } : {
            height: size
          }),
          colorEnd = [].concat(color.value.slice(0, 3), 0.5).join(','),

          lg = 'linear-gradient(to bottom, rgb(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0.5) 77%)';
        gradient.style.backgroundColor = 'rgba(' + colorEnd + ')';
        gradient.style.backgroundImage = lg;

      } else {

        const
          item = items[i],
          image = item.querySelector('img'),
          picture = item.querySelector('.books__picture'),

          isBottom = item.classList.contains('item_bottom'),
          gradient = item.querySelector('.books__gradient'),

          size = 100,

          color = ac.getColor(image, isBottom ? {
            top: width - size,
            width: size
          } : {
            width: size
          }),
          colorEnd = [].concat(color.value.slice(0, 3), 0.5).join(','),
          lg = 'linear-gradient(to left, rgb(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0.5) 91%)';
        gradient.style.backgroundColor = 'rgba(' + colorEnd + ')';
        gradient.style.backgroundImage = lg;

      }

    }



  }, false);



  $(function() {

     /*
        Lazyload images
      */

      let lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        load_delay: 50,
        use_native: true
      });

      if (lazyLoadInstance) {
        lazyLoadInstance.update();
      }


    // Cookies

    const $cookie = document.querySelector('.cookies');
    const $cookieClose = document.querySelector('.cookies__close');


    function agreeWithCookies() {
      var age = 60 * 60 * 24 * 30;
      Cookies.set('agreedWithCookies', 'agreedWithCookies', { expires: age });
    }

    if ( Cookies.get('agreedWithCookies') === 'agreedWithCookies' ) {
      // console.log(Cookies.get('agreedWithCookies'));
      document.body.classList.remove("page__cookie-visible");
    } else {
      // console.log(Cookies.get('agreedWithCookies'));
      document.body.classList.add("page__cookie-visible");

      $cookieClose.addEventListener('click', function (e) {
        e.preventDefault();
        agreeWithCookies();
        document.body.classList.remove("page__cookie-visible");
      });
    }



    // Nav

    const $header = $('.header');
    const $navTrigger = $('.nav__trigger');

    $navTrigger.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('nav__trigger_active');
      $header.toggleClass('header_open');


    });

    // Close nav

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.nav__trigger_active').length) {
        $navTrigger.removeClass('nav__trigger_active');
        $header.removeClass('header_open');

      }
    });


    // ScrollTo

    // $('.home .nav__list a, .home .nav-sec__list a').on('click', function (e) {
    //   e.preventDefault();
    //   let _scroll = $(this).attr('href');
    //   if (_scroll != '#' && $(_scroll).length) {
    //     $('html, body').animate({
    //       scrollTop: $(_scroll).offset().top - 0
    //     }, 300);
    //   }
    // });


    // HeaderSlider

    const $headerSlider = $('.header__slider');

    if ($headerSlider.length > 0) {

      $headerSlider.slick({
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        mobileFirst: true,
        // loop: true,
        accessibility: true,
        infinite: true,
        speed: 600,
        focusOnSelect: true,
        waitForAnimate: false,
        adaptiveHeight: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        // autoplay: false,
        autoplaySpeed: 20000,
        arrows: false,

      });

    }

    // Story slider

    const $storySlider = $('.story__timeline');
    // const $storySlider = $('.story__timeline');


    if ($storySlider.length > 0) {
      $storySlider.slick({
        dots: true,
        mobileFirst: true,
        focusOnSelect: true,
        waitForAnimate: true,
        // adaptiveHeight: true,
        adaptiveHeight: false,

        arrows: false,
        infinite: false,
        responsive: [
        {
            breakpoint: 1,
            settings: {
              slidesToShow: 1,
              // initialSlide: 5,
              centerMode: true,
              centerPadding: '0px',
              // fade: true,
              // adaptiveHeight: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // adaptiveHeight: true,
          }
        },
        {
          breakpoint: 1200,
          settings: 'unslick',
        }]
      });

      // $('.slider-nav').slick({
      //   slidesToShow: 6,
      //   slidesToScroll: 4,
      //   asNavFor: '.slider-for',
      //   dots: true,
      //   centerMode: true,
      //   focusOnSelect: true
      // });

    }




    // Press slider

    const $pressSlider = $('.press__slider');

    if ($pressSlider.length > 0) {

      $pressSlider.slick({
          slidesToScroll: 3,
          dots: true,
          mobileFirst: true,
          loop: true,
          speed: 300,
          focusOnSelect: true,
          waitForAnimate: false,
          adaptiveHeight: false,
          arrows: false,

          responsive: [{
            breakpoint: 1,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,

              }
          },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                prevArrow: '.press__arrow_back',
                nextArrow: '.press__arrow_next',
              }
            }
          ]
        });



    }


    // Books

    const $booksCategory = $(".books__category");

    if ($(window).width() >= 768) {
      $booksCategory.eq(2).addClass('books__category_active');
      if (!$booksCategory.hasClass('.books__category_active')) {
        $booksCategory
          .siblings('.books__category')
          .find('.books__cat-w')
          .addClass('books__cat-w_active');
      }

      $booksCategory.hover(function () {

        $(".books__categories").find(".books__category_active").removeClass("books__category_active");
        $(this).addClass("books__category_active");
        if (!$(this).hasClass('.books__category_active')) {
          $(this)
            .siblings('.books__category')
            .find('.books__cat-w')
            .addClass('books__cat-w_active');
        }
      }, function () {
        $(".books__categories").children(".books__category_active").removeClass("books__category_active");
        $(this)
          .siblings('.books__category')
          .find('.books__cat-w')
          .removeClass('books__cat-w_active');
      });

    } else {

      $booksCategory.eq(2).addClass('books__category_active');

      $booksCategory.hover(function () {

        $(".books__categories").find(".books__category_active").removeClass("books__category_active");
        $(this).addClass("books__category_active");
        if (!$(this).hasClass('.books__category_active')) {
          $(this)
            .siblings('.books__category')
            .find('.books__cat-w')
            .addClass('books__cat-w_active');
        }
      });



    }


    // Middle color






  });




})(jQuery);
