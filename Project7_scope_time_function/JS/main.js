
// Global Variable

var X = 10;

function Add_numbers_1() {
  document.write(20 + X + "<br>");
}

function Add_numbers_2() {
  document.write(X + 100 + "<br>");
}

Add_numbers_1();
Add_numbers_2();

// Local Variable

function Add_numbers_3() {
  var Y = 20;
  document.write(20 + Y + "<br>");
}

function Add_numbers_4() {
  document.write(Y + 100);
}

Add_numbers_3();
Add_numbers_4();

// Deliberate error for testing

function Add_numbers_5() {
  var Z = 10;
  console.log(15 + Z);
}

Add_numbers_5();

// If Statement

function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById('demo').innerHTML = "Good Afternoon";
  }
}

// Else statement

function rolling_Stock() {
  Carriage = document.getElementById("Carriage").value;
  if (Carriage <= 20) {
    Train = "Train may proceed as scheduled";
  }
  else {
    Train = "Train is too heavy, please call for a supervisor";
  }
  if (Carriage == 0) {
    Train = "Please enter a number";
  }
  document.getElementById("demo_2").innerHTML = Train;
}

// Time function from previous slides

function Time_function(){
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is Morning time";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is Afternoon";
  } else {
    Reply = "It is Evening";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}