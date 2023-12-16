// Open lightbox
function openModal() {
  document.getElementById("lightBox").style.display = "block";
}

// Close lightbox
function closeModal() {
  document.getElementById("lightBox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Arrow controls, left and right
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var previewImgs = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < previewImgs.length; i++) {
    previewImgs[i].className = previewImgs[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  previewImgs[slideIndex-1].className += " active";
  captionText.innerHTML = previewImgs[slideIndex-1].alt;
}