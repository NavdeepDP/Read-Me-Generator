
var inquirer = require("inquirer");
var fs = require("fs");
var gMarkDown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title of the project: ",
        name: "title"

    },
    {
        type: "input",
        message: "Project Description: ",
        name: "description"

    },
    {
        type: "input",
        message: "Installation Steps: ",
        name: "installation"

    },
    {
        type: "input",
        message: "Usage Information: ",
        name: "usage"

    },
    {
        type: "list",
        message: "License:",
        choices: ["Apache 2.0",
            "BSD 3",
            "MIT",
            "GNU GPL v3",
            "Mozilla Public License 2.0",
            "The zlib/libpng License",
            "None"
        ],
        name: "licence"

    },
    {
        type: "input",
        message: "Contribution Guideline: ",
        name: "contribution"

    },
    {
        type: "input",
        message: "Test Instructions: ",
        name: "test"

    },
    {
        type: "input",
        message: "GitHub Username: ",
        name: "username"

    },
    {
        type: "input",
        message: "Email: ",
        name: "email"

    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {

        if (err)
            throw err;
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);

        const markDownResponse = gMarkDown.generateMarkdownFunciton(response);

        writeToFile("README-Generated.md", markDownResponse);

    }).catch(function (err) {
        throw err;
    });

}

// function call to initialize program
init();

