// const { createPromptModule } = require("inquirer");

const generateTeam = team => {
    const generateManager = manager => {
        return `
            <div>
            <div>
                    <h2 class="name"> ${manager.getName()} </h2>
                    <h3 class="role"> <i> </i> ${manager.getRole()}</h3>
                </div>
                <div>
                    <ul>
                        <li class="id"> ID: ${manager.getId()}</li>
                        <li class="email" Email: <a href="mailto: ${manager.getEmail()}></a>></li>
                        <li class="office_n> Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>    
    `;
    }

const generateEmployee = employee => {
    return `
    <div>
    <div>
            <h2 class="name"> ${employee.getName()} </h2>
            <h3 class="role"> <i> </i> ${employee.getRole()}</h3>
         </div>
         <div>
            <ul>
                <li class="id"> ID: ${employee.getId()}</li>
                <li class="email" Email: <a href="mailto: ${employee.getEmail()}></a>></li>
            </ul>
        </div>
    </div>  
    `;
}

const generateEngineer = engineer => {
    return `
    <div>
    <div>
            <h2 class="name"> ${engineer.getName()} </h2>
         </div>
         <div>
            <ul>
                <li class="id"> ID: ${engineer.getId()}</li>
                <li class="email" Email: <a href="mailto: ${engineer.getEmail()}></a>></li>
                <li class="office_n"> Office number: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div> 
    `;
}

const generateIntern = intern => {
    return `
    <div>
    <div>
            <h2 class="name"> ${intern.getName()} </h2>
         </div>
         <div>
            <ul>
                <li class="id"> ID: ${intern.getId()}</li>
                <li class="email" Email: <a href="mailto: ${intern.getEmail()}</a></li>
                <li class="office_n"> Office number: ${intern.getSchool()}</li>
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