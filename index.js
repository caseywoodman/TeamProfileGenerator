const inquirer = require("inquirer");
const fs = require("fs");
// ---------------------------------------------- NODE COMMAND PROMPTS -----------------------------------------------------

inquirer
  .prompt([
    // Prompt for team manager’s name, employee ID, email address, and office number
    {
      type: "input",
      message: "What is your Manager's Name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is your Manager's Employee ID?",
      name: "managerID",
    },
    {
      type: "input",
      message: "What is your Manager's Email Address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is your Manager's Office Number?",
      name: "managerNumber",
    },
    // Prompt menu to choose Engineer, Intern or Finish

    {
      type: "list",
      message: "Add Engineer or Intern, or are you finished",
      choices: ["ADD ENGINEER", "ADD INTERN", "FINISHED"],
      name: "mainMenu",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const parseHTML = generateHTML(answers);
    // Write to File
    fs.writeFile("team.html", parseHTML, (err) => (err ? console.error(err) : console.log("Success!")));
  });

// SELECT ENGINEER: engineer’s name, ID, email, and GitHub username
// Prompt menu to choose Engineer, Intern or Finish

// SELECT INTERN: intern’s name, ID, email, and school
// Prompt menu to choose Engineer, Intern or Finish

// ----------------------------------------------- GENERATE HTML ------------------------------------------------------------
const generateHTML = ({ managerName, managerID, managerEmail, managerNumber }) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
</head>

<body>
    <div>${managerName}</div>
    <div>${managerID}</div>
    <div>${managerEmail}</div>
    <div>${managerNumber}</div>
</body>

</html>`;
