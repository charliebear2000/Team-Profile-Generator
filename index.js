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
               console.log("Please enter the manager's name");
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
      },
   ])
}

promptUser()