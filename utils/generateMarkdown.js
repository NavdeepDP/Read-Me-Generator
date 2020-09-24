// function to generate markdown for README
function generateMarkdown(data) {
var imageLink="";
var lincenseSiteLink="";
var badge="";

if(data.license === "MIT")
{
  imageLink="https://img.shields.io/badge/License-MIT-yellow.svg";
  lincenseSiteLink="https://opensource.org/licenses/MIT";
  badge =`[![License](${imageLink})](${lincenseSiteLink})`;
  
}
else if(data.license === "GNU GPL v3")
{
   imageLink="https://img.shields.io/badge/License-GPLv3-blue.svg";
   lincenseSiteLink="https://www.gnu.org/licenses/gpl-3.0";
   badge =`[![License](${imageLink})](${lincenseSiteLink})`;
}
else if(data.license === "Apache 2.0")
{
  imageLink="https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  lincenseSiteLink="https://opensource.org/licenses/Apache-2.0";
  badge =`[![License](${imageLink})](${lincenseSiteLink})`;
}
else if(data.license === "BSD 3")
{
   imageLink="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
   lincenseSiteLink="https://opensource.org/licenses/BSD-3-Clause";
   badge =`[![License](${imageLink})](${lincenseSiteLink})`;
}
else if(data.license === "Mozilla Public License 2.0")
{
   imageLink="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
   lincenseSiteLink="https://opensource.org/licenses/MPL-2.0";
   badge =`[![License](${imageLink})](${lincenseSiteLink})`;
}
else if(data.license === "The zlib/libpng License")
{
   imageLink="https://img.shields.io/badge/License-Zlib-lightgrey.svg";
   lincenseSiteLink="https://opensource.org/licenses/Zlib";
   badge =`[![License](${imageLink})](${lincenseSiteLink})`;
}

  return `
# ${data.title}
${badge}
[![Generic badge](https://img.shields.io/badge/GitHub-Repo-<COLOR>.svg)](https://github.com/${data.username}/${data.repoName})

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
This product is ${data.license} licensed.

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
generateMarkdownFunction:  generateMarkdown
};
