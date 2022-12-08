const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

function Team() {
    initializeTeam() {
        inquirer
        .prompt({
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
        })
        .then(({ name }) => {
            this.manager = new Manager(name);
        })
    }
}

module.exports = Team; 