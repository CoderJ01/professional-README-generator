const fs = require('fs');
const firstName = "Jane";
const github = "Janehub";

const createPage = function (firstName, github) {

    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${firstName}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;

}

fs.writeFile('../dist/index.html', createPage(firstName, github), function (err) {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
});