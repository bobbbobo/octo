document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate a user check (for demo, assume a pre-defined user)
    const storedUsername = 'user123';
    const storedPassword = 'password123';

    // Check credentials
    if (username === storedUsername && password === storedPassword) {
        // Successful login
        window.location.href = 'welcome.html';  // Redirect to a "welcome" page
    } else {
        // Failed login
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
});
