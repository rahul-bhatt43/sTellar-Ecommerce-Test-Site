// For Login Purpose
var key = localStorage.getItem("code");

if (key == "secretKey") {
    alert("Already Registered!");
    window.location.href = "home.html";
} else {
    // window.location.href = "register.html";
}
// For Login Purpose //


function signup() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if ((username != "") && (pass != "") && (email != "")) {
        // if ((pass) == (email)) {
        localStorage.setItem("username1", username);
        localStorage.setItem("pass1", pass);
        localStorage.setItem("email1", email);
        // }
        // alert("Thanks for registering!", window.location = "login.html");
        window.location.href = "login.html";
        alert("Thanks for registering!");

    }

}