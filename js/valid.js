const form = document.querySelector('.section-two .form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const firstName = form['firstname'].value;
	const lastName = form['lastname'].value;
	const email = form['email'].value;
	const password = form['password'].value;
	
	if (firstName == null || firstName === '') {
		addErrorTo('firstname', 'First Name cannot be empty');
	} else if (!isValidFirst(firstName)) {
		addErrorTo('firstname', 'The First Name must be at least 2 to 15 characters');
	} else {
		removeErrorFrom('firstname');
	}

	if (lastName == null || lastName === '') {
		addErrorTo('lastname', 'Last Name cannot be empty');
	} else if (!isValidLast(lastName)) {
		addErrorTo('lastname', 'The Last Name must be at least 2 to 20 characters');
	} else {
		removeErrorFrom('lastname');
	}
	
	if (password == null || password === '') {
		addErrorTo('password', 'Password cannot be empty');;
	} else if (!isValidPass(password)) {
		addErrorTo('password', 'The password must be of 3 to 10 characters and at least one number');
	} else {
		removeErrorFrom('password');
	}
	
	if (email == null || email === '') {
		addErrorTo('email', 'Email cannot be empty');
	} else if (!isValidEmail(email)) {
		addErrorTo('email', 'Please provide a valid email');
	} else {
		removeErrorFrom('email');
	}
});

function addErrorTo(field, message) {
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const msg = formControl.querySelector('.alert-msg');
	msg.innerText = message;
}

function removeErrorFrom(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}

//regular expressions

function isValidFirst(firstName) {
	var re = /^([a-zA-Z]){2,15}$/;
	return re.test(String(firstName).toLowerCase());
}

function isValidLast(lastName) {
	var re = /^([a-zA-Z]){2,20}$/;
	return re.test(String(lastName).toLowerCase());
}

function isValidPass(password) {
	var re = /^(?=.*\d).{3,10}$/;
	return re.test(String(password).toLowerCase());
}

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
