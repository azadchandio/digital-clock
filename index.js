const hoursEL=document.getElementById("hours")
const minutesEl=document.getElementById("minutes")
const secondsEl=document.getElementById("seconds")
const ampmEl=document.getElementById("ampm")

function UpdateClock(){
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    let ampm = "AM"
    if(hour > 12){
        hour = hour-12
        ampm ="PM"
    }

    hour = hour < 10 ? "0"+ hour : hour;
    minute = minute < 10 ? "0"+ minute : minute;
    second = second < 10 ? "0"+ second : second;
    //what is "?" this not understood

    hoursEL.innerText=hour;
    minutesEl.innerText=minute;
    secondsEl.innerText=second;
    ampmEl.innerText=ampm;

    setTimeout(() => {
        UpdateClock()
    }, 1000);
}
UpdateClock();