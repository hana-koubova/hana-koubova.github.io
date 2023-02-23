const outputDiv1 = document.getElementById('h1-hello');
const outputDiv2 = document.getElementById('h2-aspiring');

const txt1 = "Hi, I'm Hana";
const txt2 = "aspiring developer";

let i = 0;
let j = 0;

const intervalId1 = setInterval(function() {
    outputDiv1.innerHTML += txt1[i];
    i++;

    if (i === txt1.length) {
        clearInterval(intervalId1);
    }
}, 100);


setTimeout(() => { const intervalId2 = setInterval(function() {
    outputDiv2.innerHTML += txt2[j];
    j++;

    if (j === txt2.length) {
        clearInterval(intervalId2);

    }
}, 120); }, 1400);

