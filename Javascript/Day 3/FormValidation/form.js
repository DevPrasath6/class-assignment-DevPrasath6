let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let form = document.forms["loginForm"];
    console.log(form.email.value);
    let isValid = validateEmail(form.email.value);
    isValid = validatePassword(form.password.value) && isValid;
    if(isValid ){
        alert("Form submitted successfully!");
    }
});

function validateEmail(emailValue) {
    let reqEmail = document.getElementById("email").value;
    if(!emailValue){
        reqEmail.style.display = "block";
        invalidEmail.style.display = "none";
        return false;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)){
        invalidEmail.style.display = "block";
        reqEmail.style.display = "none";
        return false;
    }
    else{
        reqEmail.style.display = "none";
        invalidEmail.style.display = "none";
        return true;
    }
}

function validatePassword(passwordValue) {
    let reqPassword = document.getElementById("passwordReq").value;
    let invalidPassword = document.getElementById("invalidPassword").value;
    if(!passwordValue){
        reqPassword.style.display = "block";
        invalidPassword.style.display = "none";
        return false;
    }
    else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordValue)){
        invalidPassword.style.display = "block";
        reqPassword.style.display = "none";
        return false;
    }
    else{
        reqPassword.style.display = "none";
        invalidPassword.style.display = "none";
        return true;
    }
}
