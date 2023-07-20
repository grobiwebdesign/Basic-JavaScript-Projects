function addIt_on(){ // naming an addition 
    var result = 5 + 5; // establishes the sum
    document.getElementById("plus").innerHTML = result; // Prints the result in HTML
}

function takeIt_off(){ // naming a subtraction
    var result = 5 - 5; // establishing the sum
    document.getElementById("sub").innerHTML = result; // Prints the result in HTML
}

function multiPly(){ // naming a multiplier
    var result = 5 * 5; // establishing the sum
    document.getElementById("multi").innerHTML = result; // Prints the result in HTML
}

function divIde(){ // naming a divider
    var result = 5 / 5; // establishing the sum
    document.getElementById("div").innerHTML = result; // Prints the result in HTML
}
// come back to this one
function modulus_Operator(){ // naming the function
    var simpLe = 25 / 6; // establishing the sum
    document.getElementById("mod").innerHTML = "The text reads " + simpLe; // // Prints the result in HTML
}

// Increment Operator
function increment_Operator(){ // naming an increment function
    var more = document.getElementById("incr").innerHTML; // Saves text to a variable
    more++; // initiates a plus one increase on click
    document.getElementById("incr").innerHTML = more; // Prints the result in HTML
}

// Decrement Operator
function decrement_Operator(){ // naming a decrement function
    var less = document.getElementById("decr").innerHTML; // Saves text to a variable
    less--; // initiates a minus 1 digit on click
    document.getElementById("decr").innerHTML = less; // Prints the result in HTML
}

// Random number Generator
function randOm(){ // Naming a function for a random number generator
    document.getElementById("gen").innerHTML = Math.random() * 100; // Printing the result in HTML
}

// Math object Method

document.getElementById("Math").innerHTML = Math.PI; // Prints PI to the nearest round number in HTML
