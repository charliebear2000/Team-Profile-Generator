// required node packages
const fs = require('fs');
const inquirer = require('inquirer');

//  team profiles needed for this file
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage.js');

//  team array
const teamData = [];

//  manager prompts
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
   ])
      .then(({ name, id, email, officeNumber }) => {
         
         const manager = new Manager(name, id, email, officeNumber);

         teamData.push(manager);
         console.log(manager);
      })
};

// engineer and intern prompts
const promptTeam = () => {
   
   return inquirer.prompt([

      {
         type: 'list',
         name: 'teamMember',
         message: 'What would you like to do next?',
         choices: ['Add Engineer', 'Add Intern']
      },
      {
         type: 'input',
         name: 'name',
         message: "What is the employee's name?",
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
         message: "What is the employee's email?",
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
            if (usernameInput) {
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
         default: false
      },
      
   ])

   //  employee data
   .then(({ name, id, email, teamMember, github, school, addMember})  => {

      let employee;

      if (teamMember === 'Add Engineer') {
         employee = new Engineer (name, id, email, github);
         console.log(employee);
      } 

      if (teamMember === 'Add Intern') {
         employee = new Intern (name, id, email, school);
         console.log(employee);
      }

      // employee data is added to team array
      teamData.push(employee);
      console.log(teamData);

      if (addMember) {
         return promptTeam(teamData);
      } else {
         return teamData;
      } 

   });
   
};

// writes the HTML file
const writeFile = data => {
   
   fs.writeFile('./dist/index.html', data, err => {
      
      if (err) {
         console.log(err);
         
         return;

      } else {
         console.log('team profile has been created!')
      }
   });
};

// functions are run to prompt user and to generate the HTML page
promptUser()
   .then(promptTeam)
   .then(teamData => {
      return generatePage(teamData);
   })

   .then(pageHTML => {
      return writeFile(pageHTML);
   })
   .catch(err => {
      console.log(err);
      const teamPage = generatePage(err);
      writeFile(teamPage);
   });
