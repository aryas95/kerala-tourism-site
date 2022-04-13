const form = document.getElementById("signupform");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const error = document.getElementsByClassName("error");
const fullname = document.getElementById("fullname");
function validate() {
    var email = document.getElementById("email");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    var phone = document.getElementById("phone");
    var regexpph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var regexppass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])?[A-Za-z\d@#$!%*?&-]{8,}$/;

    if(fullname.value.trim()=== ""){

        alert("fullname cannot be empty");
        return false;
    }
    else if (email.value.trim() === "") {

        alert("email cannot be empty");
        return false;
    }
    else if (!regexp.test(email.value)) {

    alert("invalid email format");
    }
    else if (phone.value.trim()==="") {

        alert("phone no cannot be empty");
     }
    else if (!regexpph.test(phone.value)) {

        alert("invalid phone no, maximum 10 numbers");
     }
 
    else if (password.value.trim() ===""){

    alert("password cannot be empty");
    }
    else if (!regexppass.test(password.value)){

        alert("Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        
    }
    else if(password2.value.trim()===""){

        alert("confirm password cannot be empty");
        return false;
    }
     else if(password2.value === password.value)  
    {   
    //   alert("Passwords match");  
      return true;
    } 
    else if(password2.value !== password.value)  
    {   
      alert("Passwords doesnot match");
      return false ;
    } 
    else {
        return true;
    }
}

form.addEventListener('submit', function (event) {
    
    if (!validate()) {
        
        event.preventDefault();
    }
});

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var pwd = document.getElementById("password");
        if (pwd.value.length == 0) {
            strength.innerHTML = 'password strength';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
}

