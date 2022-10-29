
const generateMarkdown = ('./utils/generateMarkdown.js');
// function that returns a license badge based on which license is passed in
// WHEN no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'no license found')
  return `https://img.shields.io/badge/<LABEL>-${license}-red>`;
  else {
    return '';
  }
}

// function that returns the license link
// WHEN  no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'no license found') {
    return 'https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba';
  } else {
    return '';
  }
}

// function that returns the license section of README
// WHEN no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'no license found') {
    return `## [License](#table-of-contents)
    the following license is already rendered: ${renderLicenseLink}`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseSection(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ##[Description](#table-of-contents)
  ${data.use}
  
  ##[Installation](#table-of-contents)
  ${data.installation}

  ##[Usage](#table-of-contents)
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)

  ${renderContributingSection(data.confirmContributers, data.contribute)}

  ## [Tests](#table-of-contents)
  ${data.test}

  ## [Questions](#table-of-contents)
`;
}
module.exports = generateMarkdown;
