// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const createPage = require('./src/page-template.js');
// const { writeFile, copyFile } = require('./util/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'Enter your GitHub username', 'Enter a description',
'Enter installation requirements', 'Enter information on how to use the application', 'Enter guidelines on how other users can contribute to the project',
'Enter test instructions for the appliacation', 'Enter a GitHub link of your project', 'Enter your email address', 'Chose a license for your application'];

// TODO: Create a function to write README file
const promptDeveloper = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: questions[0],
            validate: function (nameInput) {
              if (nameInput) {
                return true;
              } 
              else {
                console.log('Please enter your name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: questions[1],
            validate: function (gitHubInput) {
              if (gitHubInput) {
                return true;
              } 
              else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[2],
            validate: function (descriptInput) {
                if (descriptInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'requirements',
            message: questions[3],
            validate: function (installInput) {
                if (installInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter installation requirements!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: questions[4],
            validate: function (usageInput) {
                if (usageInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter instructions on how to use the application');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'guidelines',
            message: questions[5],
            validate: function (contrInput) {
                if (contrInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter contribution guidelines');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
            validate: function (testInput) {
                if (testInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter test info');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: questions[7],
            validate: function (linkInput) {
                if (linkInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter a GitHub link');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: questions[9],
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause']
        },
    ])
    .then(function (answer) {
        // Function call to initialize app
        init(answer);
    });
}

promptDeveloper();

// TODO: Create a function to initialize app
function init(answer) {
    console.log(answer);
}




