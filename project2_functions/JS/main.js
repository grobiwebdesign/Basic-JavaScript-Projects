/*
function project2_Function(){

    var one = "Foo";
    var two = "Bar";

    document.getElementById("project2").innerHTML = one + two;
}
*/

function conCatenated(){ //
    var paragraph = "This is..."; // this is the variable
    paragraph += " what an operator string looks like."; // += operator adds additonal words to this variable
    document.getElementById("concatenate").innerHTML = paragraph; // using getElementByID method to bind function to HTML, which makes words visible in browser window.
}