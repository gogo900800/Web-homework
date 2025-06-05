// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function validateRegisterForm() {

    let formlsOK = true;
    formlsOK = CheckEmail() && formlsOK;
    formlsOK = CheckFirstName() && formlsOK;
    formlsOK = CheckLastName() && formlsOK;
    formlsOK = CheckPassword() && formlsOK;
    formlsOK = CheckVerfiyPassword() && formlsOK;
    formlsOK = CheckGender() && formlsOK;
    formlsOK = CheckPrefix() && formlsOK;
    formlsOK = CheckPhone() && formlsOK;
    formlsOK = CheckYearBorn() && formlsOK;
    return formlsOK;
}
function onlyDigits(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] < '0' || text[i] > '9') { 
            return false;
        }
    }
    return true;
}

function hasHebrewChars(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'א' && text[i] <= 'ת') {
            return true;
        }
    }
    return false;
}


function hasBadChars(text) {
    const badChars = "$%^&*()-<>{}[]?";
    for (let i = 0; i < text.length; i++) {
        if (badChars.includes(text[i])) {
            return true;
        }
    }
    return false;
}

function CheckFirstName() {
    const nameElement = document.getElementById("reg_firstName");
    const name = nameElement.value;

    if (name.trim() === "") {
        document.getElementById("reg_errorfirstName").innerHTML = "Please fill out your name";
        return false;
    }
    if (hasHebrewChars(name)) {
        document.getElementById("reg_errorfirstName").innerHTML = "Hebrew letters are not allowed in name";
        return false;
    }
    if (hasBadChars(name)) {
        document.getElementById("reg_errorfirstName").innerHTML =
            "Name contains invalid characters: $%^&*()-<>{}[]?";
        return false;
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            document.getElementById("reg_errorfirstName").innerHTML =
                "Digits are not allowed in the first name";
            return false;
        }
    }

    document.getElementById("reg_errorfirstName").innerHTML = "";
    return true;
}

function CheckLastName() {
    const lnameElement = document.getElementById("reg_lastName");
    const lname = lnameElement.value;

    if (lname.trim() === "") {
        document.getElementById("reg_errorlastName").innerHTML = "Please fill out your last name";
        return false;
    }

    for (let i = 0; i < lname.length; i++) {
        if (lname[i] >= '0' && lname[i] <= '9') {
            document.getElementById("reg_errorlastName").innerHTML =
                "Digits are not allowed in the last name";
            return false;
        }
    }

    if (hasHebrewChars(lname)) {
        document.getElementById("reg_errorlastName").innerHTML = "Hebrew letters are not allowed in last name";
        return false;
    }
    if (hasBadChars(lname)) {
        document.getElementById("reg_errorlastName").innerHTML =
            "Last name contains invalid characters: $%^&*()-<>{}[]?";
        return false;
    }

    document.getElementById("reg_errorlastName").innerHTML = "";
    return true;
}

function CheckEmail() {
    const emailElement = document.getElementById("reg_Email");
    const email = emailElement.value;


    if (email.length == 0) {
        document.getElementById("reg_errorEmail").innerHTML = "please fill out your email";
        return false;
    }
    if (!(email.length > 6 && email.length < 50) && email.length != 0) {
        document.getElementById("reg_errorEmail").innerHTML = "the email is either below 6 letters or above 50. please change that.";
        return false;
    }
    if (email.indexOf('@') == -1) {
        document.getElementById("reg_errorEmail").innerHTML = "missing a '@' in your email.";
        return false;
    }
    if (!(email.indexOf('@') == email.lastIndexOf('@'))) {
        document.getElementById("reg_errorEmail").innerHTML = "you have more then one '@' in your email.";
        return false;
    }
    if ((email.indexOf('.', email.indexOf('@')) == -1) || (email.indexOf('.', email.indexOf('@')) == email.indexOf('@') + 1)) {
        document.getElementById("reg_errorEmail").innerHTML = "missing a '.' in your email. it must be after the '@', but not just after the '@'";
        return false;
    }
    if (email.length - 1 == email.indexOf('.')) {
        document.getElementById("reg_errorEmail").innerHTML = "the '.' can't be in the end of your email.";
        return false;
    }
    if (email.indexOf('"') != -1) {
        document.getElementById("reg_errorEmail").innerHTML = "you have '\"' in your email. change it.";
        return false;
    }
    if (email.indexOf('\'') != -1) {
        document.getElementById("reg_errorEmail").innerHTML = "you have '\'' in your email. change it.";
        return false;
    }
    if (hasHebrewChars(email)) {
        document.getElementById("reg_errorEmail").innerHTML = "Hebrew letters are not allowed in email address";
        return false;
    }
    if (hasBadChars(email)) {
        document.getElementById("reg_errorEmail").innerHTML = "you have one of the following charecters in your email '$%^&*()-<>{}[]?' please change it.";
        return false;
    }
    document.getElementById("reg_errorEmail").innerHTML = "";
    return true;
}

