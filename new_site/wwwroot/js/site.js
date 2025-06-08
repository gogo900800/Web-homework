// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Main validation function for registration form
function validateRegisterForm() {
    let formlsOK = true;
    // Validate each input field and combine results using logical AND
    formlsOK = CheckEmail() && formlsOK;
    formlsOK = CheckFirstName() && formlsOK;
    formlsOK = CheckLastName() && formlsOK;
    formlsOK = CheckPassword() && formlsOK;
    formlsOK = CheckVerfiyPassword() && formlsOK;
    formlsOK = CheckGender() && formlsOK;
    formlsOK = CheckPrefix() && formlsOK;
    formlsOK = CheckPhone() && formlsOK;
    formlsOK = CheckYearBorn() && formlsOK;
    return formlsOK;  // Return overall form validity
}

// Validation function for update form (fewer fields than registration)
function validateUpdateForm() {
    let formlsOK = true;
    formlsOK = CheckEmail() && formlsOK;
    formlsOK = CheckPassword() && formlsOK;
    formlsOK = CheckVerfiyPassword() && formlsOK;
    formlsOK = CheckPrefix() && formlsOK;
    formlsOK = CheckPhone() && formlsOK;
    return formlsOK;
}

// Helper function: checks if text contains only digits (0-9)
function onlyDigits(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] < '0' || text[i] > '9') {
            return false;  // Found a non-digit character
        }
    }
    return true;  // All characters are digits
}

// Helper function: checks if text contains any Hebrew letters (א to ת)
function hasHebrewChars(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'א' && text[i] <= 'ת') {
            return true;  // Hebrew character found
        }
    }
    return false;  // No Hebrew characters found
}

// Helper function: checks if text contains any invalid/bad characters
function hasBadChars(text) {
    const badChars = "$%^&*()-<>{}[]?";  // Define disallowed characters
    for (let i = 0; i < text.length; i++) {
        if (badChars.includes(text[i])) {
            return true;  // Bad character found
        }
    }
    return false;  // No bad characters found
}

// Validate first name field
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
    // Check for digits in the name
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            document.getElementById("reg_errorfirstName").innerHTML =
                "Digits are not allowed in the first name";
            return false;
        }
    }

    // If all checks passed, clear error message and return true
    document.getElementById("reg_errorfirstName").innerHTML = "";
    return true;
}

// Validate last name field
function CheckLastName() {
    const lnameElement = document.getElementById("reg_lastName");
    const lname = lnameElement.value;

    if (lname.trim() === "") {
        document.getElementById("reg_errorlastName").innerHTML = "Please fill out your last name";
        return false;
    }
    // Check for digits in last name
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

    // Clear error and return true if all checks pass
    document.getElementById("reg_errorlastName").innerHTML = "";
    return true;
}

// Validate email field
function CheckEmail() {
    const emailElement = document.getElementById("reg_Email");
    const email = emailElement.value;

    if (email.length == 0) {
        document.getElementById("reg_errorEmail").innerHTML = "please fill out your email";
        return false;
    }
    // Check length constraints (between 7 and 49 characters)
    if (!(email.length > 6 && email.length < 50) && email.length != 0) {
        document.getElementById("reg_errorEmail").innerHTML = "the email is either below 6 letters or above 50. please change that.";
        return false;
    }
    // Check presence of '@' and only one '@'
    if (email.indexOf('@') == -1) {
        document.getElementById("reg_errorEmail").innerHTML = "missing a '@' in your email.";
        return false;
    }
    if (!(email.indexOf('@') == email.lastIndexOf('@'))) {
        document.getElementById("reg_errorEmail").innerHTML = "you have more then one '@' in your email.";
        return false;
    }
    // Check presence of '.' after '@' and not immediately after '@'
    if ((email.indexOf('.', email.indexOf('@')) == -1) || (email.indexOf('.', email.indexOf('@')) == email.indexOf('@') + 1)) {
        document.getElementById("reg_errorEmail").innerHTML = "missing a '.' in your email. it must be after the '@', but not just after the '@'";
        return false;
    }
    // '.' can't be the last character
    if (email.length - 1 == email.indexOf('.')) {
        document.getElementById("reg_errorEmail").innerHTML = "the '.' can't be in the end of your email.";
        return false;
    }
    // Disallow quotes in email
    if (email.indexOf('"') != -1) {
        document.getElementById("reg_errorEmail").innerHTML = "you have '\"' in your email. change it.";
        return false;
    }
    if (email.indexOf('\'') != -1) {
        document.getElementById("reg_errorEmail").innerHTML = "you have '\'' in your email. change it.";
        return false;
    }
    // Disallow Hebrew letters and bad characters in email
    if (hasHebrewChars(email)) {
        document.getElementById("reg_errorEmail").innerHTML = "Hebrew letters are not allowed in email address";
        return false;
    }
    if (hasBadChars(email)) {
        document.getElementById("reg_errorEmail").innerHTML = "you have one of the following charecters in your email '$%^&*()-<>{}[]?' please change it.";
        return false;
    }
    // All checks passed, clear error and return true
    document.getElementById("reg_errorEmail").innerHTML = "";
    return true;
}

// Validate password field
function CheckPassword() {
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
    // Clear error and return true if all checks pass
    document.getElementById("reg_errorPassword").innerHTML = "";
    return true;
}

// Validate verify password field (must match password)
function CheckVerfiyPassword() {
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

// Validate prefix field (make sure it's not null)
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

// Validate phone number: exactly 7 digits only
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

// Validate gender radio buttons (at least one selected)
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

// Validate birth year: must be between 1950 and current year minus 10
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
