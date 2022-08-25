// BOM = Browser Object Model --> Window Object

// window.alert || window.prompt || window.confirm

console.log(window);

// window.alert("Guten Morgen!");

// ==============================

// Window Size

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// For Internet Explorer

// document.documentElement.clientWidth
// document.body.clientWidth

// ==============================
// Window Screen

// console.log(window.screen.height);
// console.log(window.screen.width);

// console.log(window.screen.availHeight);
// console.log(window.screen.availWidth);

// ==============================
// window.open

// let myWindow

// function openWindow() {
//     myWindow = window.open("https://www.google.de");
// }

// function closeWindow() {
//     myWindow.close();
// }

// ==============================
// onload

// function myLoad() {
//     console.log("Is loaded");
// }

// window.onload = myLoad();

// ==============================
// scrollTo(xpos, ypos)

// document.querySelector('.scroll').addEventListener('click', () => {
//     console.log("scroll works");
//     window.scrollTo(0, 1000);
// })

// ==============================
// window location

// console.log(window.location);

// window.location.reload();
// window.location.replace("https://www.google.de");

// ==============================
// JS Timing Events

//setTimeout & setInterval

// setTimeout(function, millisekunden, arg1, arg2, ....)

// setTimeout(function myFunction() {
//     console.log("start in 3 secs");
//     alert("Hallöchen");
// }, 3000);

let startButton = document.querySelector('.start');
let div = document.querySelector('div');
let leftPos = 0;

let move = () => {
    leftPos += 10;
    div.style.left = `${leftPos}px`;
    if (leftPos < 200) {
        setTimeout(move, 1000);
    }
};

startButton.addEventListener('click', move);

// ================================

// setInterval(function, millisekunden)

let timer = () => {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

let timerId = setInterval(timer, 1000);

let stopButton = document.querySelector('.stop');

stopButton.addEventListener('click', () => {
    console.log("Stop timerId");
    clearInterval(timerId);
});