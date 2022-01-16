// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const createPage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./util/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'Enter your GitHub username', 'Enter a description',
'Enter installation requirements', 'Enter information on how to use the application', 'Enter guidelines on how other users can contribute to the project',
'Enter test instructions for the appliacation', 'Enter a GitHub link of your project'];

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
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

        console.log(`
    ==================
    Add README prompts
    ==================
    `);

    // If there is no data array property, create one
    if (!data.projects) {
        data.projects = [];
    }

    return inquirer.prompt([
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
        }
    ])
    .then(function (projectData) {
        
        data.projects.push(projectData);
        
        if (data.confirmAddProject) {
            return writeToFile(data);
        }
        else {
            return data;
        }

    });

}

// TODO: Create a function to initialize app
function init() {
    
    promptDeveloper()
    .then(promptProject)
    .then(function (data) {
        return createPage(data);
    })
    .then(function (pageHTML) {
        return writeFile(pageHTML);
    })
    .then(function (writeFileResponse) {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(function (copyFileResponse) {
        console.log(copyFileResponse);
    })
    .catch(function (err) {
        console.log(err);
    });
   
}

// Function call to initialize app
init();

