const outputDiv1 = document.getElementById('h1-hello');
const outputDiv2 = document.getElementById('h2-aspiring');

const txt1 = "Hi, I'm Hana";
const txt2 = "junior developer";

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


// when  journey bar in the viewport

const growingBar = document.getElementById('journey-bar-full');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const checkIfInViewportInterval = setInterval(function() {
    var isGrowing = isInViewport(growingBar);
    console.log(isGrowing);

    if (isGrowing === true) {
        growingBar.style.width = '30%';
    } else {
        growingBar.style.width = '10%';
    };
}, 1000)


/*
if (isGrowing === false) {
    growingBar.style.width = '10%';
} */

