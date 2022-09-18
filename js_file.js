// global varebles
const time_el = document.querySelector('#watch #time');
const start_btn =document.getElementById('start');
const stop_btn =document.getElementById('stop');
const reset_btn =document.getElementById('reset');



let seconds =0;
let interval =null;
 
// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);
 let circle = document.getElementById('circle');
 
// Update the timer
function timer () {
    seconds++;

    // Format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds-(hrs*3600)) / 60);
    let secs =seconds % 60;
    if(secs<10) secs='0'+ secs;
    if(mins<10) mins='0'+ mins;
    if(hrs<10) hrs='0'+ hrs;

    time_el.innerText= hrs+':'+mins+':'+secs;
}
// this start function is the event handelar function to start button 
function start () {
    if(interval) {
        return;
    }
    circle.style.animation = 'border 1s infinite';
    interval = setInterval(timer,1000);
}
// this stop function is the event handelar to the stop button
function stop () {
    clearInterval(interval);
    interval=null;
    circle.style.animationPlayState = 'paused';
}
// this reser function is the event handelar to to the reset function
function reset () {
    stop();
    seconds = 0;
    circle.style.animation = 'border 0s linear';
    time_el.innerHTML = '00:00:00';
}
