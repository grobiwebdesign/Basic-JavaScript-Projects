// while loop

function Call_Loop(){

	var Digit = "";
	var i = 1;
	while (i < 10) {
		Digit += "<br>" + i;
		i++;
	}

	document.getElementById('loop').innerHTML = Digit;	
}

// string length

let text = "Ela and Kasia";
let length = text.length;

document.getElementById("long").innerHTML = length;

// for loop

var Instruments = ["Guitar", "Drums", "Piano", "Bass"];
var Inventory = "";
var Y;

function for_Loop() {
	for  (Y = 0; Y < Instruments.length; Y++) {
		Inventory += Instruments[Y] + "<br>";
	}

	document.getElementById("List of Instruments").innerHTML = Inventory;
}

// Array function with const keyword

const bandMembers = [" Jon Bon Jovi", " Richie Sambora", " Alec Jon Such"]
document.getElementById("Constant").innerHTML = bandMembers;

// Return Statement

let x = myFunction(7, 5); 
document.getElementById("return_Demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;   
}

// Using Let Keyword to create an object

let employee = {
	name: "Ela ",
	employer: "Pitman Training ",
	length: "5 ",
	description : function(){
		return this.name + "has worked for " + this.employer + "for " + this.length + "years";
	}
};
document.getElementById("object_Key").innerHTML = employee.description();



