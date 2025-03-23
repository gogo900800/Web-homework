function checkAnswer() {

    function updateMessage(elementId, isCorrect) {
        let img = document.createElement("img");
        img.src = isCorrect ? "IMG/vi.webp" : "IMG/x.webp";
        img.style.width = "30px";
        img.style.height = "30px";

        let messageElement = document.getElementById(elementId);
        messageElement.innerHTML = "";
        messageElement.appendChild(img);
    }

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
function displayTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    if (hours < 10)
    {
        hours = "0" + hours;
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    document.getElementById("Clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}
function displayDate()
{
    let dateTime = new Date();
    let day = dateTime.getDate();
    let month = dateTime.getMonth()+1;
    let year = dateTime.getFullYear();
    if (day < 10)
    {
        day = "0" + day;
    }
    if (month < 10)
    {
        month = "0" + month;
    }
    document.getElementById("Date").innerHTML = `${day}/${month}/${year}`;
}
window.onload = function () {
    displayTime();
    displayDate();
    setInterval(displayTime, 1000);


    let num1 = parseInt(Math.random() * 10) + 1;
    let num2 = parseInt(Math.random() * 10) + 1;

    document.getElementById("operand1").value = num1;
    document.getElementById("operand2").value = num2;

    let num3 = parseInt(Math.random() * 10) + 1;
    let num4 = parseInt(Math.random() * 10) + 1;

    document.getElementById("operand3").value = num3;
    document.getElementById("operand4").value = num4;

    let num5 = parseInt(Math.random() * 10) + 1;
    let num6 = parseInt(Math.random() * 10) + 1;
    while (num5 % num6 != 0) {
        num5++;
    }
    document.getElementById("operand5").value = num5;
    document.getElementById("operand6").value = num6;

    let num7 = parseInt(Math.random() * 10) + 1;
    let num8 = parseInt(Math.random() * 10) + 1;

    document.getElementById("operand7").value = num7;
    document.getElementById("operand8").value = num8;

    let num9 = parseInt(Math.random() * 10) + 1;
    let num10 = parseInt(Math.random() * 10) + 1;
    while (num9 % num10 != 0) {
        num9++;
    }
    num9 = num9 * (parseInt(Math.random() * 10) + 1);
    document.getElementById("operand9").value = num9;
    document.getElementById("operand10").value = num10;

}