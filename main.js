/*

// Old Hero with typing text - for future reference

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
*/

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
        growingBar.style.width = '50%';
    } else {
        growingBar.style.width = '10%';
    };
}, 1000)

// Projects dynamic adding

const projects = [{
        projectName: "Valencia Gallery",
        imgSrc: "./figures/valencia-city-gallery-view.png",
        pageSrc: "./projects/gallery-grid/gallery.html",
        technologyUsed: ["HTML", " CSS"],
        projectGroup: "Front-end",
        objectives: "As someone learning Front-end technologies, I was blown away with CSS grid styles and had to make my own project where I can put my new knowledge into practice. Hence I created simple grid gallery with pictures of the city where I am based - Valencia"
    },
    {
        projectName: "Calculator",
        imgSrc: "./figures/calculator-view.png",
        pageSrc: "./projects/calculator/calculator.html",
        technologyUsed: ["HTML", " CSS", " JavaScript"],
        projectGroup: "Front-end",
        objectives: "I couldn't wait until I reach level to create calculater. It was great project to put my JavaScript to test and show that I am able to create simple app in front-end."
    },
    {
        projectName: "Language app Demo",
        imgSrc: "./figures/quiz-view.png",
        pageSrc: "./projects/Spanish-quizz-intermediate/spanish-quiz-app.html",
        technologyUsed: ["HTML", " CSS", " JavaScript"],
        projectGroup: "Front-end",
        objectives: "As a person who loves language learning, I wanted to create simple app demo that can possible serve as a starting point for a future learning app. I focused on rendering informaion from front-end stored object, gathering information about the user input and finally use that information for evaluation of the multiple questions."
    },
    {
        projectName: "Joke CRUD App",
        imgSrc: "./figures/joke-generator-view.png",
        pageSrc: "./projects/joke-generator/joke-generator.html",
        technologyUsed: ["HTML", " CSS", " JavaScript", " Node.js", " Express.js", " Git"],
        projectGroup: "Back-end",
        objectives: "I created a simple CRUD app to demonstrate my undestanding of HTTP requests. The app will generated random joke from a database. User can add jokes into the database and also delete them."
    },
    {
        projectName: "Log In",
        imgSrc: "./figures/log-in-view.png",
        pageSrc: "./projects/log-in/log-in.html",
        technologyUsed: ["HTML", " CSS", " JavaScript", " Node.js", " Express.js", " Git"],
        projectGroup: "Back-end",
        objectives: "This simple log in page was created after I went through course on autorization and authetification. It is still in progress."
    }
    ]

console.log("hello, this is a test");

const redirect = function(src) {
    window.location.href = src;
 }

 const projectsSection = document.getElementById('wrap-projects');

 
 for (let i = 0; i < projects.length; i++) {
    const projectNew = document.createElement('div');
    projectNew.classList.add("project-div");
    if (projects[i].projectGroup === "Front-end") {
        projectNew.classList.add("project-front-end");
    } else if (projects[i].projectGroup === "Back-end") {
        projectNew.classList.add("project-back-end");
    }

    const projectGroup = document.createElement('p');
    projectGroup.className = "project-group";
    projectGroup.innerHTML = projects[i].projectGroup;
    
    
    projectsSection.appendChild(projectNew);
    projectNew.appendChild(projectGroup);

    const projectSubDivLeft = document.createElement('div');
    projectSubDivLeft.className = "project-sub-div-left";

    const projectTitle = document.createElement('h3');
    projectTitle.className = "project-title";

    const projectView = document.createElement('div');
    projectView.className = "project-view";
    projectView.addEventListener('click', () => {
        redirect(projects[i].pageSrc);
    })

    const githubLink = document.createElement('p');
    githubLink.className = "git-hub-link";

    const projectSubDivRight = document.createElement('div');
    projectSubDivRight.className = "project-sub-div-right";

    const projectDescription = document.createElement('p');
    projectDescription.className = "project-description";

    const projectObjectives = document.createElement('p');
    projectDescription.className = "project-objectives";

    projectNew.appendChild(projectSubDivLeft);
    projectNew.appendChild(projectSubDivRight);

    projectSubDivLeft.appendChild(projectTitle);
    projectTitle.innerHTML = projects[i].projectName;

    projectSubDivLeft.appendChild(projectView);
    
    projectView.setAttribute("style", `background-image: url(${projects[i].imgSrc})`);

    projectSubDivRight.appendChild(projectDescription);
    projectDescription.innerHTML = `<span class="bold">Technology:</span> ${projects[i].technologyUsed}`;

    projectSubDivRight.appendChild(projectObjectives);
    projectObjectives.innerHTML = `<span class="bold">Objectives:</span> ${projects[i].objectives}`;

    /*
    projectSubDivRight.appendChild(githubLink);
    githubLink.innerHTML = "<a href=''>GitHub Code</a>"; */


 }
/*
 const testingDiv = document.createElement('div');
 testingDiv.className = "testing-div";
 testingDiv.addEventListener('click', () => {
    redirect("empty-project-page.html");
 });
 projectsSection.appendChild(testingDiv);
 testingDiv.innerHTML = "<p>Hello</p>"; */

 




