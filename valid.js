var username = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailError = document.getElementById('email_error');
var passError = document.getElementById('pass_error');

var emailError = document.getElementById('email_error');
var passError = document.getElementById('pass_error');

var forgotEmail = document.getElementById('forgotEmail');
var forgotMobile = document.getElementById('forgotMobile');

username.addEventListener('input', emailVerify);
password.addEventListener('input', passVerify);

var forgotMessage = document.getElementById('forgotMessage')

function validated() {
    // Define the valid username-password pairs
    var validCredentials = [
        { email: 'raundalkarabhiraj@gmail.com', password: '7447614078' },
        { email: 'raundalkar11@gmail.com', password: '7666650168' },
        { email: 'a', password: 'a' },
        // Add more username-password pairs as needed
        { email: 'agaltemanisha21@gmail.com', password: '9975728621' },
        { email: 'user2@example.com', password: 'password2' }
    ];

    // Check if the entered credentials match any valid pair
    var isValid = validCredentials.some(function (pair) {
        return pair.email === username.value && pair.password === password.value;
    });

    if (isValid) {
        // If valid, return true to submit the form
        return true;
    } else {
        // If not valid, display error messages and prevent form submission
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";
        emailError.style.display = "block";
        passError.style.display = "block";
        username.focus();
        return false;
    }
}

function emailVerify() {
    if (username.value.length >= 1) {
        username.style.border = "1px solid silver";
        emailError.style.display = "none";
        return true;
    }
}

function passVerify() {
    if (password.value.length >= 1) {
        password.style.border = "1px solid silver";
        passError.style.display = "none";
        return true;
    }
}
function showForgotPassword() {
    // Hide the login container
    document.getElementById('loginContainer').style.display = 'none';
    
    // Show the forgot password container
    document.getElementById('forgotContainer').style.display = 'block';

    // Display a message with the registered email and mobile number
    forgotMessage.innerHTML = "username is the registered email: Example@gmail.com " + username.value +
                              "<br>password is the registered mobile number: Your Mobile Number"; // Replace with the actual logic to retrieve mobile number
    forgotMessage.style.display = 'block';
}

function goBack() {
    // Show the login container
    document.getElementById('loginContainer').style.display = 'block';
    
    // Hide the forgot password container
    document.getElementById('forgotContainer').style.display = 'none';

    // Clear the displayed message
    forgotMessage.style.display = 'none';
}