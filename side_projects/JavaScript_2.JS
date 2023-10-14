const form = document.getElementById('jsTestForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeat_password = document.getElementById('repeat_password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});


const setError = (element, message) => {

	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');

}

const setSuccess = element => {

	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');

};

const isValidEmail = email => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validateInput = () => {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const repeat_passwordValue = repeat_password.value.trim();

	if(usernameValue === ''){
		setError(username, "please provide a name");
	} else {
		setSuccess(username);
	}

	if(emailValue === ''){
		setError(email, "please provide an email");
	} else if ( !isValidEmail( emailValue )) {
		setError(email, 'Invalid email');
	} else {
		setSuccess(email);
	}

	if(passwordValue === '') {
		setError(password, 'Please provide a password');
	} else if (passwordValue.length < 8 ) {
		setError(password, 'Must be 8 characters minimum')
	} else {
		setSuccess(password);
	}

	if(repeat_passwordValue === '') {
		setError(repeat_password, 'Please repeat the password');
	} else if (repeat_passwordValue !== repeat_passwordValue) {
		setError(repeat_password,  "passwords don't match");
	} else {
		setSuccess(repeat_password);
	}
};
