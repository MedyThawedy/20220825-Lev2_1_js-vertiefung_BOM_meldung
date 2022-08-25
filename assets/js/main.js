/*
Schreibe eine Funktion die beim Start, die Zahlen runter zählt.
Schau Dir die Ergebnisvorschau an.

Der HTML und CSS Code befindet sich im Kommentar.
Nutze 
window.onload
setInterval()
clearInterval()
getElementsByClassName()/getElementById()
if, else if
*/

let i = 10;
const btn = document.querySelector('button');
let counter = document.getElementById('count');
let msg = document.getElementsByClassName('message');
let myInterval;

const fnStart = () => {
    myInterval = setInterval(myTimer, 1000);
    console.log(counter);
}

function myTimer() {
    console.log(i);
    if (i <= 10 && i >= 0) {
        counter.innerHTML = i;
    } else {
        msg[0].style.display = "none";
        clearInterval(myInterval);
    }
    i--;
}

window.onload = fnStart();



