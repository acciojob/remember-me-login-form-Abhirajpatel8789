let btn = document.querySelector("#submit");
let check = document.querySelector("#checkbox");
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let exist_btn = document.querySelector("#existing");

exist_btn.style.display = "none";

// ✅ Show button on page load if credentials exist in localStorage
if (localStorage.getItem("username")) {
    exist_btn.style.display = "block";
}

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    alert("Logged in as " + username);
    if (check.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        exist_btn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        exist_btn.style.display = "none";
    }
});

// ✅ Fixed: closing }); was missing
exist_btn.addEventListener("click", function () {
    let savedUsername = localStorage.getItem("username");
    alert("Logged in as " + savedUsername);
});