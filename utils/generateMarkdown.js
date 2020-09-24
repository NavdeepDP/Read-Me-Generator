// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of contents
* [Title](#Title)
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Contact at:

Email: ${data.email}

Github: [GitHub Link](https://github.com/${data.username})

`;
}

module.exports = {
generateMarkdownFunciton:  generateMarkdown
};
