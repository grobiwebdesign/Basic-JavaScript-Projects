// All previous exercises are commented out so to show my progress throughout the course

//var A = "Creating a string";

//document.write(A);

//document.write("This is a sample, \'you can't take away my dignity\'");

//document.write("\"If you don\'t like the road you\'re walking, start paving another one!\""
//+ "— Dolly Parton");

//var B = ("\"If you don\'t like the road you\'re walking, start paving another one!\""
//+ " Dolly Parton") + " - 2014";
//document.write(B)

//var fAmily = "Houston", fAther = "John", mOther = "Cissy", dAughter = "Whitney";
//document.write(dAughter);

//document.write(9 + 18);

setInterval(theTime, 1000); // Executing a function and indicating length of time-interval (ms)

function theTime() { // named function called 'theTime'
  const d = new Date(); // Calling a constant
  document.getElementById("time").innerHTML = d.toLocaleTimeString(); // Placing value of constant into HTML element
} // Close function ** example courtesy of W3schools.com