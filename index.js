// packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = ('./utils/generateMarkdown.js');

// questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title (required): ',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Project title is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'GithubUsername',
        message: 'Github username (required): ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Github username is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address (required): ',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Valid email address is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'use',
        message: 'What is the projects intended use (required): ',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Project use is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation process (required): ',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Installation process is required.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Selected a license for your project: ',
        choices: ['no license', 'mit', 'apache', 'bsd']
    },
    {
        type: 'confirm',
        name: 'confirmcontributers',
        message: 'Allow other contributers?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide contributing guidelines (required): ',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {                
                console.log('Please enter contributor guidelines.');
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, error => {
        if (error) {
            throw error
        };
        console.log('README.md has been successfully created.')
    });
};

// function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init() 
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeResponse => {
    console.log(writeResponse.message);
})
.catch(error => {
    console.log(error);
})

