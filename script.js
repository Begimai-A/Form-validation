/* eslint-disable indent */

const form = document.querySelector("#form"),
	username = document.querySelector("#username"),
	email = document.querySelector("#email"),
	password = document.querySelector("#password"),
	passwordTwo = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// gets the value of the inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordTwoValue = passwordTwo.value.trim();

	if (usernameValue === "") {
		setErrorFor(username, "Username should not be blank");
	} else {
		setSuccesFor(username);
	}

	if (emailValue === "") {
		setErrorFor(email, "Email should not be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Email is not valid");
	} else {
		setSuccesFor(email);

	}

	if (passwordValue === "") {
		setErrorFor(password, "Password should not be blank");
	} else {
		setSuccesFor(password);

	}
	if (passwordTwoValue === "") {
		setErrorFor(passwordTwo, "Password should not be blank");
	} else if (passwordTwoValue !== passwordValue) {
		setErrorFor(passwordTwo, "Passwords do not match!");
	} else {
		setSuccesFor(passwordTwo);
	}



}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	small.innerText = message;
	formControl.className = "form-control error";

}

function setSuccesFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}