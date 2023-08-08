// Tenary Operation with Input from the Browser
/*function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}*/


// Tenary Operation with Input from the Browser
function age_Declare() {
  var Age, Can_Vote;
  Age = document.getElementById("age").value;
  Can_Vote = (Age < 18) ? "You are too young":"You can vote";
  document.getElementById("status").innerHTML = Can_Vote;
}


// Constructor function using "New & This" keywords 
/*function Vehicle(Make, Model, Year, Colour) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Colour = Colour;
}

var Jack = new Vehicle("Dodge", "Viper", 2000, "Red");
var Emily = new Vehicle("Jeep", "Trail", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Colour + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}*/

// Constructor function using "New & This" keywords 
function Person(Name, Sex, Age, HairColour) {
  this.Name = Name;
  this.Sex = Sex;
  this.Age = Age;
  this.HairColour = HairColour;
}

const Teddy = new Person ("Teddy", "Male", 3, "Black");

document.getElementById('New_and_This').innerHTML = "Teddy is " + Teddy.Age + " and has " + Teddy.HairColour + " hair.";

// Nested function
function count_Function() {
  document.getElementById('Nested_Function').innerHTML = Count();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}