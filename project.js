function myFunction() {

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {

      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";

    } else {

      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  //

  function myyFunction() {

    var dots = document.getElementById("dotss");
    var moreText = document.getElementById("moree");
    var btnText = document.getElementById("myBtnn");
  
    if (dots.style.display === "none") {

      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";

    } else {

      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  //

  function myyyFunction() {

    var dots = document.getElementById("dotsss");
    var moreText = document.getElementById("moreee");
    var btnText = document.getElementById("myBtnnn");
  
    if (dots.style.display === "none") {

      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";

    } else {

      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

//QUOTES//

$(document).ready(function() {


});

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}