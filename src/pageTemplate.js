// const { createPromptModule } = require("inquirer");

const generateTeam = team => {
    const generateManager = manager => {
        return `
            <div>
            <div>
                    <h2> ${manager.getName()} </h2>
                    <h3> <i> </i> ${manager.getRole()}</h3>
                </div>
                <div>
                    <ul>
                        <li> ID: ${manager.getId()}</li>
                        <li Email: <a href="mailto: ${manager.getEmail()}></a>></li>
                        <li> Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>    
    `;
    }

const generateEmployee = employee => {
    return `
    <div>
    <div>
            <h2> ${employee.getName()} </h2>
            <h3> <i> </i> ${employee.getRole()}</h3>
         </div>
         <div>
            <ul>
                <li> ID: ${employee.getId()}</li>
                <li? Email: <a href="mailto: ${employee.getEmail()}></a>></li>
            </ul>
        </div>
    </div>  
    `;
}

const generateEngineer = engineer => {
    return `
    <div>
    <div>
            <h2> ${engineer.getName()} </h2>
         </div>
         <div>
            <ul>
                <li> ID: ${engineer.getId()}</li>
                <li Email: <a href="mailto: ${engineer.getEmail()}></a>></li>
                <li> Office number: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div> 
    `;
}

const generateIntern = intern => {
    return `
    <div>
    <div>
            <h2> ${intern.getName()} </h2>
         </div>
         <div>
            <ul>
                <li> ID: ${intern.getId()}</li>
                <li? Email: <a href="mailto: ${intern.getEmail()}</a></li>
                <li> Office number: ${intern.getSchool()}</li>
            </ul>
        <div>
    <div>
    `;
}
}

//export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
</head>
<body>
    <div>
        <dive>
            <div> ${generateTeam(team)}
            </div>
        </div>
    </div>
    
</body>
</html>
`
}