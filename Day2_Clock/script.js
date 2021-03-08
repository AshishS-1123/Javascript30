// get the div that represents second hand
let secondHand = document.getElementById('second-hand');
// get the div that represents minute hand
let minuteHand = document.getElementById('minute-hand');
// get the div that represents hour hand
let hourHand = document.getElementById('hour-hand');

// this function modifies position of all the divs every second
function updateTime()
{
    // get the current time
    let date = new Date();

    // get the seconds, minute and hour from this time
    let currentSeconds = date.getSeconds();
    let currentMinute = date.getMinutes();
    let currentHour = date.getHours();

    // convert the current hour minute and seconds to degrees
    currentSeconds = (currentSeconds / 60) * 360;
    currentMinute= (currentMinute / 60) * 360;
    currentHour = (currentHour / 60) * 360;

    // move the corressponding divs to their new positions
    secondHand.style.transform = `rotate(${currentSeconds}deg)`;
    minuteHand.style.transform = `rotate(${currentMinute}deg)`;
    hourHand.style.transform = `rotate(${currentHour}deg)`;
      

}

// execute the updateTime function every second
setInterval(updateTime, 1000);