function CheckPassword()
{
    const passwordElement = document.getElementById("reg_password");
    const pw = passwordElement.value;

    if (pw.length == 0) {
        document.getElementById("reg_errorPassword").innerHTML = "please fill out your password.";
        return false;
    }

    if (pw.length < 8) {
        document.getElementById("reg_errorPassword").innerHTML = "Password too short";
        return false;
    }
    if (hasHebrewChars(pw)) {
        document.getElementById("reg_errorPassword").innerHTML = "Hebrew letters are not allowed in password";
        return false;
    }
    document.getElementById("reg_errorPassword").innerHTML = "";
    return true;
}

function CheckVerfiyPassword()
{
    const passwordElement = document.getElementById("reg_password");
    const pw = passwordElement.value;

    const verpasswordElement = document.getElementById("reg_verifyPassword");
    const verpw = verpasswordElement.value;

    if (verpw == pw) {
        document.getElementById("reg_errorVerifyPassword").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("reg_errorVerifyPassword").innerHTML = "the verifyed password is not the same as the password";
        return false;
    }
}

function CheckPrefix() {
    const prefixElement = document.getElementById("reg_prefix");
    const prefix = prefixElement.value;

    if (prefix == null) {
        document.getElementById("reg_errorPrefix").innerHTML = "please fill out your Prefix attribute";
        return false;
    }
    document.getElementById("reg_errorPrefix").innerHTML = "";
    return true;
}

function CheckPhone() {
    const phone = document.getElementById("reg_phone").value.trim();

    if (!onlyDigits(phone) || phone.length !== 7) {
        document.getElementById("reg_errorPhone").innerHTML =
            "your phone number should be exactly 7 digits.";
        return false;
    }
    document.getElementById("reg_errorPhone").innerHTML = "";
    return true;
}


function CheckGender() {
    const radios = document.getElementsByName('user.Gender');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.getElementById("reg_errorGender").innerHTML = "";
            return true;
        }
    }
    document.getElementById("reg_errorGender").innerHTML = "please fill out your gender.";
    return false;
}

function CheckYearBorn() {
    const birthYearStr = document.getElementById("reg_birthYear").value.trim();

    if (birthYearStr === "") {
        document.getElementById("reg_errorbirthYear").innerHTML =
            "please fill out your birth year.";
        return false;
    }

    const yr = parseInt(birthYearStr, 10);
    const thisYear = new Date().getFullYear();
    if (yr < 1950 || yr > thisYear - 10) {
        document.getElementById("reg_errorbirthYear").innerHTML =
            "no way in hell this is your birth year, please write your real birth year.";
        return false;
    }
    document.getElementById("reg_errorbirthYear").innerHTML = "";
    return true;
}


function updateMessage(elementId, isCorrect) {
    let img = document.createElement("img");
    img.src = isCorrect ? "IMG/vi.webp" : "IMG/x.webp";
    img.style.width = "30px";
    img.style.height = "30px";

    let messageElement = document.getElementById(elementId);
    messageElement.innerHTML = "";
    messageElement.appendChild(img);
}

function checkAnswer() {
    let num1 = parseInt(document.getElementById("operand1").value);
    let num2 = parseInt(document.getElementById("operand2").value);
    let result = parseInt(document.getElementById("result").value);
    updateMessage("message", result == num1 + num2);

    let num3 = parseInt(document.getElementById("operand3").value);
    let num4 = parseInt(document.getElementById("operand4").value);
    let result1 = parseInt(document.getElementById("result1").value);
    updateMessage("message1", result1 == num3 - num4);

    let num5 = parseInt(document.getElementById("operand5").value);
    let num6 = parseInt(document.getElementById("operand6").value);
    let result2 = parseInt(document.getElementById("result2").value);
    updateMessage("message2", result2 == num5 / num6);

    let num7 = parseInt(document.getElementById("operand7").value);
    let num8 = parseInt(document.getElementById("operand8").value);
    let result3 = parseInt(document.getElementById("result3").value);
    updateMessage("message3", result3 == num7 * num8);

    let num9 = parseInt(document.getElementById("operand9").value);
    let num10 = parseInt(document.getElementById("operand10").value);
    let result4 = parseInt(document.getElementById("result4").value);
    updateMessage("message4", result4 == num9 % num10);

    let score = 0;
    if (result == num1 + num2) {
        score++;
    }
    if (result1 == num3 - num4) {
        score++;
    }
    if (result2 == num5 / num6) {
        score++;
    }

    if (result3 == num7 * num8) {
        score++;
    }
    if (result4 == num9 % num10) {
        score++;
    }
    document.getElementById("score").innerText = score;


}
