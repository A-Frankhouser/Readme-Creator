// Displays a badge depending on the type of license
function renderLicense(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)'
      
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)'

    case ' GNU GPL v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-black.svg)](https://www.gnu.org/licenses/gpl-3.0)'

    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-tan.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  
    default: return ' '
      
  }
}

//Generates the README.md file
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Collaborators](#contributing)
  * [Tests](#test)
  * [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This code is covered under ${data.license} license. For more information click: ${renderLicense(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions 
  [GitHub](https://github.com/${data.githubUsername})
  Please feel free to contact me through email (${data.email}) if you have any questions.
`;
}

module.exports = generateMarkdown;
