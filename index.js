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
//setup functions that write data to html

//create inquire questions
/*
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/

inquirer
  .prompt([
    //declaring my list of questions here
      {
        name:"managerName",
        type:"input",
        message:"Enter team manager's name",
      },
      {
          name:"license",
          type:"list",
          message: "Select what type of license you're project",
          choices:["GNU GPLv3", "MIT"]
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

//do something with answers and write to html