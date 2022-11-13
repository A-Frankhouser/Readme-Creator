function renderLicenseSection(license) {
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
