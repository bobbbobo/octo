document.addEventListener('DOMContentLoaded', function () {
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

    // State variable to track login or sign up
    let isLoginMode = false;

    // Switch between Sign Up and Log In
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

    // Handle form submission
    authForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // If Sign Up mode
        if (!isLoginMode) {
            // Check if the user already exists
            if (!localStorage.getItem(username)) {
                // Save new user credentials
                localStorage.setItem(username, password);
                message.textContent = 'Sign Up successful! Please log in.';
                // Switch to login mode after successful sign-up
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
                window.location.h
