// Variable tracking turns
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
	}
	// Call function to check for a win condition
	checkWinCondition();
	// Change active player
	if (activePlayer === 'X') {
		// if active player is X, change to 0
		activePlayer = 'O';
		// if active player is anything other than 'X'
		activePlayer = 'X';
	}

	//play placement sound
	audio('./media/place.mp3');
	// check for computer's turn
	if (activePlayer === 'O') {
		// disable clicking on computer's turn
		disableClick();
		// wait 1 second for computer's turn
		setTimeout(function () { computerTurn(); }, 1000);
	}
	return true;
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
}
// function to parse the selected squares array to search for win condition
	function checkWinCondition() {
	if ( arrayIncludes('0X', '1X', '2X') ) { drawWinLine(50,100,558,100) }
	else if ( arrayIncludes('3X', '4X', '5X' )) { drawWinLine(50,304,558,304) }
	else if ( arrayIncludes('6X', '7X', '8X' )) { drawWinLine(50,508,558,508) }
	else if ( arrayIncludes('0X', '3X', '6X' )) { drawWinLine(100,50,100,558) }
	else if ( arrayIncludes('1X', '4X', '7X' )) { drawWinLine(304,50,304,558) }
	else if ( arrayIncludes('2X', '5X', '8X' )) { drawWinLine(508,50,508,558) }
	else if ( arrayIncludes('6X', '4X', '2X' )) { drawWinLine(100,508,510,90) }
	else if ( arrayIncludes('0X', '4X', '8X' )) { drawWinLine(100,508,510,520) }
	else if ( arrayIncludes('00', '10', '20' )) { drawWinLine(50,100,558,100) }
	else if ( arrayIncludes('30', '40', '50' )) { drawWinLine(50,100,558,304) }
	else if ( arrayIncludes('60', '70', '80' )) { drawWinLine(50,508,558,508) }
	else if ( arrayIncludes('00', '30', '60' )) { drawWinLine(100,50,100,558) }
	else if ( arrayIncludes('10', '40', '70' )) { drawWinLine(304,50,304,558) }
	else if ( arrayIncludes('20', '50', '80' )) { drawWinLine(508,50,508,558) }
	else if ( arrayIncludes('60', '40', '20' )) { drawWinLine(100,508,510,90) }
	else if ( arrayIncludes('00', '40', '80' )) { drawWinLine(100,100,520,520) }
	// check for a tie
	else if (selectedSquares.length >= 9) {
		audio('.media/tie.mp3');
		setTimeout(function () { resetGame(); }, 500);
	}

	// check if array includes 3 strings
	const a = selectedSquares.includes(squareA);
	const b = selectedSquares.includes(squareB);
	const c = selectedSquares.includes(squareC);
	// if all three variables passed are included in array, true is returned and else if condition executes the draw line() function
	if (a === true && b === true && c === true) {return true; }

	}
 

