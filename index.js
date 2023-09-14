// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userTitle',
        message: 'Enter your project titile.\n',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short discription explaning the what, why, and how of your project. Use the following questions as a guide: \n What was your motivation? \n Why did you build this project? \n What problem does it solve? \n What did you learn?\n',
    },
    {
        type: 'input',
        name: 'istallation',
        message: 'What are the steps required to install your project? Provide a command to run or a step-by-step description of how to get the development environment running.\n',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.\n', 
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Include guidelines for others to contribute.\n', 
    },
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Provide commands on how to run them here.\n',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub Username.\n',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address.\n',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
}

// Function call to initialize app
init();
