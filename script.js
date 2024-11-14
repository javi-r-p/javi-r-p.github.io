//Build a function to get the current time, only hours and minutes and put it on a div, also update the div every minute.
function getTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let time = document.getElementById("clock");
    time.innerHTML = h + ":" + m;
}
function updateClock() {
    getTime();
    setInterval(getTime, 3000);
}
document.addEventListener("DOMContentLoaded", function() {
    updateClock();
});
let theme = document.getElementById("css");
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
if ((h <= 8 && m <= 0) || (h >= 18 && m >= 15)) {
    theme.href = "style2.css";
} else {
    theme.href = "style1.css";
}