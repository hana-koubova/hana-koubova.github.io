// A day predictor program

// The choice of wrods

const dayAdjectivePos = ["great", "shiny", "the best day of your life"];
const dayAdjectiveNeg = ["shitty", "terrible", "the worst day of your life"];

const randomNounPos = ["sun and rainbow", "coffee for free", "compliments"];
const randomNounNeg = ["spit in your face", "mud and rain", "unexpected bills"];

const dayChangePos = ["even better", "super social", "warmer and happier"];
const dayChangeNeg = ["even worse", "dark and cold", "very lonely"];

const personGeneral = ["boss", "mom", "crush"];

const personActionPos = ["hug you and sing a song for you", "give you some extra money just because you are so awesome", "take you out for lunch"];
const personActionNeg = ["slap you", "shout at you for being so terribel person", "complain to you all day and you will have to listen"];

const doThisPos = ["Go out with your friends", "Treat yourself with spa", "Buy yourself a new car"];
const doThisNeg = ["Go hide yourself", "Sell a kidney", "Go get drunk alone"];

const eveningPrognosePos = ["be followed by paparrazi cause they love you", "have too much money for yourself", "get even pretier"];
const eveningPrognoseNeg = ["die alone", "get shoutet on by random strangers", "get bulied again"];

const nicknamePos = ["Dancing Queen", "Love of everyone's life", "Pretty"];
const nicknameNeg = ["Loser", "Sucker", "Stupid"];

const positiveDay = [dayAdjectivePos, randomNounPos, dayChangePos, personGeneral, personActionPos, doThisPos, eveningPrognosePos, nicknamePos];
const negativeDay = [dayAdjectiveNeg, randomNounNeg, dayChangeNeg, personGeneral, personActionNeg, doThisNeg, eveningPrognoseNeg, nicknameNeg];


// What day is it - negative or positive?

const isDayPositive = () => {
    let num = Math.floor(Math.random() * 2);
    //console.log(number);
    if (num === 0 ) {
        return false;
    } else {
        return true;
    }
};

//Random Number Generator to create array of 8 numbers (to fillthe gaps in the final text)

const randomNumGenerator = () => {
    const randomNumbers = [];
    for (let i = 0; i < 8; i++) {
        let number = Math.floor(Math.random() * 3);
        randomNumbers.push(number);
    }
    return randomNumbers
};

//Final Day predictor generator

const dayPrognoseGenerator = (func1, func2) => {
    let arrayOfWords = func2();
    //console.log(arrayOfWords);
    
    if (func1 == true) {
        return `This day will be ${positiveDay[0][arrayOfWords[0]]}. Be ready for some ${positiveDay[1][arrayOfWords[1]]}. Once you get through noon, it will get ${positiveDay[2][arrayOfWords[2]]}. Your ${positiveDay[3][arrayOfWords[3]]} will probably ${positiveDay[4][arrayOfWords[4]]}. ${positiveDay[5][arrayOfWords[5]]} tonight, otherwise you will ${positiveDay[6][arrayOfWords[6]]}.\n\n Good luck, ${positiveDay[7][arrayOfWords[7]]}!`;
    } else if (func1 == false) {
        return `This day will be ${negativeDay[0][arrayOfWords[0]]}. Be ready for some ${negativeDay[1][arrayOfWords[1]]}. Once you get through noon, it will get ${negativeDay[2][arrayOfWords[2]]}. Your ${negativeDay[3][arrayOfWords[3]]} will probably ${negativeDay[4][arrayOfWords[4]]}. ${negativeDay[5][arrayOfWords[5]]} tonight, otherwise you will ${negativeDay[6][arrayOfWords[6]]}.\n\n Good luck, ${negativeDay[7][arrayOfWords[7]]}!`;
    }

};

// display prediction on the page

function predictionDisplay() {
    document.getElementById('prediction-txt').innerHTML = dayPrognoseGenerator(isDayPositive(), randomNumGenerator);
}

document.getElementById('get-prediction').addEventListener('click', predictionDisplay)


// button clicked changes

function buttonChange() {
    document.getElementById('get-prediction').innerHTML = "Get New Prediction";
}

document.getElementById('get-prediction').addEventListener('click', buttonChange);



