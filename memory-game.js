// Memory game - how many numbers in a row can you remember?

let randomNumbersArr = [];

const initialNumbersFunction = () => {
    randomNumbersArr = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 9);
        //let newNumber = randomNumber;
        randomNumbersArr.push(randomNumber);
    }
    console.log(randomNumbersArr);
    return randomNumbersArr;
};

// To initiate the game

const startGameBut = document.getElementById('memory-game-start');
const enterNumbersBut = document.getElementById('submitInput');
const goButton = document.getElementById('go');

const appearAfterStart = document.getElementById("appear-after-start");
const numbersArray = document.getElementById('numbers-arr-par');

const heading1 = document.getElementById('heading1');
const heading2 = document.getElementById('heading2');


const initialNumbers = initialNumbersFunction();
let roundNumber = 1;
let numberOfNumbers = 3;
let clickCounter = 0;

function changeButtonStartToReset() {
    if (clickCounter === 0) {
        startGameBut.innerHTML = "Reset";
    }
};

function heading1Change() {
    //if (clickCounter === 0) {
        heading1.innerHTML = "Round " + roundNumber;
        //roundNumber++;
    //}
};

function heading2Change() {
    //if (clickCounter === 0) {
        heading2.innerHTML = "Number of digits: " + numberOfNumbers;
        //numberOfNumbers++;
    //}
};


function enterNumbers() {
    appearAfterStart.style.visibility = "visible";
};

function enterNumbersDissapear() {
    appearAfterStart.style.visibility = "collapse";
};

function goButtonAppear() {
    goButton.style.visibility = 'visible';
};

function goButtonDissapear() {
    goButton.style.visibility = 'collapse';
};

function numbersArrDissapear() {
    numbersArray.style.visibility = 'collapse';
};

function clearInputField() {
    document.getElementById('userInputNumbers').value='';
};


function resetGame() {
    if (clickCounter > 0) {
        console.log('click counter trigger')
        let roundNumber = 1;
        let numberOfNumbers = 3;
        let randomNumbersArr = [];
        heading1.innerHTML = "Round " + roundNumber;
        heading2.innerHTML = "Number of digits: " + numberOfNumbers;
        clickCounter = 0;
        initialNumbersFunction();
        numbersArray.innerHTML = randomNumbersArr;
        enterNumbersDissapear();
        clearInputField();
        numbersArray.style.visibility = "visible";
    }
}


function numbersArr() {
    let i = 0;
    const intervalNumbersAppear = setInterval(function() {
        numbersArray.innerHTML += randomNumbersArr[i];
        i++;
        clickCounter++;
        //console.log(clickCounter);
    
        if (i === randomNumbersArr.length) {
            clearInterval(intervalNumbersAppear);
        }
    }, 500);
};

function getInputValue() {
    console.log("test logging");
    let userInput = document.getElementById('userInputNumbers').value;
    let userInputConvert = userInput.split('').map(Number);

    let userInputStr = JSON.stringify(userInputConvert);
    let randomArrayStr = JSON.stringify(randomNumbersArr);

    //let userInputStr = userInputConvert.join('').toString();
    //let randomArrayStr = randomNumbersArr.join('').toString();

    console.log(userInputStr);
    console.log(randomArrayStr);
    
    if (userInputStr === randomArrayStr) {
        randomNumbersArr.push(Math.floor(Math.random() * 9));
        roundNumber++;
        numberOfNumbers++;
        numbersArray.style.visibility = "visible";
        numbersArray.innerHTML = "Correct!";
        setTimeout(() => {
            numbersArray.innerHTML = "";
            clearInputField();
            heading1Change();
            heading2Change();
            setTimeout(numbersArr(), 4000);
            setTimeout(enterNumbersDissapear(), 3000);
            setTimeout(goButtonAppear(), 5000);
        }, 2000);
        
        

    } else {
        //console.log("testing logging");
        numbersArray.style.visibility = "visible";
        numbersArray.innerHTML = "Game Over!";
    } 
};



startGameBut.addEventListener('click', changeButtonStartToReset);
startGameBut.addEventListener('click', heading1Change);
startGameBut.addEventListener('click', heading2Change);
startGameBut.addEventListener('click', goButtonAppear);


startGameBut.addEventListener('click', numbersArr);

goButton.addEventListener('click', enterNumbers);
goButton.addEventListener('click', numbersArrDissapear);
goButton.addEventListener('click', goButtonDissapear);

enterNumbersBut.addEventListener('click', getInputValue);

startGameBut.addEventListener('click', resetGame);

