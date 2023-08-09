// Countdown Assignment

function countDown(){ // name of function for countdown timer 
  var seconds = document.getElementById("seconds").value; // captures user input

  function tick(){ // mechanics of countdown function
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick, 1000); // 100 milliseconds
    if (seconds == -1) { // stop timer after 1000 milliseconds
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

// show thumbnail
function currentSlide(n) {
  show_Slides(image_Library = n)
}

// slideshow mechanics
function show_Slides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {image_Library = 1}
  if (n < 1) {image_Library = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[image_Library-1].style.display = "block"; // disables the "display:none; css property " for corresponding image
}