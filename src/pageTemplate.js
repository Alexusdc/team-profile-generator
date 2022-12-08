// const { createPromptModule } = require("inquirer");

const generateTeam = team => {
    const generateManager = manager => {
        return `
            <div class="card employee-card">
            <div class="card-header">
                    <h2 class="card-title"> ${manager.getName()} </h2>
                    <h3 class="card-title"> <i class="fas fa-mug-hot-mr-2"> <//i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item"> ID: ${manager.getId()}</li>
                        <li class="list-group-item"? Email: <a href="mailto: ${manager.getEmail()}</a></li>
                        <li class="list-group-item"> Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                <div>
            <div>    
    `;
    }

const generateEmployee = employee => {
    return `
    <div class="card employee-card">
    <div class="card-header">
            <h2 class="card-title"> ${employee.getName()} </h2>
            <h3 class="card-title"> <i class="fas fa-mug-hot-mr-2"> <//i> ${employee.getRole()}</h3>
         </div>
         <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${employee.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${employee.getEmail()}</a></li>
            </ul>
        <div>
    <div>  
    `;
}

const generateEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header">
            <h2 class="card-title"> ${engineer.getName()} </h2>
         </div>
         <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${engineer.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${engineer.getEmail()}</a></li>
                <li class="list-group-item"> Office number: ${engineer.getGithub()}</li>
            </ul>
        <div>
    <div> 
    `;
}

const generateIntern = intern => {
    return `
    <div class="card employee-card">
    <div class="card-header">
            <h2 class="card-title"> ${intern.getName()} </h2>
         </div>
         <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${intern.getId()}</li>
                <li class="list-group-item"? Email: <a href="mailto: ${intern.getEmail()}</a></li>
                <li class="list-group-item"> Office number: ${intern.getSchool()}</li>
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
    <div class="container-fluid">
        <dive class="row">
            <div class="team-area col-12 d-flex justify-content-center"> ${generateTeam(team)}
            </div>
        </div>
    </div>
    
</body>
</html>
`
}