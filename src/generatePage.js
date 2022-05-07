

const managerCard = function (manager) {
   return `
   
   <div class="col s12 m6">
      <div class="card blue-grey darken-1">
         <div class="card-header white-text">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
         </div>
         <div class="card-content">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href= "mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
         </div>
      </div>
   </div>
  `;
}

const engineerCard = function(engineer) {
   return `
   
   <div class="col s12 m6">
      <div class="card blue-grey darken-1">
         <div class="card-header white-text">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
         </div>
         <div class="card-content">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href= "mailto:${engineer.email}">${manager.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
         </div>
      </div>
   </div>
  `;
}

const internCard = function (intern) {
   return `
   
   <div class="col s12 m6">
      <div class="card blue-grey darken-1">
         <div class="card-header white-text">
            <h3>${intern.name}</h3>
            <h4>Manager</h4>
         </div>
         <div class="card-content">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href= "mailto:${intern.email}">${intern.email}</a></p>
            <p class="office">Office Number: ${intern.school}</p>
         </div>
      </div>
   </div>
  `;
}


const teamPage = function (teamInfo) {

 return `
 <!DOCTYPE html> 
<html lang="en"> 

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <header>
      <nav class="nav-wrapper">
         <span class="brand-logo center">Team Profile</span>
      </nav>
   </header>
   <main>
      <div class="container">
         <div class="row justify-content-center" id="team-info">
            ${teamInfo}
         </div>
      </div>
   </main>
</body>

`;}


generatePage = (data) => {

   employeeArray = [];

   for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();

      if (role === 'Manager') {
         const managerInfo = managerCard(employee);
         employeeArray.push(managerInfo);
      }

      else if (role === 'Engineer') {
         const engineerInfo = engineerCard(employee);
         employeeArray.push(engineerInfo);
      }

      else if (role === 'Intern') {
         const internInfo = internCard(employee);
         employeeArray.push(internInfo);
      }
   }

   const teamInfo = employeeArray.join('')

   const generateTeam = teamPage(teamInfo);
   return generateTeam;
}


module.exports = generatePage;
