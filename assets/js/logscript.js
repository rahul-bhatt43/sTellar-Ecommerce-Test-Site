// For Login Purpose
var key = localStorage.getItem("code");

if (key == "secretKey") {
    alert("Already Log-in");
    window.location.href = "home.html";
} else {
    // window.location.href = "login.html";
}
// For Login Purpose //


function login() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var username1 = localStorage.getItem("username1");
    var pass1 = localStorage.getItem("pass1");

    if (username == username1 && pass == pass1) {
        localStorage.setItem("code", "secretKey");
        window.location.href = "home.html";
    }
    else {
        alert("Invalid Credentails, Try to Log-in again.");
        if (username != username1) {
            username.nextElementSibling.textContent = "Username NOT Found";
            setTimeout(() => {
                username.nextElementSibling.textContent = "";
            }, 2000);
        }
        if (pass != pass1) {
            pass.nextElementSibling.textContent = "Password Incorrect";
            setTimeout(() => {
                pass.nextElementSibling.textContent = "";
            }, 2000);
        }

    }

}