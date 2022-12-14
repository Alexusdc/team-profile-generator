//make sure to put in the notes section did review with instructional staff

const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const render = require("./src/pageTemplate")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team-page.html");

const teamMembers = [];

function buildTeam(){
    // create the output directory if the output path doesnt exist
    // if (!fs.existsSync(OUTPUT_DIR)) {
    //     fs.mkdirSync(OUTPUT_DIR)
    // }
    console.log(teamMembers)
    // fs.writeFileSync('./dist/team.html', render(teamMembers), "utf-8");
    fs.writeFileSync('./dist/team-page.html', `
    <!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" src="./style.css"></link>
    <title>My Team</title>
</head>
<body>
    <div class="box">
        <div>
            <div class="employee-card">
    `);
    for (let i = 0; i < teamMembers.length; i++) {
        console.log(teamMembers[i])
        
        fs.appendFileSync('./dist/team-page.html', `
        <div>
        <div class="name-box">
                <h2 class="name"> ${teamMembers[i].getName()} </h2>
             </div>
             <div>
                <ul class="list-group">
                    <li class="id"> ID: ${teamMembers[i].id}</li>
                    <li class="email"> Email: <a href="mailto: ${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                    <li class="special">  ${teamMembers[i].special}</li>
                </ul>
            </div>
        </div> 
        `
        
        )
    }
    fs.appendFileSync('./dist/team-page.html', `
    </div>
    </div>
</div>
</body>
</html>`)
    // console.log(render(teamMembers))
}

function initializeTeam() {
    function createManager(){
        console.log("Please build your team")
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
        }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            manager.special = answers.managerOfficeNumber
            teamMembers.push(manager);
           return createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([ {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I dont want to add any more members"
            ]
        }
    ]).then (userChoice => {
        switch (userChoice.memberChoice){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
    }

    function addEngineer(){
        inquirer.prompt([ {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github?",
        }

    ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            engineer.special = answers.engineerGithub
            teamMembers.push(engineer);
           return createTeam();
        });
        }

    function addIntern(){
        inquirer.prompt([ {
            type: "input",
            name: "internName",
            message: "What is the Intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "What is the interns's ID?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        intern.special = answers.internSchool
        teamMembers.push(intern);
        return createTeam();
    })    
}
createManager();

}
initializeTeam();