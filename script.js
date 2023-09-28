const errorBorder = document.querySelector('.input');
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

submitBtn.addEventListener('click', function(event) {
    // reset errors
    resetErrorStyles(); 

    // Validates the input fields

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
        event.preventDefault(); 
      }


    if(passwordInput.value.trim() === '') {
        displayError(errorIconPassword, errorMessagePassword, passwordInput);
        event.preventDefault();
    }
});

// Function to reset error styles
function resetErrorStyles() {
    // Reset the display styles for all error icons and messages
    const allErrorIcons = document.querySelectorAll('.error-icon');
    const allErrorMessages = document.querySelectorAll('.error-message');

    allErrorIcons.forEach(icon => {
        icon.style.display = 'none';
    });

    allErrorMessages.forEach(message => {
        message.style.display = 'none';
    });
}

// Function to display error message and icon
function displayError(errorIcon, errorMessage, inputField) {
    errorIcon.style.display = 'block';
    errorMessage.style.display = 'block';
    inputField.style.border = '2px solid var(--red)';
}

// Function to validate email format
function isValidEmail(email) {
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
}