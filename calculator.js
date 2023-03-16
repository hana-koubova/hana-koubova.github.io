// Simple calculator web app

// declaring the buttons

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
const button0 = document.getElementById('button-0');

const buttonBracketOne = document.getElementById('button-bracket-one');
const buttonBracketTwo = document.getElementById('button-bracket-two');

const buttonDivide = document.getElementById('button-divide');
const buttonTimes = document.getElementById('button-times');
const buttonMinus = document.getElementById('button-minus');
const buttonPlus = document.getElementById('button-plus');

const buttonDot = document.getElementById('button-dot');
const buttonEqual = document.getElementById('button-equal');
const buttonReset = document.getElementById('button-reset');

// declaring other elements

const userInputField = document.getElementById('calc-user-input');
const resultField = document.getElementById('calc-result');

// clicking buttonts, when result does not exist

function numberInput(event) {
    const currentUserInputStr = userInputField.innerHTML;
    const resultStr = resultField.innerHTML;
    //const strTest = currentUserInputStr.toString();
    const lastElement = currentUserInputStr[currentUserInputStr.length-1];
    if (event.target === button1 && resultStr === "0.0") {
        userInputField.innerHTML += "1";
    } else if (event.target === button2) {
        userInputField.innerHTML += "2";
    } else if (event.target === button3) {
        userInputField.innerHTML += "3";
    } else if (event.target === button4) {
        userInputField.innerHTML += "4";
    } else if (event.target === button5) {
        userInputField.innerHTML += "5";
    } else if (event.target === button6) {
        userInputField.innerHTML += "6";
    } else if (event.target === button7) {
        userInputField.innerHTML += "7";
    } else if (event.target === button8) {
        userInputField.innerHTML += "8";
    } else if (event.target === button9) {
        userInputField.innerHTML += "9";
    } else if (event.target === button0) {
        if (currentUserInputStr.length === 0) {
            userInputField.innerHTML += "";
        } else {
        userInputField.innerHTML += "0";
        }
    } else if (event.target === buttonDivide) {
        if (lastElement === "+" || lastElement === "-" || lastElement === "/" || lastElement === "*" || lastElement === ".") {
            userInputField.innerHTML += "";
        } else if (currentUserInputStr.length === 0) {
                userInputField.innerHTML += "";
        } else {
        userInputField.innerHTML += "/";
        }
    } else if (event.target === buttonPlus) {
        if (lastElement === "+" || lastElement === "-" || lastElement === "/" || lastElement === "*" || lastElement === ".") {
            userInputField.innerHTML += "";
        } else {
            userInputField.innerHTML += "+";
        }
    } else if (event.target === buttonMinus) {
        if (lastElement === "+" || lastElement === "-" || lastElement === "/" || lastElement === "*" || lastElement === ".") {
            userInputField.innerHTML += "";
        } else {
            userInputField.innerHTML += "-";
        }
    } else if (event.target === buttonTimes) {
        if (lastElement === "+" || lastElement === "-" || lastElement === "/" || lastElement === "*" || lastElement === ".") {
            userInputField.innerHTML += "";
        } else if (currentUserInputStr.length === 0) {
            userInputField.innerHTML += "";
        }else {
            userInputField.innerHTML += "*";
        }
    }  else if (event.target === buttonBracketOne) {
        userInputField.innerHTML += "(";
    } else if (event.target === buttonBracketTwo) {
        userInputField.innerHTML += ")";
    } else if (event.target === buttonDot) {
        if (lastElement === "+" || lastElement === "-" || lastElement === "/" || lastElement === "*" || lastElement === ".") {
            userInputField.innerHTML += "";
        } else {
            userInputField.innerHTML += ".";
        }
    } else if (event.target === buttonReset) {
        userInputField.innerHTML = "";
        resultField.innerHTML = "0.0";
    }

    // clicking buttons when result already exists

    //typing numbers (and bracket) after result already exist - delete result and starts another calculation
    if (event.target === button1 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "1";
    } else if (event.target === button2 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "2";
    } else if (event.target === button3 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "3";
    } else if (event.target === button4 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "4";
    } else if (event.target === button5 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "5";
    } else if (event.target === button6 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "6";
    } else if (event.target === button7 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "7";
    } else if (event.target === button8 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "8";
    } else if (event.target === button9 && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "9";
    } else if (event.target === button0 && resultStr !== "0.0") {
        userInputField.innerHTML = currentUserInputStr;
        
    } else if (event.target === buttonBracketOne && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = "(";
    }

    //typing operators after result already exist - will take result and make another calculation with it

    if (event.target === buttonTimes && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = resultStr + "*";
    } else if (event.target === buttonDivide && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = resultStr + "/";
    } else if (event.target === buttonPlus && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = resultStr + "+";
    } else if (event.target === buttonMinus && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = resultStr + "-";
    } else if (event.target === buttonDivide && resultStr !== "0.0") {
        resultField.innerHTML = "0.0";
        userInputField.innerHTML = resultStr + "/";
    }


    /*
    // disabled button
    if (lastElement === "+" || lastElement === "-" || lastElement === "/" || lastElement === "*" || lastElement === ".") {
        buttonTimes.disabled = true;
    } else {
        buttonTimes.disabled = false;
    }
    */
}

// handling result (max number of digits)

function manageNumber(number) {
    let numberStr = number.toString();
    let numberArr = numberStr.split("");

    // finding the decimal dot and splitting number into two parts - number and decimals
    const decimalDivider = numberArr.findIndex(element => {
        return element === ".";
    });
    if (decimalDivider === -1) {
        return number;
    } else {
        let numberWhole = numberArr.slice(0, decimalDivider);
        let numberDecimals = numberArr.slice(decimalDivider+1);
        if ((numberWhole.length + numberDecimals.length) < 13) {
            return number;
        } else if (numberWhole.length < 13) {
            let numberOfDecimals = 13 - numberWhole.length;
            console.log("the lenght of whole number is " + numberWhole.length + " and number of decimals should be " + numberOfDecimals);
            return number.toFixed(numberOfDecimals);
        }
    }
}

// equal button function - calculation result, catching errors

function getResult() {
    const currentUserInput = userInputField.innerHTML;

    try {
        let result = eval(currentUserInput);
        resultField.innerHTML = manageNumber(result);
    } catch (e) {
        resultField.innerHTML = "Invalid input";
    }

    } 
    

// Event listeners to each button

button1.addEventListener('click', numberInput);
button2.addEventListener('click', numberInput);
button3.addEventListener('click', numberInput);
button4.addEventListener('click', numberInput);
button5.addEventListener('click', numberInput);
button6.addEventListener('click', numberInput);
button7.addEventListener('click', numberInput);
button8.addEventListener('click', numberInput);
button9.addEventListener('click', numberInput);
button0.addEventListener('click', numberInput);
buttonPlus.addEventListener('click', numberInput);
buttonMinus.addEventListener('click', numberInput);
buttonTimes.addEventListener('click', numberInput);
buttonDivide.addEventListener('click', numberInput);
buttonDot.addEventListener('click', numberInput);
buttonReset.addEventListener('click', numberInput);
buttonBracketOne.addEventListener('click', numberInput);
buttonBracketTwo.addEventListener('click', numberInput);

buttonEqual.addEventListener('click', getResult);
