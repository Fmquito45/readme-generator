// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'MIT License'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'N/A'){
    return ``
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0'){
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'MIT License'){
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'Mozilla Public License 2.0'){
    return `https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'N/A'){
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache License 2.0'){
    return `## License
    Apache License 2.0`
  } else if (license === 'MIT License'){
    return `## License
    MIT License`
  } else if (license === 'Mozilla Public License 2.0'){
    return `## License
    Mozilla Public License 2.0`
  } else if (license === 'N/A') {
    return `## License
    N/A`
  };
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description
    ${data.description}
  

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How To Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
    ${data.install}

  ## Usage
    ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  

  ## How to Contribute
    ${data.contribute}

  ## Tests
    ${data.tests}

  ## Questions
  The following link is to my github acount:
  (https://github.com/${data.gitHub}) \n
  And if you have any further questions I can be reached out in the following email:
  ${data.email}
`;
}

module.exports = generateMarkdown;
