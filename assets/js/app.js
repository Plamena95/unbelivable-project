(function ($, window, document) {
    $(document).ready(function () {
      var $slider_frame = $(`.slider`);
      $slider_frame.owlCarousel({
        loop: true,
        items: 1,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>",
        ],
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
      });
    });
  })(jQuery, window, document);






 