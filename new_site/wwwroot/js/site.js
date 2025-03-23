// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*
function validateRegisterForm() {

    let formlsOK = true;
    formlsOK = checkEmail() && formlsOK;
    formlsOK = checkFirstName() && formlsOK;
    formlsOK = checkLastName() && formlsOK;
    formlsOK = checkPassword() && formlsOK;
    formlsOK = checkVerifyPassword() && formlsOK;
    formlsOK = checkTZld() && formlsOK;
    formlsOK = checkPhone() && formlsOK;
    formlsOK = checkYearBorn() && formlsOK;
    return formlsOK;
}
*/
function checkFirstName() {
    return true;
}
function checkLastName()
{
    return true;
}

function checkID()
{
    return true;
}

function hasBadChars(text)
{
    const badChars = "$%^&*()-<>{}[]?";
    for (let i = 0; i < text.length; i++)
    {
        if (badChars.includes(text[i]))
        {
            return true;
        }
    }
    return false;
}


function hasHebrewChars(text)
{
    for (let i = 0; i < text.length; i++)
    {
        if (text[i] >= 'א' && text[i] <= 'ת')
        {
            return true;  
        }
    }
    return false; 
}

function checkEmail() {
    const emailElement = document.getElementById("reg_Email");
    const email = emailElement.value;

    if (email.length == 0) {
        document.getElementById("reg_errorEmail").innerHTML = "Required";
        return false;
    }
    if (!(email.length > 6 && email.length < 50) && email.length !=0) {
        document.getElementById("reg_errorEmail").innerHTML = "the email is either below 6 letters or above 50. please change that.";
        return false;
    }
    if (email.indexOf('@') == -1) 
    {
        document.getElementById("reg_errorEmail").innerHTML = "missing a '@' in your email.";
        return false;
    }
    if (!(email.indexOf('@') == email.lastIndexOf('@')))
    {
        document.getElementById("reg_errorEmail").innerHTML = "you have more then one '@' in your email.";
        return false;
    }
    if ((email.indexOf('.', email.indexOf('@')) == -1) || (email.indexOf('.', email.indexOf('@')) == email.indexOf('@')+1))
    {
        document.getElementById("reg_errorEmail").innerHTML = "missing a '.' in your email. it must be after the '@', but not just after the '@'";
        return false;
    }
    if (email.length - 1 == email.indexOf('.'))
    {
        document.getElementById("reg_errorEmail").innerHTML = "the '.' can't be in the end of your email.";
        return false;
    }
    if (email.indexOf('"') != -1)
    {
        document.getElementById("reg_errorEmail").innerHTML = "you have '\"' in your email. change it.";
        return false;
    }
    if (email.indexOf('\'') != -1)
    {
        document.getElementById("reg_errorEmail").innerHTML = "you have '\'' in your email. change it.";
        return false;
    }
    if (hasHebrewChars(email)) {
        document.getElementById("reg_errorEmail").innerHTML = "Hebrew letters are not allowed in email address";
        return false;
    }
    if (hasBadChars(email))
    {
        document.getElementById("reg_errorEmail").innerHTML = "you have one of the following charecters in your email '$%^&*()-<>{}[]?' please change it.";
        return false;
    }
    document.getElementById("reg_errorEmail").innerHTML = "";
    return true;
}

function checkRadioButtons()
{
    const radioButtons = document.getElementsByName('Gender');
    let isSelected = false;

    for (const radioButton of radioButtons)
    {
        if (radioButton.checked)
        {
            isSelected = true;
            break;
        }
    }
    if (!isSelected)
    {
        return false;
    }
    return true;
}
function checkYearBorn() {
    let birthYear = Document.getElementById("reg_birthYear").value;
    if (isNaN(birthYear)) {
        return false;
    }
    if (parselnt(birthYear) < 1950 && birthYear+10 < dateTime.getFullYear()) {
        return false;
    }
    document.getElementById("reg_errorbirthYear").innerHTML = "";
    return true;
}
function checkPassword()
{
    let password = Document.getElementById("reg_password").value;
    let Capital = false;
    foreach(i in password)
    {
        if(i == i.c)
    }

}
