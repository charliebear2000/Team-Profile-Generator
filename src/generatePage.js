// creates the manager card
const managerCard = function (manager) {
   return `
   
   <div class="col m4">
      <div class="card light-blue darken-3">
         <div class="card-header white-text center-align">
            <h4>${manager.name}</h4>
            <h5>Manager</h5>
         </div>
         <div class="card-content light-blue accent-2">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href= "mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
         </div>
      </div>
   </div>
  `;
}

// creates the engineer card
const engineerCard = function(engineer) {
   return `
   
   <div class="col m4">
      <div class="card light-blue darken-3">
         <div class="card-header white-text center-align">
            <h4>${engineer.name}</h4>
            <h5>Engineer</h5>
         </div>
         <div class="card-content light-blue accent-2">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href= "mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
         </div>
      </div>
   </div>
  `;
}

// creates the intern card
const internCard = function (intern) {
   return `
   
   <div class="col m4">
      <div class="card light-blue darken-3">
         <div class="card-header white-text center-align">
            <h4>${intern.name}</h4>
            <h5>Intern</h5>
         </div>
         <div class="card-content light-blue accent-2">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href= "mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
         </div>
      </div>
   </div>
  `;
}

//  creates the html page
const teamPage = function (teamInfo) {

 return `
 <!DOCTYPE html> 
<html lang="en"> 

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/91a4da6089.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <header>
      <nav class="light-blue darken-4">
         <span class="brand-logo center">My Team</span>
      </nav>
   </header>
   <main>
      <div class="container">
         <div class="row justify-content-center">
            ${teamInfo}
         </div>
      </div>
   </main>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
`;}

// creates the employee array and pushes the info to the array.
generatePage = (data) => {

   employeeArray = [];

   for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();

      if (role === 'Manager') {
         const managerInfo = managerCard(employee);
         employeeArray.push(managerInfo);
      }

      if (role === 'Engineer') {
         const engineerInfo = engineerCard(employee);
         employeeArray.push(engineerInfo);
      }

      if (role === 'Intern') {
         const internInfo = internCard(employee);
         employeeArray.push(internInfo);
      }
      
   } 

   //  joins all the employee info into one array
   const teamInfo = employeeArray.join('')

   const generateTeam = teamPage(teamInfo);
   return generateTeam;
}


module.exports = generatePage;
