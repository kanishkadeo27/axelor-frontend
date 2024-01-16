function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function setError(id, error) {
    nameElement = document.getElementById(id).innerHTML = error;
}
function validateForm() {
    var returnValue = true;
    clearErrors();

    var name = document.forms['myForm']["username"].value;
    console.log(pass);
    if (name.length == 0) {
        setError("userError", "**username cannot be blank");
        returnValue = false;
    }
    if (name.length < 7) {
        setError("userError", "**length of username is too short");
        returnValue = false;
    }


    var pass = document.forms['myForm']["password"].value;
    console.log(pass);

    if (pass == "") {
        setError("passError", "**password cannot be blank");
        returnValue = false;
    }
    if (pass.length < 8) {
        setError("passError", " **minimum length of password should be 8 characters");
        returnValue = false;
    }
    if (pass.length > 15) {
        setError("passError", " **maximum length of password is 15 characters");
        returnValue = false;
    }

    let regexDigit = /\d/

    if (!regexDigit.test(pass)) {
        setError("passError", "**password should have atleast one digit")
        returnValue = false;
    }
    let regexUpper = /[A-Z]/

    if (!regexUpper.test(pass)) {
        setError("passError", "**password should have atleast one uppercase letter")
        returnValue = false;
    }
    return false;
}