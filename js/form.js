const form = document.getElementById("form");
const password = document.getElementById("password");
const error = document.getElementsByClassName("error")
function validate() {
    var email = document.getElementById("email");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    var regexppass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])?[A-Za-z\d@#$!%*?&-]{8,}$/;
    if (email.value.trim() === "") {
       alert("email cannot be empty")
        return false;
    }
    else if (!regexp.test(email.value)) {
      alert("invalid email")
    }
    else if (password.value.trim() ===""){

    alert("password cannot be empty");
     }
    else if (!regexppass.test(password.value)){
         alert("invalid password, must contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        }

    else {
        return true;
    }
}

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});



 