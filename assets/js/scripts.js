$(function () {
  'use strict';

  window.onload = function () {
    console.log('loaded');
    slideMainvisual();
  };

  function slideMainvisual() {
    if ($('.splide').length) {
      var splide = new Splide('.splide', {
        type: 'loop',
        perMove: 1,
        gap: 32,
        autoplay: true,
        interval: 3000,
        speed: 1000,
        arrows: false,
        pagination: false,
        focus: 'center',
        padding: '6.5%',
        breakpoints: {
          2000: {
            perPage: 5,
          },
          1600: {
            perPage: 4,
          },
          1200: {
            padding: '0',
          },
          950: {
            perPage: 3.5,
          },
          768: {
            perPage: 1.5,
            gap: 24,
            padding: '9%',
          },
        },
      });
      splide.mount();
    }
  }

  window.onscroll = function () {
    console.log('scrolled');
  };

  window.onresize = function () {
    console.log('resized');
  };
});
