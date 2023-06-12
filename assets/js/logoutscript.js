// For Login Purpose
var key = localStorage.getItem("code");

if (key == "secretKey") {

} else {
    window.location.href = "login.html";
}
// For Login Purpose //


var a = localStorage.setItem("code", "logout");
localStorage.clear();
window.location.href = "login.html";