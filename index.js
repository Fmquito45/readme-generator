// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project titile.\n',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short discription explaning the what, why, and how of your project. Use the following questions as a guide: \n What was your motivation? \n Why did you build this project? \n What problem does it solve? \n What did you learn?\n',
    },
    {
        type: 'input',
        name: 'install',
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
        choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'N/A'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Include guidelines for others to contribute.\n', 
    },
    {
        type: 'input',
        name: 'tests',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('ReadMe successfully generated!!');
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            const readMeMarkdown = generateMarkdown(responses);
            writeToFile('README.md', readMeMarkdown);
        })
}

// Function call to initialize app
init();
