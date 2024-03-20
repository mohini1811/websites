document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "user" && password === "password") {
        // If valid, redirect or display success message
        alert("Login successful!");
        // You can redirect the user to another page using window.location.href = "URL";
    } else {
        // If invalid, display error message
        document.getElementById("error-message").textContent = "Invalid username or password";
    }
});
