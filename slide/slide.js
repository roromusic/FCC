var slide1 = document.getElementById("slide1");
var index = 1;

//start slide when the page finishes loading
window.onload = function() {
    slide1.classList.toggle("active");
};

//hide current slide, show next slide, do this every 8 seconds
function slideImage() {
    var oldSlide = document.getElementById("slide" + index);
    if (index < 5) {
      index++;
    }else {
      index = 1;
    }
    var newSlide = document.getElementById("slide" + index);

    oldSlide.classList.toggle("active");
    newSlide.classList.toggle("active");

    setTimeout(arguments.callee, 8000);
}

setTimeout(function() {
  slideImage();
}, 8000);
