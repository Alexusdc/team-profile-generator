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
};


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



module.exports = initializeTeam; 