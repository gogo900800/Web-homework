// Function to display the current time in HH:MM:SS format
function displayTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    // Add leading zero if hours is less than 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    // Add leading zero if minutes is less than 10
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    // Add leading zero if seconds is less than 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // Display time inside the element with id "Clock"
    document.getElementById("Clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Function to display the current date in DD/MM/YYYY format
function displayDate() {
    let dateTime = new Date();
    let day = dateTime.getDate();
    let month = dateTime.getMonth() + 1; // Months are zero-based, so add 1
    let year = dateTime.getFullYear();

    // Add leading zero if day is less than 10
    if (day < 10) {
        day = "0" + day;
    }
    // Add leading zero if month is less than 10
    if (month < 10) {
        month = "0" + month;
    }
    // Display date inside the element with id "Date"
    document.getElementById("Date").innerHTML = `${day}/${month}/${year}`;
}

// When the window loads, run the following setup code
window.onload = function () {
    // Show current time and date right away
    displayTime();
    displayDate();
    // Update the time every second (1000 milliseconds)
    setInterval(displayTime, 1000);

    // Generate two random numbers (1-10) for addition
    let num1 = parseInt(Math.random() * 10) + 1;
    let num2 = parseInt(Math.random() * 10) + 1;
    document.getElementById("operand1").value = num1;
    document.getElementById("operand2").value = num2;

    // Generate two random numbers (1-10) for subtraction
    let num3 = parseInt(Math.random() * 10) + 1;
    let num4 = parseInt(Math.random() * 10) + 1;
    document.getElementById("operand3").value = num3;
    document.getElementById("operand4").value = num4;

    // Generate two numbers for division ensuring no remainder
    let num5 = parseInt(Math.random() * 10) + 1;
    let num6 = parseInt(Math.random() * 10) + 1;
    while (num5 % num6 != 0) {
        num5++; // Increase numerator until divisible by denominator
    }
    document.getElementById("operand5").value = num5;
    document.getElementById("operand6").value = num6;

    // Generate two random numbers (1-10) for multiplication
    let num7 = parseInt(Math.random() * 10) + 1;
    let num8 = parseInt(Math.random() * 10) + 1;
    document.getElementById("operand7").value = num7;
    document.getElementById("operand8").value = num8;

    // Generate two numbers for modulo operation ensuring num9 > num10 and multiple of num10
    let num9 = parseInt(Math.random() * 10) + 1;
    let num10 = parseInt(Math.random() * 10) + 1;
    while (num9 % num10 != 0) {
        num9++;
    }
    // Multiply num9 by a random number to vary the dividend size
    num9 = num9 * (parseInt(Math.random() * 10) + 1);
    document.getElementById("operand9").value = num9;
    document.getElementById("operand10").value = num10;
}

// Function to update the correctness message (shows check or cross image)
function updateMessage(elementId, isCorrect) {
    let img = document.createElement("img");
    img.src = isCorrect ? "IMG/vi.webp" : "IMG/x.webp"; // Set image based on correctness
    img.style.width = "30px";   // Set image width
    img.style.height = "30px";  // Set image height

    let messageElement = document.getElementById(elementId);
    messageElement.innerHTML = ""; // Clear previous content
    messageElement.appendChild(img); // Add new image
}

// Function to check answers input by the user and update messages and score
function checkAnswer() {
    // Get operands and user input for addition, then check correctness
    let num1 = parseInt(document.getElementById("operand1").value);
    let num2 = parseInt(document.getElementById("operand2").value);
    let result = parseInt(document.getElementById("result").value);
    updateMessage("message", result == num1 + num2);

    // Get operands and user input for subtraction, then check correctness
    let num3 = parseInt(document.getElementById("operand3").value);
    let num4 = parseInt(document.getElementById("operand4").value);
    let result1 = parseInt(document.getElementById("result1").value);
    updateMessage("message1", result1 == num3 - num4);

    // Get operands and user input for division, then check correctness
    let num5 = parseInt(document.getElementById("operand5").value);
    let num6 = parseInt(document.getElementById("operand6").value);
    let result2 = parseInt(document.getElementById("result2").value);
    updateMessage("message2", result2 == num5 / num6);

    // Get operands and user input for multiplication, then check correctness
    let num7 = parseInt(document.getElementById("operand7").value);
    let num8 = parseInt(document.getElementById("operand8").value);
    let result3 = parseInt(document.getElementById("result3").value);
    updateMessage("message3", result3 == num7 * num8);

    // Get operands and user input for modulo, then check correctness
    let num9 = parseInt(document.getElementById("operand9").value);
    let num10 = parseInt(document.getElementById("operand10").value);
    let result4 = parseInt(document.getElementById("result4").value);
    updateMessage("message4", result4 == num9 % num10);

    // Calculate total score by summing correct answers
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
    // Display the final score
    document.getElementById("score").innerText = score;
}
