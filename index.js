const inquirer = require('inquirer');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

function initializeTeam() {
        inquirer
        .prompt([
            {
            type: 'input', 
            name: 'name',
            message: 'Please enter managers name',
        },
        
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee id',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter email',
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number',
        },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            manager.special = answers.managerOfficeNumber
            teamMembers.push(manager);
            // idArray.push(answers.managerId);
           return createTeam();
        });
    }

    function createTeam() {
        inquirer.promt([
            {
            type: 'list',
            name: 'managerChoice',
            message: 'Which of the following would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Finish building team'
            ]}
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
            };
        });
    };

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
        // idArray.push(answers.internId);
        return createTeam();
    })

    createManager();
}

module.exports = initializeTeam; 