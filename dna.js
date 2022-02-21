var images = [
  "assets/img/dna/1.png",
  "assets/img/dna/2.png",
  "assets/img/dna/3.png",
  "assets/img/dna/4.png",
  "assets/img/dna/5.png",
  "assets/img/dna/6.png",
  "assets/img/dna/7.png",
  "assets/img/dna/8.png",
];
var obj = { curImg: 0 };

// create tween
var tween = TweenMax.to(obj, 0.5, {
  curImg: images.length - 1, // animate propery curImg to number of images
  roundProps: "curImg", // only integers so it can be used as an array index
  repeat: 5, // repeat 3 times
  immediateRender: true, // load first image automatically
  ease: Linear.easeNone, // show every image the same ammount of time
  onUpdate: function () {
    $("#dna-image-loc").attr("src", images[obj.curImg]); // set the image source
  },
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerHook: 0,
  triggerElement: ".dna-image",
  duration: 1000,
})
  .setTween(tween)
  .addTo(controller);
