// testing questions and aswers

const spanishQuiz = {
     0: {
        0: "Sara piensa _ su novio",
        1: { question: "en", correct: true },
        2: { question: "sobre", correct: false },
        3: { question: "con", correct: false }
        },

    1: {
        0: "Anoche soñé _ mi antigua casa",
        1: { question: "sobre", correct: false },
        2: { question: "de", correct: false },
        3: { question: "con", correct: true }
        },
    
    2: {
        0: "Yo me acuerdo _ ti.",
        1: { question: "a", correct: false },
        2: { question: "de", correct: true },
        3: { question: "por", correct: false }
        },

    3: {
        0: "La chica se acerca _ su profesora.",
        1: { question: "a", correct: true },
        2: { question: "con", correct: false },
        3: { question: "por", correct: false }
        }


}
 
// how many questions in the quiz

let quizLen = Object.keys(spanishQuiz).length;

// declaring relevant fields

const question = document.getElementById('quiz-question');
const optionOne = document.getElementById('label-one');
const optionTwo = document.getElementById('label-two');
const optionThree = document.getElementById('label-three');

const nextButton = document.getElementById('quiz-next');
const resetButton = document.getElementById('quiz-reset');

const quizQuestionField = document.getElementById('quiz-answers');
const pageNumbers = document.getElementById('quiz-page-numbers');

// declare empty array to collect answers

const collectedAnswers = [];

// display first question and options

question.innerHTML = spanishQuiz[0][0];
optionOne.innerHTML = spanishQuiz[0][1].question;
optionTwo.innerHTML = spanishQuiz[0][2].question;
optionThree.innerHTML = spanishQuiz[0][3].question;



// going to the next question and storing the answers
let buttonCounter = 1;
pageNumbers.innerHTML = `${buttonCounter}/${quizLen}`;

const next = function(event) {

    // check if one is selected. If yes, number 1 added to radiosChecked array. If no, number 0 added to the array.

    let radiosChecked = [];

    var radios = document.getElementsByName("quiz-options");
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            radiosChecked.push(1);
        } else {
            radiosChecked.push(0);
        }
    }

    // looking for numer 1 in radiosChecked array

    const isChecked = radiosChecked.findIndex(radio => {
        return radio === 1;
    })

    // if no radio checked, will show alert. Else continue to next question.

    if (isChecked < 0) {
        alert("Choose one option to continue.");

    // collecting number of the asnwer chosen by user for future reference

    } else {
        if (document.getElementById('first-input').checked) {
            collectedAnswers.push(1);
        } else if(document.getElementById('second-input').checked) {
            collectedAnswers.push(2);
        } else if(document.getElementById('third-input').checked) {
            collectedAnswers.push(3);
        }
    
        //clearing the radios when moving to the next question

        document.getElementById('first-input').checked = false;
        document.getElementById('second-input').checked = false;
        document.getElementById('third-input').checked = false;

        // wraped in try to avoid error on the last question

        try {
            question.innerHTML = spanishQuiz[buttonCounter][0];
            optionOne.innerHTML = spanishQuiz[buttonCounter][1].question;
            optionTwo.innerHTML = spanishQuiz[buttonCounter][2].question;
            optionThree.innerHTML = spanishQuiz[buttonCounter][3].question;
            pageNumbers.innerHTML = `${buttonCounter+1}/${quizLen}`;
        } catch(error) {
            console.log(error);
        }
    
        buttonCounter++;

        // Last question in the quiz, button change to Submit

        if (buttonCounter === quizLen) {
            nextButton.innerHTML = "Submit"
        }

        // After submit, the questionary collapses

        if (buttonCounter === (quizLen + 1)) {
            submit();
        }
    }
}

const submit = function() {

    //calculate correct answers

    let correctAnswers = 0;
    
    for (let j = 0; j < quizLen; j++) {

        //defining user answer and corresponding answer from the options

        let userAnswer = collectedAnswers[j];
        let isUserCorrect = spanishQuiz[j][userAnswer].correct;

        //is User asnwer correct?

        if (isUserCorrect == true) {
            correctAnswers++;
        }
    }

    question.style.fontSize = "30px";
    question.innerHTML = "Your score is: " + Math.floor(correctAnswers*100/quizLen) + "%";
    quizQuestionField.remove();

    evaluation();
 
}

// evaluation page creation

const evaluation = function() {

    nextButton.disabled = "true";


    // style the wrap
    const evaluationWrap = document.getElementById("quiz-evaluation");
    evaluationWrap.style.width = "100%";


    // create element to store the evaluation text

    let quizElement = document.createElement("div");
    quizElement.setAttribute("id", "evaluation-div-temporary")
    quizElement.setAttribute("class", "evaluation-form")

    // setting style of quizElement
    quizElement.style.position = "relative";
    quizElement.style.minHeight = "600px";
    quizElement.style.width = "80%";
    quizElement.style.display = "flex";
    quizElement.style.flexDirection = "column";
    quizElement.style.justifyContent = "space-around";
    quizElement.style.alignContent = "center";


    document.getElementById('quiz-evaluation').appendChild(quizElement);
    
    

    // append headlines = questions

    for (let k = 0; k < quizLen; k++) {
        let quizElementQuestion = document.createElement("h3");
        quizElementQuestion.innerHTML = spanishQuiz[k][0];
        quizElementQuestion.style.color = "black";
        quizElementQuestion.style.padding = "10px";
        quizElementQuestion.style.position = "relative";
        quizElement.appendChild(quizElementQuestion);

        let userAnswerNumber = collectedAnswers[k];
        let quizUnorderdList = document.createElement("ul");
        quizElement.appendChild(quizUnorderdList);

        //append answers with colors

        for (let l = 1; l < Object.keys(spanishQuiz[k]).length; l++) {
            let quizElementAnswer = document.createElement("li");
            quizElementAnswer.style.listStylePosition = "inside";
            quizElementAnswer.innerHTML = spanishQuiz[k][l].question;
            quizElementAnswer.style.padding = "5px";
            quizElementAnswer.style.position = "relative";

            // print the correct asnwers in green color

            if (spanishQuiz[k][l].correct == true) {
                quizElementAnswer.style.color = "green";
            }

            // print wrong answers by user in red color

            if (spanishQuiz[k][userAnswerNumber].correct == false && userAnswerNumber === l) {
                quizElementAnswer.style.color = "red";
            } 

            quizUnorderdList.appendChild(quizElementAnswer);
        }
    }

    document.querySelector('footer').style.bottom = "0";
    document.querySelector('footer').style.height = "80px";

}

const resetQuiz = function() {
        location.reload();
}


nextButton.addEventListener('click', next);
resetButton.addEventListener('click', resetQuiz);
