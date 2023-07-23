function my_Dictionary(){

  var Beast = {

    Species: "Sandworm",
    Color: "Dusty Red",
    Breed: "Arrakanian Spicer",
    Age: 14000000,
    Sound: "Hiss"

  };

  delete Beast.Age; // Removes Age KBP from above variable

  document.getElementById("dictionary").innerHTML = Beast.Age;

}