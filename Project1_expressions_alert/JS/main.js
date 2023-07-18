// All previous exercises are commented out so to show my progress throughout the course

// window.alert("Hello Ela and Kasia");

// document.write("I love making websites");

//var sent1 = "This is the beginning of the string";
//var sent2 = "This is the ending of the string";

//document.write(sent1 + sent2);

//document.write(9 + 18);

//document.write("This is a sample, \'you can't take away my dignity\'");

//document.write("\"If you don\'t like the road you\'re walking, start paving another one!\""
//+ "— Dolly Parton");

//var B = ("\"If you don\'t like the road you\'re walking, start paving another one!\""
//+ " Dolly Parton") + " - 2014";
//document.write(B)

//var fAmily = "Houston", fAther = "John", mOther = "Cissy", dAughter = "Whitney";
//document.write(dAughter);



setInterval(theTime, 1000); // Executing a function and indicating length of time-interval (ms)

function theTime() { // created theTime() function to display the time in the HTML doc
  const d = new Date(); // created a const variable to hold the Date() object
  document.getElementById("time").innerHTML = d.toLocaleTimeString(); // Placing value of constant into HTML element
} // Close function ** example courtesy of W3schools.com