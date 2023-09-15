// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache License 2.0'){
    return `## License
    Apache License 2.0`;
  } else if (license === 'MIT License'){
    return `## License
    MIT License`;
  } else if (license === 'Mozilla Public License 2.0'){
    return `## License
    Mozilla Public License 2.0`;
  } else if (license === 'N/A'){
    return `## License
    N/A`;
  };
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
    ${data.description}
  

  ## Table of Contents

  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contribute](#Contribute)
  -[tests](#tests)
  -[Questions](#Questions)

  ## Installation
    ${data.install}

  ## Usage
    ${data.usage}
  
  ${renderLicenseSection(data.license)}
  

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
