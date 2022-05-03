const fs = require('fs');
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template.js');

const promptUser = () => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'name',
         message: 'What is the name of the manager for this team?',
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter the manager's name.");
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'id',
         message: "What is the manager's ID?",
         validate: idInput => {
            if (idInput) {
               return true;
            } else {
               console.log('Please enter the ID.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'email',
         message: "What is the manager's email?",
         validate: emailInput => {
            if (emailInput) {
               return true;
            } else {
               console.log('Please enter an email address.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'officeNumber',
         message: "What is the manager's office number?",
         validate: officeInput => {
            if (officeInput) {
               return true;
            } else {
               console.log('Please enter an office number.');
               return false;
            }
         }
      }
   ]);
};

const promptTeam = teamData => {

   // if there is no 'team' array property, create one
   if (!teamData.teams) {
      teamData.teams = [];
   }
   return inquirer.prompt([
      {
         type: 'list',
         name: 'teamMember',
         message: 'What would you like to do next?',
         choices: ['Add Engineer', 'Add Intern', 'Quit Application']
      },
      
      {
         type: 'input',
         name: 'name',
         message: "What is the employee's name?",
         when: (input) => input.teamMember != 'Quit Application',
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter the employee's name.");
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'id',
         message: "What is the employee's ID?",
         when: (input) => input.teamMember != 'Quit Application',
         validate: idInput => {
            if (idInput) {
               return true;
            } else {
               console.log('Please enter the ID.');
               return false;
            }
         }
      } ,
      {
         type: 'input',
         name: 'email',
         message: "What is the employee's email?",
         when: (input) => input.teamMember != 'Quit Application',
         validate: emailInput => {
            if (emailInput) {
               return true;
            } else {
               console.log('Please enter an email address.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'github',
         message: "Please enter the engineer's GitHub username.",
         when: (input) => input.teamMember === 'Add Engineer',
         validate: usernameInput => {
            if(usernameInput) {
               return true;
            } else {
               console.log('Please enter the username.')
            }
         }
      },
      {
         type: 'input',
         name: 'school',
         message: "Please enter the Intern's school.",
         when: (input) => input.teamMember === 'Add Intern',
         validate: schoolInput => {
            if (schoolInput) {
               return true;
            } else {
               console.log('Please enter a school.')
            }
         }
      },
      {
         type: 'confirm',
         name: 'addMember',
         message: 'Do you want to add another team member?',
         when: (input) => input.teamMember != 'Quit Application',
         default: false
      },
      {
         type: 'confirm',
         name: 'confirmTeam',
         message: 'Are you sure you want to quit the application?',
         when: (input) => input.teamMember === 'Quit Application',
         default: false
      }
   ])
   .then(teamArray => {
      teamData.teams.push(teamArray);
      if (teamArray.addMember) {
         return promptTeam(teamData);
      } else {
         return teamData;
      }
   });
}

promptUser()
   .then(promptTeam)
   .then(teamData => {
      console.log(teamData);
   });
   