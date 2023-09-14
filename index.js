// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your project titile',
        name: 'userTitle',
    },
    {
        type: 'input',
        message: 'Provide a short discription explaning the what, why, and how of your project. Use the following questions as a guide: \n What was your motivation? \n Why did you build this project? \n What problem does it solve? \n What did you learn?',
        name: 'description',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
