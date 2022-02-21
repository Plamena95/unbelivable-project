$(document).ready(function () {
  $(".biotech #click-less").hide()
  $(".patient #click-less").hide()
  $(".physicians #click-less").hide()
  // video
  $("iframe").css("display", "none");
  $(".play-button").on("click", function () {
    $(".play-button").css("display", "none");
    $("iframe").css("display", "block");
    $(".video-photo").css("display", "none");
  });

  //mobile menu
  var boxWidth = $("body").width();
  $("#show").hide();
  $(".close-button-section i").click(function () {
    $("#show").show().animate({
      width: 0,
    });
  });
  $(".nav-bar i").click(function () {
    $("#show").show().animate({
      width: boxWidth,
    });
  });

  //dna section
  $(".p-hidden").hide();
  $(".biotech #click-more").on("click", function (call) {
    if ($(window).width() <= 992) {
      $(".biotech #click-less").show()
      $(".biotech #click-more").hide()
      $(".patient #mobile-hide").hide();
      $(".physicians #mobile-hide").hide();
      $(".biotech .p-hidden").show().animate();
      $(".first-container").animate({
        left: "45%",
      });
      $(".dna-image").animate({
        left: "-19%",
      });

    } else {
      $(".biotech #click-more").on("click", function () {
        $(".patient #mobile-hide").hide();
        $(".physicians #mobile-hide").hide();
        $(".biotech .p-hidden").show().animate();
      });

     /* $(".physicians #click-more").on("click", function () {
        $(".patient #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".physicians .p-hidden").show().animate();
      });

      $(".patient #click-more").on("click", function () {
        $(".physicians #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".patient .p-hidden").show().animate();
      });*/
    }
  });
  $(".biotech #click-less").on("click", function (call) {
    if ($(window).width() <= 992) {
      $(".biotech #click-less").hide()
      $(".biotech #click-more").show()
      $(".biotech .p-hidden").hide().animate();
      $(".first-container").animate({
        left: "",
      });
      $(".dna-image").animate({
        left:"50%"
      });}else{
        $(".biotech #click-less").hide()
        $(".biotech #click-more").show()
        $(".biotech .p-hidden").hide().animate();
      }
  });
  $(".physicians #click-more").on("click", function (call){
    if ($(window).width() <= 992) {
      $(".physicians #click-less").show()
      $(".physicians #click-more").hide()
      $(".patient #mobile-hide").hide();
      $(".physicians #mobile-hide").hide();
      $(".physicians .p-hidden").show().animate();
      $(".first-container").animate({
        left: "45%",
      });
      $(".dna-image").animate({
        left: "-19%",
      });
     /* $(".physicians #click-more").on("click", function () {
        $(".patient #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".physicians .p-hidden").show().animate();
        $(".first-container").animate({
          left: "45%",
        });
        $(".dna-image").animate({
          left: "-19%",
        });
      });

      $(".patient #click-more").on("click", function () {
        $(".physicians #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".patient .p-hidden").show();
        $(".first-container").animate({
          left: "45%",
        });
        $(".dna-image").animate({
          left: "-19%",
        });
      });*/
    } else {
     
        $(".patient #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".physicians .p-hidden").show().animate();
        $(".physicians #click-less").show()
    }
  });
  $(".physicians #click-less").on("click", function (call) {
    if ($(window).width() <= 992) {
      $(".physicians #click-less").hide()
      $(".physicians #click-more").show()
      $(".physicians .p-hidden").hide().animate();
      $(".first-container").animate({
        left: "",
      });
      $(".dna-image").animate({
        left:"50%"
      });}else{
        $(".physicians #click-less").hide()
        $(".physicians #click-more").show()
        $(".physicians .p-hidden").hide().animate();
      }
  });
  $(".physicians #click-less").on("click", function (call) {
    if ($(window).width() <= 992) {
      $(".physicians #click-less").hide()
      $(".physicians #click-more").show()
      $(".physicians .p-hidden").hide().animate();
      $(".first-container").animate({
        left: "",
      });
      $(".dna-image").animate({
        left:"50%"
      });}
  });
  $(".patient #click-more").on("click", function (call){
    if ($(window).width() <= 992) {
      $(".physicians #mobile-hide").hide();
      $(".biotech #mobile-hide").hide();
      $(".patient .p-hidden").show();
      $(".first-container").animate({
        left: "45%",
      });
      $(".dna-image").animate({
        left: "-19%",
      });
      $(".patient #mobile-hide").hide();
      $(".physicians #mobile-hide").hide();
      $(".biotech .p-hidden").show().animate();
      $(".first-container").animate({
        left: "45%",
      });
      $(".dna-image").animate({
        left: "-19%",
      });
      $(".physicians #click-more").on("click", function () {
        $(".patient #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".physicians .p-hidden").show().animate();
        $(".first-container").animate({
          left: "45%",
        });
        $(".dna-image").animate({
          left: "-19%",
        });
      });
    } else {
      $(".biotech #click-more").on("click", function () {
        $(".patient #mobile-hide").hide();
        $(".physicians #mobile-hide").hide();
        $(".biotech .p-hidden").show().animate();
      });

      $(".physicians #click-more").on("click", function () {
        $(".patient #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".physicians .p-hidden").show().animate();
      });

      $(".patient #click-more").on("click", function () {
        $(".physicians #mobile-hide").hide();
        $(".biotech #mobile-hide").hide();
        $(".patient .p-hidden").show().animate();
      });
    }
  });
  //slide animation
  $(window).scroll(function () {
    $(".activities-container").each(function () {
      var objectEnd = $(this).offset().top + $(this).outerHeight();
      var windowEnd = $(window).scrollTop() + $(window).height();

      if (windowEnd > objectEnd) {
        $(this).addClass("animate__fadeInUp");
      }
    });
  });
});
