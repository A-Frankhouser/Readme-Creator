const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Questions
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
        type: 'input',
        message: 'How do you use the app?',
        name: 'usage',
    },
    {
        type:'input',
        message: 'How do you install your app? Please be specific!',
        name: 'installation',
    },
    {
        type:'input',
        message: 'Please list the contributing guidelines.',
        name: 'contributing',
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
        message: 'Enter your github username.',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
        // Makes sure there is an @ symbol
        validate: function (val) {
            if (val.includes('@')) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type:'input',
        message: 'List your collaborators and their github portfolios.',
        name: 'credit',
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
    });
};


function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(JSON.stringify(answers, null, ''))
        writeToFile(Readme.md, generateMarkdown(answers))
    })
};

p
init();
