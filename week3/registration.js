let form = document.forms["registration"];

let usernameInput = form["username"];
let emailInput = form["email"];
let passwordInput = form["password"];
let confirmPasswordInput = form["confirm-password"];

let errors = document.getElementsByClassName("error");

const ERROR_TYPE = {
    USERNAME: 0,
    EMAIL: 1,
    PASSWORD: 2,
    CONFIRM_PASSWORD: 3
}

const EMAIL_FORMAT = /\S+@\S+\.\S+/;

function validateForm(event) {
    event.preventDefault();

    validateUsername();
}

function checkIfInvalid(condition, inputField, errorType, message) {
    if (condition) {
        displayError(inputField, errorType, message);

        return true;
    } else {
        displaySuccess(inputField);
    }
}

function validateUsername() {
    if (usernameInput.value.length <= 0) {
        displayError(usernameInput, ERROR_TYPE.USERNAME, "Username cannot be empty!")

        return false;
    } else {
        displaySuccess(usernameInput);

        return true;
    }
}

function validateEmail() {
    if (emailInput.value.length <= 0) {
        displayError(emailInput, ERROR_TYPE.EMAIL, "Email cannot be empty!")

        return false;
    } else if(!emailInput.value.match(EMAIL_FORMAT)) {
        displayError(emailInput, ERROR_TYPE.EMAIL, "Email must match the standard email format!")

        return false;
    } else {
        displaySuccess(emailInput);

        return true;
    }
}

function validatePassword() {
    if (passwordInput.value.length <= 0) {
        displayError(passwordInput, ERROR_TYPE.PASSWORD, "Password cannot be empty!")

        return false;
    } else if(passwordInput.value.length < 8) {
        displayError(passwordInput, ERROR_TYPE.PASSWORD, "Password must be atleast 8 characters long!")

        return false;
    } else {
        displaySuccess(passwordInput);

        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value.length <= 0) {
        displayError(confirmPasswordInput, ERROR_TYPE.CONFIRM_PASSWORD, "You must enter your password again!")

        return false;
    } else if(confirmPasswordInput.value != passwordInput.value) {
        displayError(confirmPasswordInput, ERROR_TYPE.CONFIRM_PASSWORD, "Passwords do not match!")

        return false;
    } else {
        displaySuccess(confirmPasswordInput);

        return true;
    }
}

function displayError(inputField, errorType, message) {
    inputField.style.border = "2px solid red";

    errors[errorType].innerHTML = message;
    errors[errorType].style.display = "block";

    inputField.focus();
}

function displaySuccess(inputField) {
    inputField.style.border = "2px solid rgb(0, 240, 0)";
}

usernameInput.addEventListener("focusout", validateUsername);
emailInput.addEventListener("focusout", validateEmail)
passwordInput.addEventListener("focusout", validatePassword)
confirmPasswordInput.addEventListener("focusout", validateConfirmPassword)
form.addEventListener("submit", validateForm);