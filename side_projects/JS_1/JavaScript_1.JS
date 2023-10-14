// 

function itinery_Select(){
	var Animal_Output;
	var Animals = document.getElementById('Animal_Itinery').value;
	var Animal_String = "is my favourite";
	switch(Animals){
	case "Alligator":
		Animal_Output = "Alligator" + Animal_String;
		break;
	case "Elephant":
		Animal_Output = "Elephant" + Animal_String;
		break;
	case "Chimpanzee":
		Animal_Output = "Chimpanzee" + Animal_String;
	default:
		Animal_Output = " Sorry, we do not have any of those.";
	}

	document.getElementById("output").innerHTML = Animal_Output;
}


// getElementByClassName() Method

function changeText() {
	var line = document.getElementsByClassName("change");
	line[0].innerHTML = "They both did,";
	line[1].innerHTML = "Simultaneously";
}

// canvas

const marker = document.getElementById("myCanvas");
const markup = marker.getContext("2d");

const grd = markup.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

markup.fillStyle = grd;
markup.fillRect(60, 80, 101, 150);

markup.beginPath();
markup.moveTo(30, 24);
markup.lineTo(40, 74);
markup.lineTo(84, 49);
markup.lineTo(147, 91);
markup.strokeStyle = "blue";
markup.stroke();