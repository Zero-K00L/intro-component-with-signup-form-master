const inputField = document.querySelector('.input');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');

// Each error Icon
const errorIconFirstName = document.querySelector('.icon-1');
const errorIconLastName = document.querySelector('.icon-2');
const errorIconEmail = document.querySelector('.icon-3');
const errorIconPassword = document.querySelector('.icon-4');

// Each input field
const firstNameInput = document.querySelector('.first-name');
const lastNameInput = document.querySelector('.last-name');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

// Each error message
const errorMessageFirstName = document.querySelector('.error-message-1');
const errorMessageLastName = document.querySelector('.error-message-2');
const errorMessageEmail = document.querySelector('.error-message-3');
const errorMessagePassword = document.querySelector('.error-message-4');

const form = document.querySelector('.form');
const submitBtn = document.querySelector('.form-btn');

const trialSection = document.querySelector('.trial-section');
const bottomSpace = document.querySelector('.bottom-space');

// Clears input fields when the page is loaded or refreshed
document.addEventListener('DOMContentLoaded', function() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
});

// Checks for errors in user input and prevents submission if errors are present
submitBtn.addEventListener('click', function(event) {
    if(firstNameInput.value.trim() === '') {
        displayError(errorIconFirstName, errorMessageFirstName, firstNameInput);
        event.preventDefault();
    }

    if(lastNameInput.value.trim() === '') {
        displayError(errorIconLastName, errorMessageLastName, lastNameInput);
        event.preventDefault();
    }

    if (!isValidEmail(emailInput.value.trim())) {
        displayError(errorIconEmail, errorMessageEmail, emailInput);
        emailInput.style.color = 'var(--red)';
        event.preventDefault(); 
      }

    const passwordValue = passwordInput.value.trim();
    const passwordError = document.querySelector('.password-length-error');  
    if(passwordInput.value.trim() === '') {
        displayError(errorIconPassword, errorMessagePassword, passwordInput);
        event.preventDefault();
    }

    else if (passwordValue.length < 8) {
        displayError(errorIconPassword, passwordError, passwordInput)
        event.preventDefault();
        passwordInput.style.color = 'var(--red)';
        console.log(passwordValue.length);
    }
});

// Reset errors when the user starts typing
firstNameInput.addEventListener('input', function () {
    resetErrorStyles(errorIconFirstName, errorMessageFirstName, firstNameInput);
});

lastNameInput.addEventListener('input', function () {
    resetErrorStyles(errorIconLastName, errorMessageLastName, lastNameInput);
});

emailInput.addEventListener('input', function () {
    resetErrorStyles(errorIconEmail, errorMessageEmail, emailInput);
});

passwordInput.addEventListener('input', function () {
    resetErrorStyles(errorIconPassword, errorMessagePassword, passwordInput);
});

// Function to reset error styles
function resetErrorStyles(errorIcon, errorMessage, inputField) {
    errorIcon.style.display = 'none';
    errorMessage.style.display = 'none';
    inputField.style.border = ''; 
    inputField.style.color = 'hsl(240, 7.7%, 5.1%)';
    trialSection.style.top = '0px';
    bottomSpace.style.display = 'none';
}

// Function to display error message and icon
function displayError(errorIcon, errorMessage, inputField) {
    errorIcon.style.display = 'block';
    errorMessage.style.display = 'block';
    inputField.style.border = '2px solid var(--red)';
    inputField.setAttribute('placeholder', '');
    trialSection.style.top = '10px';
    bottomSpace.style.display = 'block';
}

// Function to validate email 
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}