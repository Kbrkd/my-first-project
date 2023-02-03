
let password = document.querySelector("#password");
let currentPassword = document.querySelector("#current-password");
let newPassword = document.querySelector("#new-password");
let firstForm = document.querySelector("#first-form");
let secondForm = document.querySelector("#second-form");


firstForm.addEventListener("click", function(event){
    if(event.target.matches('[type="checkbox"]') && event.target.checked === true) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});


secondForm.addEventListener("click", function(event){
    if(event.target.matches('[type="checkbox"]') && event.target.checked === true) {
        currentPassword.type = "text";
        newPassword.type = "text";
    } else {
        currentPassword.type = "password";
        newPassword.type = "password";
    }
});