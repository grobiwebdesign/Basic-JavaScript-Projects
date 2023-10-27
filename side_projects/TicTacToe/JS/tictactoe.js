// Variable tracking player and computer turns

let activePlayer = 'X';

// Store array of moves, determines win condition

let selectedSquares = [];

// Placing markers on the grid

function placeXOrO(squareNumber) {

// Ensure square is empty
// .some() method checks each element of selectSquare array
	
	if (!selectedSquares.some(element => element.includes(squareNumber))) {

// Retrieves HTML element id if it was clicked
		
		let select = document.getElementById(squareNumber);

// condition to check players turn
		
		if (activePlayer === 'X') {

// If activePlayer is equal to 'X', X image is placed in square
			
			select.style.backgroundImage = 'url("images/cross.png")';

// Active player can only be 'X' or '0', 
		
		} else {

// If activePlayer is equal to '0' the naught image is used
			
			select.style.backgroundImage = 'url("images/naught.png")';
		}

// Concatinate squareNumber and activePlayer together, add to array
		
		selectedSquares.push(squareNumber + activePlayer);
	
// Call function to check for a win condition
	
	checkWinCondition();

// Change active player
	
	if (activePlayer === 'X') {

// if active player is X, change to 0

		activePlayer = 'O';
		} else

// if active player is anything other than 'X'
		
		activePlayer = 'X';

//play placement sound
	
	audio('./media/click.wav');

// check for computer's turn
	
	if (activePlayer === 'O') {

// disable clicking on computer's turn
		
		disableClick();

// wait 1 second for computer's turn
		
		setTimeout(function () { computerTurn(); }, 1000);
	}

// Required to allow computer to take a turn

	return true;
	}
}

// computer choses random square

function computerTurn() {

// boolean required for while loop

let success = false;

// variable stores random number 0-8

let pickASquare;

// check square isn't already selected
	
	while(!success) {
		pickASquare = String(Math.floor(Math.random() * 9));

// If random number returns true, square has not been selected
	
		if (placeXOrO(pickASquare)) {

// call the function

		placeXOrO(pickASquare);

// places boolean and end loop
		success = true;
		
		};
	}
}

// function to parse the selected squares array to search for win condition
// Calls drawLine function if win condition is met

function checkWinCondition() {
	if ( arrayIncludes('OX', '1X', '2X') ) { drawWinLine(50,100,558,100) }
	else if ( arrayIncludes('3X', '4X', '5X' )) { drawWinLine(50,304,558,304) }
	else if ( arrayIncludes('6X', '7X', '8X' )) { drawWinLine(50,508,558,508) }
	else if ( arrayIncludes('OX', '3X', '6X' )) { drawWinLine(100,50,100,558) }
	else if ( arrayIncludes('1X', '4X', '7X' )) { drawWinLine(304,50,304,558) }
	else if ( arrayIncludes('2X', '5X', '8X' )) { drawWinLine(508,50,508,558) }
	else if ( arrayIncludes('6X', '4X', '2X' )) { drawWinLine(100,508,510,90) }
	else if ( arrayIncludes('OX', '4X', '8X' )) { drawWinLine(100,508,510,520) }
	else if ( arrayIncludes('OO', '1O', '2O' )) { drawWinLine(50,100,558,100) }
	else if ( arrayIncludes('3O', '4O', '5O' )) { drawWinLine(50,100,558,304) }
	else if ( arrayIncludes('6O', '7O', '8O' )) { drawWinLine(50,508,558,508) }
	else if ( arrayIncludes('OO', '3O', '6O' )) { drawWinLine(100,50,100,558) }
	else if ( arrayIncludes('1O', '4O', '7O' )) { drawWinLine(304,50,304,558) }
	else if ( arrayIncludes('2O', '5O', '8O' )) { drawWinLine(508,50,508,558) }
	else if ( arrayIncludes('6O', '4O', '2O' )) { drawWinLine(100,508,510,90) }
	else if ( arrayIncludes('OO', '4O', '8O' )) { drawWinLine(100,100,520,520) }

// check for a tie

	else if (selectedSquares.length >= 9) {

// play sound on event of a tie

		audio('.media/chime.wav');

// reset game after event of tie

		setTimeout(function () { resetGame(); }, 500);
	}

// check if array meets win conditon

	function arrayIncludes(squareA, squareB, squareC) {
	const a = selectedSquares.includes(squareA);
	const b = selectedSquares.includes(squareB);
	const c = selectedSquares.includes(squareC);
	if (a === true && b === true && c === true) { return true; }
	}
}

// Function to prevent player clicking on computer's turn

function disableClick(){
	body.style.pointerEvents = 'none';
	setTimeout(function () {body.style.pointerEvents = 'auto';},1000);
}

// play audio file

function audio(audioURL) {
	let audio = new Audio(audioURL);
	audio.play();
}

// Function to draw line on Winning event

function drawWinLine(coordX1, coordY1, coordX2, coordY2){
	const canvas = document.getElementById('win-lines');
	const c = canvas.getContext('2d');
	let x1 = coordX1,
		y1 = coordY1,
		x2 = coordX2,
		y2 = coordY2,

		x = x1,

		y = y1;

		function animateLineDrawing(){
			const animationLoop = requestAnimationFrame(animateLineDrawing);
			c.clearRect(0, 0, 608, 608);
			c.beginPath();
			c.moveTo(x1, y1);
			c.lineTo(x, y);
			c.lineWidth = 10;
			c.strokeStyle = 'rgba(70, 255, 33, .8';
			c.stroke();

			if (x1 <= x2 && y1 >= y2) {
				if (x < x2) { x += 10; }
				if (y > y2) { y -= 10; }
				if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
			}
		}
// Wipe board clean after animated line drawing

		function clear(){
			const animationLoop = requestAnimationFrame(clear);
			c.clearRect(0, 0, 608, 608);
			cancelAnimationFrame(animationLoop);
		}
		disableClick();
		audio('./media/win.wav');
		animateLineDrawing();
		setTimeout(function () {clear(); resetGame(); }, 1000);
}

// Function to clear grid and restart game

function resetGame(){
	for (let i = 0; i < 9; i++) {
		let square = document.getElementById(String(i));
		square.style.backgroundImage = '';
	}
	selectedSquares = [];
}
