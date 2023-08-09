// Countdown Assignment

function countDown(){
  var seconds = document.getElementById("seconds").value;

  function tick(){
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick();
}

// slideshow challenge

let image_Library = 1;
show_Slides(image_Library);

// controls

function arrowButton(n) {
  show_Slides(image_Library += n);
}

// thumbnail
function currentSlide(n) {
  show_Slides(image_Library = n)
}

function show_Slides(n) {
  let i;
  let slides = document.getElementByClassName("slide");
  if (n > slides.length) {image_Library = 1}
  if (n < 1) {image_Library = slides.length}
    for i = 0; i < slides.length i++ {
      slides[i].style.display = "none";
    }

    slides[image_Library-1].style.display = "block";
}