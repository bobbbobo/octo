// Check if the user is already logged in
if (localStorage.getItem('loggedInUser')) {
    // Redirect to the welcome page
    window.location.href = 'welcome.html';
}

// Get form elements
const authForm = document.getElementById('authForm');
const formTitle = document.getElementById('formTitle');
const toggleForm = document.getElementById('toggleForm');
const message = document.getElementById('message');

// Toggle between Sign Up and Log In mode
let isLoginMode = false;

// Add event listener for toggling forms
toggleForm.addEventListener('click', function () {
    isLoginMode = !isLoginMode;
    if (isLoginMode) {
        formTitle.textContent = 'Log In';
        authForm.querySelector('button').textContent = 'Log In';
        toggleForm.textContent = "Don't have an account? Sign Up";
    } else {
        formTitle.textContent = 'Sign Up';
        authForm.querySelector('button').textContent = 'Sign Up';
        toggleForm.textContent = 'Already have an account? Log In';
    }
});

// Handle form submission for both Sign Up and Log In
authForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // If Sign Up mode
    if (!isLoginMode) {
        // Store user credentials in localStorage
        if (!localStorage.getItem(username)) {
            localStorage.setItem(username, password);
            message.textContent = 'Sign Up successful! Please Log In.';
            isLoginMode = true;
            formTitle.textContent = 'Log In';
            authForm.querySelector('button').textContent = 'Log In';
            toggleForm.textContent = "Don't have an account? Sign Up";
        } else {
            message.textContent = 'Username already exists!';
        }
    } 
    // If Log In mode
    else {
        const storedPassword = localStorage.getItem(username);
        if (storedPassword === password) {
            // Successful login
            localStorage.setItem('loggedInUser', username);  // Store logged-in user info
            window.location.href = 'welcome.html';  // Redirect to welcome page
        } else {
            message.textContent = 'Invalid username or password!';
        }
    }
});
