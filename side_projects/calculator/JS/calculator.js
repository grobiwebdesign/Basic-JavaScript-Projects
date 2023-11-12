// Create object to keep track of values

const Calculator = {

// Display 0 on calculator screen
	Display_Value: '0',
// Hold the first operand for any expression 
	First_Operand: null,
// Check for input by user
	Wait_Second_Operand: false,
// Hold the operator
	operator: null,
};

// Modify values whenever buttons are clicked

function Input_Digit(digit) {
	const { Display_Value, Wait_Second_Operand } = Calculator;
// check if "Wait_Second_Operand" is true and sets "Display_value to the key it was clicked on"
	if ( Wait_Second_Operand === true ) {
		Calculator.Display_Value = digit;
		Calculator.Wait_Second_Operand = false;
	} else {
// Overwrite "Display_Value" if current value is 0, otherwise adds on
		Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
	}
}

// Handle Decimal points

function Input_Decimal(dot) {
// Safeguard against glitches caused by accidental clicking 
	if ( Calculator.Wait_Second_Operand === 'true' ) return;
	if ( !Calculator.Display_Value.includes(dot)) {
// telling the calculator to add a decimal point
		Calculator.Display_Value += dot;
	}
}

// Handle Operators

function Handle_Operator(Next_Operator) {
	const { First_Operand, Display_Value, operator } = Calculator;
// When operator key is pressed, we convert the current number displayed on the screen into a number and store that number into the first operand 
	const Value_of_Input = parseFloat(Display_Value);
// Check if an operator already exists and if "Wait_second_operand is true, then update the operator and exit from the function"
	if (operator && Calculator.Wait_Second_Operand) {
		Calculator.operator = Next_Operator;
		return;
	}
	if (First_Operand == null) {
		Calculator.First_Operand = Value_of_Input;
	} else if (operator) {
		const Value_Now = First_Operand || 0;
		let result = Perfrom_Calculaton[operator] (Value_Now, Value_of_Input);
// add fixed amount of numbers after decimal
		result = Number(result).toFixed (9);
		// remove trailing 0's
		result = (result *1).toString();
		Calculator.Display_Value = parseFloat(result);
		Calculator.First_Operand = parseFloat(result);
	}
	Calculator.Wait_Second_Operand = true;
	Calculator.operator = Next_Operator;
}

const Perfrom_Calculaton = {
	'/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
	'*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
	'+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
	'-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
	'=': (First_Operand, Second_Operand) => First_Operand = Second_Operand
};

function Calculator_Reset() {
	Calculator.Display_Value = '0';
	Calculator.First_Operand = null;
	Calculator.Wait_Second_Operand = false;
	Calculator.operator = null;
}

function Update_Display(){
	const display = document.querySelector('.calculator_screen');
	display.value = Calculator.Display_Value;
}

Update_Display();
// Monitor button clicks
const keys = document.querySelector('.calculator_keys');
keys.addEventListener('click', (event) => {
	const { target } = event;
	if (!target.matches('button')) {
		return;
	}
	if (target.classList.contains('operator')){
		Handle_Operator(target.value);
		Update_Display();
		return;
	}
	if (target.classList.contains('decimal')){
		Input_Decimal(target,value);
		Update_Display();
		return;
	}
	if (target.classList.contains('all_clear')){
		Calculator_Reset();
		Update_Display();
		return;
	}
	Input_Digit(target.value);
	Update_Display();	
})