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
        fs.writeFile('./dist/index.html', init(answer), function (err) {
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
        icon = '<img alt="Github logo" src="../license-icons/dist/64x64/mit.png" width="64" height="64">';
    }
    if (answer.license === 'Apache-2.0') {
        icon = '<img alt="Github logo" src="../license-icons/dist/64x64/apache.png" width="64" height="64">';
    }
    if (answer.license === 'GPL-3.0') {
        icon = '<img alt="Github logo" src="../license-icons/dist/64x64/gpl.png" width="64" height="64">';
    }
    if (answer.license === 'BSD-2-Clause' || answer.license === 'BSD-3-Clause' || answer.license === 'BSD-4-Clause') {
        icon = '<img alt="Github logo" src="../license-icons/dist/64x64/bsd.png" width="64" height="64">';
    }
    if (answer.license === 'None') {
        icon = '';
        answer.license = 'no license';
    }

    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>README file</title>
            <style>
                * {
                    margin: 0;
                }
                header {
                    background-color: rgb(128, 238, 57);
                    text-align: center;
                    font-size: 30px;
                }
                body {
                    background-color: rgb(214, 219, 223);
                }
                main {
                    margin-top: 10px;
                }
                main section {
                    height: 175px;
                    width: 85%;
                    margin-left: 1%;
                }
                section h2 {
                    text-decoration: underline;
                }
                section h3 {
                    font-weight: normal;
                }
                section p {
                    margin-top: 10px;
                    font-size: 21px;
                    font-family: 'Monotype Corsiva','Apple Chancery','ITC Zapf Chancery','URW Chancery L';
                }
                #image {
                    margin-top: -1375px;
                    margin-left: 1200px;
                    width: 75px;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>${answer.title}</h1>
            </header>
            <main>
                <section>
                    <h2>Description</h2>
                    <p>${answer.description}</p>
                </section>
                <section>
                    <h2>Table of Contents</h2>
                    <h3><a href="#installation">Installation</a></h3>
                    <h3><a href="#usage">Usage</a></h3>
                    <h3><a href="#license">License</a></h3>
                    <h3><a href="#contributing">Contributing</a></h3>
                    <h3><a href="#test">Tests</a></h3>
                    <h3><a href="#questions">Questions</a></h3>
                </section>
                <section>
                    <h2 id="installation">Installation</h2>
                    <p>${answer.requirements}</p>
                </section>
                <section>
                    <h2 id="usage">Usage</h2>
                    <p>${answer.instructions}</p>
                </section>
                <section>
                    <h2 id="license">License</h2>
                    <p>This application is covered under ${answer.license}.</p>
                </section>
                <section>
                    <h2 id="contributing">Contributing</h2>
                    <p>${answer.guidelines}</p>
                </section>
                <section>
                    <h2 id="test">Tests</h2>
                    <p>${answer.test}</p>
                </section>
                <section>
                    <h2 id="questions">Questions</h2>
                    <p>GitHub username: ${answer.github}</p>
                    <p>For more information, I can be reached at: ${answer.email}</p>
                    <p>To see the repository for my project: <a href="${answer.link}">click here</a>.</p>
                    <p>To see my GitHub profile <a href="https://github.com/${answer.github}">click here</a>.</p>
                </section>
                <section id="image">
                    ${icon}
                </section>
            </main>
        </body>
    </html>`;
}



