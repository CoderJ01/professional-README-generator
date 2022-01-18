// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'Enter your GitHub username', 'Enter a description for your README',
'Enter installation requirements for your README', 'Enter information on how to use the application', 'Enter guidelines on how other users can contribute to the project',
'Enter test instructions for the application', 'Enter a GitHub repository link of your project', 'Enter your email address', 'Chose a license for your application',
'Enter the title of your project'];

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
                    console.log('You need to enter a GitHub repository link');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[10],
            validate: function (titleInput) {
                if (titleInput) {
                    return true;
                } 
                else {
                    console.log('You need to enter a project title');
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
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause', 'None']
        },
    ])
    .then(function (answer) {
        // Function call to initialize app
        fs.writeFile('./dist/README.md', init(answer), function (err) {
            if (err) throw err;
          
            console.log('Portfolio complete! Check out index.html to see the output!');
        });
    });
}

promptDeveloper();

// TODO: Create a function to initialize app
function init(answer) {

    var icon = '';

    if (answer.license === 'MIT') {
        icon = '![Alt text](../license-icons/dist/64x64/mit.png?raw=true)';
    }
    if (answer.license === 'Apache-2.0') {
        icon = '![Alt text](../license-icons/dist/64x64/apache.png?raw=true)';
    }
    if (answer.license === 'GPL-3.0') {
        icon = '![Alt text](../license-icons/dist/64x64/gpl.png?raw=true)';
    }
    if (answer.license === 'BSD-2-Clause' || answer.license === 'BSD-3-Clause' || answer.license === 'BSD-4-Clause') {
        icon = '![Alt text](../license-icons/dist/64x64/bsd.png?raw=true)';
    }
    if (answer.license === 'None') {
        icon = '';
        answer.license = 'no license';
    }

    return `# ${answer.title}

    ${icon}

    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Tests](#tests)
    5. [Questions](#questions)
    
    ## Installation
    ${answer.requirements}
    
    ## Usage
    ${answer.instructions}
    
    ## License
    This application is covered under ${answer.license}.
    
    ## Contributing
    ${answer.guidelines}
    
    ## Tests
    ${answer.test}
    
    ## Questions
     * GitHub username: ${answer.github}
     * For more information, I can be reached at ${answer.email}.
     * To see the repository for my project [click here](${answer.link}).
     * To see my GitHub profile [click here](https://github.com/${answer.github}).`;
}



