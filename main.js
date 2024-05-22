
// Projects dynamic adding

const projects = [
    
    {
        projectName: "Job Board Full-stack App",
        imgSrc: "./figures/job-board-view.png",
        pageSrc: "./projects/job_board/job_board_app.html",
        technologyUsed: ["Flask", " Python", " Jinja", " Bootstrap", " HTML", " CSS", " JavaScript"],
        projectGroup: "Web Full-stack",
        mainProject: true,
        objectives: "To build a Full-stack app was my long time dream. In Februery 2024 I finally started with a Job board App."
            + " This project is currently in development."
    },
    {
        projectName: "Fictional Users Generator",
        imgSrc: "./figures/user-generator-view.png",
        pageSrc: "./projects/user_generator/user_generator_app.html",
        technologyUsed: ["Flask", " Python", " Jinja", " Bootstrap", " HTML", " CSS", " JavaScript"],
        projectGroup: "Web Full-stack",
        mainProject: true,
        objectives: "Create app that generates user information and allow you to download data in CSV or Excel."
    },
    {
        projectName: "Frequency analysis of shallow earthquakes",
        imgSrc: "./figures/fk_analysis.png",
        pageSrc: "./projects/fk-analysis/fk-analysis-project.html",
        technologyUsed: ["Python3", " Numpy", " ObsPy", " Pandas"],
        projectGroup: "Data Analysis",
        mainProject: true,
        objectives: "Analysing shallow eathquakes gives better understanding about the near-surface structure."
            + "This is basic concept in seismology, hence seismologist need to transform seismic signal into "
            + "data frames to be able to process them on the computers. Python is often used, together with ObsPy, "
            + "common seismology library."
    },
    //]

    //const fun_projects = [
        {
            projectName: "CSS Art",
            imgSrc: "",
            pageSrc: "./projects/css_art/css_art.html",
            technologyUsed: ["HTML", " CSS"],
            projectGroup: "Web Front-end",
            mainProject: false,
            objectives: "I absolutely love the flexibility of divs and css together. "
                + "To demonstrated understaing of space layout, layers and CSS, "
                + "I decided to create a developer workspace CSS art."
        },
        {
            projectName: "Calculator",
            imgSrc: "./figures/calculator-view.png",
            pageSrc: "./projects/calculator/calculator.html",
            technologyUsed: ["HTML", " CSS", " JavaScript"],
            projectGroup: "Web Front-end",
            mainProject: false,
            objectives: "This is one of my first small projects in Front-end development."
             + " The main goal was to put my JavaScript to test while also keep an eye on details "
             + "such as number formatting or differentiace between user inputs. Great coding workout."
        }
        ]

console.log("hello, this is a test");

const redirect = function(src) {
    window.location.href = src;
 }

 // Main Projects

 const projectsSection = document.getElementById('wrap-projects');
 const projectsFunSection = document.getElementById('wrap-fun-projects');

 
 for (let i = 0; i < projects.length; i++) {
    const projectNew = document.createElement('div');
    projectNew.classList.add("project-div");
    if (projects[i].projectGroup === "Web Front-end") {
        projectNew.classList.add("project-front-end");
    } else if (projects[i].projectGroup === "Web Back-end") {
        projectNew.classList.add("project-back-end");
    } else if (projects[i].projectGroup === "Data Analysis") {
        projectNew.classList.add("project-data-science")
    } else if (projects[i].projectGroup === "Web Full-stack") {
        projectNew.classList.add("project-full-stack")
    }

    //const projectGroup = document.createElement('p');
    //projectGroup.className = "project-group";
    //projectGroup.innerHTML = projects[i].projectGroup;
    
    if (projects[i].mainProject === true) {
        projectsSection.appendChild(projectNew);
    } else {
        projectsFunSection.appendChild(projectNew);
    }
    
    //projectNew.appendChild(projectGroup);

    const projectSubDivLeft = document.createElement('div');
    projectSubDivLeft.className = "project-sub-div-left";

    const projectTitle = document.createElement('h3');
    projectTitle.className = "project-title";

    const projectView = document.createElement('div');
    projectView.className = "project-view";
    //projectView.addEventListener('click', () => {
    //    redirect(projects[i].pageSrc);
    //})

    const projectSubDivRight = document.createElement('div');
    projectSubDivRight.className = "project-sub-div-right";

    const projectDescription = document.createElement('p');
    projectDescription.className = "project-description";

    const projectObjectives = document.createElement('p');
    projectDescription.className = "project-objectives";

    const projectButtonLink = document.createElement('button');
    projectButtonLink.className = "project-link-btn";

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

    projectSubDivRight.appendChild(projectButtonLink);
    projectButtonLink.innerHTML = "See project";
    projectButtonLink.addEventListener('click', () => {
        redirect(projects[i].pageSrc);
    })

 }

 // Fun Projects