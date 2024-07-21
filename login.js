function login() {
    // Getting username and password from input fields
    let userName = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;
    event.preventDefault(); // Prevent form submission
    // Getting username and password from local storage
    let originalUname = localStorage.getItem("USERNAME");
    let originalPwd = localStorage.getItem("PASSWORD");

    // Checking if username and password are correct
    if (userName === originalUname && pwd === originalPwd) {
        alert("Login Successful");
        window.location.href = "home.html";
    } 
    else if (userName !== originalUname) {
        document.getElementById("error-message").innerHTML = "User Name not found!";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid Username or Password";
    }
}
