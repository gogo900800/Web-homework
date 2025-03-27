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

    let Name;
    name
    document.getElementById("name").innerHTML = Name;



    //this is from the calculator excersise:
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