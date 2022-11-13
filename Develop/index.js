// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type:'input',
        message: 'Give a brief description of your project',
        name: 'description',
    },
    {
        type:'input',
        message: 'How do you install your app? Please be specific!',
        name: 'installation',
    },
    {
        type:'input',
        message: 'List your collaborators and their github portfolios.',
        name: 'credit',
    },
    {
        type:'list',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache 2.0', 'N/A', 'GNU GPL v3.0', 'BSD 2-Clause License' ],
        name: 'license',
    },
    {
        type:'input',
        message: 'Enter how to test your application',
        name: 'test',
    },
    {
        type:'input',
        message: 'If they have additional questions, put either your email or github username',
        name: 'contact',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(answers => {
        console.log(JSON.stringify(answers, null, ''))
        writeToFile(Readme.md, generateMarkdown(answers))
    })
};

// Function call to initialize app
init();
