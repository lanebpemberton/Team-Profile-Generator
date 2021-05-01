//import employee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//import inquirer package to gather command line information
const inquirer = require('inquirer');
//require file system to generate html
const fs = require('fs');
//create generated html file path
const generatedHtmlFilePath = './dist/TeamProfile.html'
//global array of objects that holds team members
let teamMembers = [];
//setup functions that write data to html

//create inquire questions
/*
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/

//first set of command prompt inquiries
inquirer
  .prompt([
    //declaring my list of questions here
      {
        name:"managerName",
        type:"input",
        message:"Enter team manager's name",
      },
      {
        name:"managerID",
        type:"input",
        message:"Enter team manager's employee ID",
      },
      {
        name:"managerEmail",
        type:"input",
        message:"Enter team manager's email",
      },
      {
        name:"managerOfficeNumber",
        type:"input",
        message:"Enter team manager's office number",
      },
      {
          name:"additionalTeamMember",
          type:"list",
          message: "Select team members to add",
          choices:["Engineer", "Intern"]
      },
  ])
  .then(answers => {
    //first create new file (overwrite existing if file exists)
    fs.writeFileSync(generatedHtmlFilePath,"");


  })
  .catch(error => {
      //boiler plate error handling from inquire
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


function addEngineer()
{
inquirer
.prompt([
    //declaring my list of questions here
    {
        name:"internName",
        type:"input",
        message:"Enter intern's name",
    },
    {
        name:"internID",
        type:"input",
        message:"Enter intern's employee ID",
    },
    {
        name:"internEmail",
        type:"input",
        message:"Enter intern's email",
    },
    {
        name:"internSchool",
        type:"input",
        message:"Enter intern's school",
    },
    {
        name:"additionalTeamMember",
        type:"list",
        message: "Select team members to add",
        choices:["Engineer", "Intern", "Exit"]
    },
])
.then(answers => {
    //create new intern
    let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    //add to global array
    teamMembers.push(intern);
    //evaluate additional team member
    if(answers.additionalTeamMember === "Engineer")
    {
        //call add engineer prompts
        addEngineer();
    }else if(answers.additionalTeamMember === "Intern")
    {
        //call add intern prompts
        addIntern();
    }else
    {
        //finish with asking prompts and generate html
        generateHTML();
    }

})
.catch(error => {
    //boiler plate error handling from inquire
    if(error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
    } else {
    // Something else went wrong
    }
});
}

//call this as many times as interns need to be added
function addIntern()
{
inquirer
.prompt([
    //declaring my list of questions here
    {
        name:"internName",
        type:"input",
        message:"Enter intern's name",
    },
    {
        name:"internID",
        type:"input",
        message:"Enter intern's employee ID",
    },
    {
        name:"internEmail",
        type:"input",
        message:"Enter intern's email",
    },
    {
        name:"internSchool",
        type:"input",
        message:"Enter intern's school",
    },
    {
        name:"additionalTeamMember",
        type:"list",
        message: "Select team members to add",
        choices:["Engineer", "Intern", "Exit"]
    },
])
.then(answers => {
    //create new intern
    let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    //add to global array
    teamMembers.push(intern);
    //evaluate additional team member
    if(answers.additionalTeamMember === "Engineer")
    {
        //call add engineer prompts
        addEngineer();
    }else if(answers.additionalTeamMember === "Intern")
    {
        //call add intern prompts
        addIntern();
    }else
    {
        //finish with asking prompts and generate html
        generateHTML();
    }

})
.catch(error => {
    //boiler plate error handling from inquire
    if(error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
    } else {
    // Something else went wrong
    }
});
}

//loop through team members array and generate html
function generateHTML()
{

}

//do something with answers and write to html