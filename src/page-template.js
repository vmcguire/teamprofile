const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

// // create the about section
// const generateAbout = (aboutText) => {
//   if (!aboutText) {
//     return "";
//   }

//   return `
//     <section class="my-3" id="about">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//       <p>${aboutText}</p>
//     </section>
//   `;
// };

// const generateCard = (employeeArr) => {
//   for (var i = 0; i < employeeArr.length; i++) {
//     if ((employeeArr[0] = "Intern")) {
//       return `
//       <div class="card">
//         <div class="card-body">
//           <h4 class="card-title">Card title</h4>
//           <p class="card-text">
//             Some quick example text to build on the card title
//             and make up the bulk of the card's content.
//           </p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>

//       `;
//     }
//   }

//   return `
//       <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${employeeArr
//           //   .filter(({ name }) => name)
//           .map(({ name, id, email }) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <p>${id}</p>
//               <a href="${email}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join("")}

//         </div>
//       </section>
//     `;
// };

const off = (bananapancakes) => {
  if (bananapancakes) {
    return `<p>Office Number: ${bananapancakes}</p>`;
  } else {
    return `<p class ="d-none"></p>`;
  }
};

const git = (bananapancakes) => {
  if (bananapancakes) {
    return `<p>Github Username: ${bananapancakes}</p>`;
  } else {
    return `<p class ="d-none"></p>`;
  }
};

const sch = (bananapancakes) => {
  if (bananapancakes) {
    return `<p>School: ${bananapancakes}</p>`;
  } else {
    return `<p class ="d-none"></p>`;
  }
};

const addEmployee = (employee) => {
  return employee
    .map(({ name, type, id, email, officeNumber, github, school }) => {
      return `
    <h1>Name: ${name}</h1>
    <h2>Role: ${type}</h2>
    <h3>Employee ID: ${id}</h3>
    <h3>Email Address: ${email}</h3>
    ${off(officeNumber)}
    ${git(github)}
    ${sch(school)}
    `;
    })
    .join("");
};

const generatePage = (employeeData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
        <h1>My Team</h1>
        </div>
      </header>

      <main class="container my-5">
        ${addEmployee(employeeData)} 
      </main>

      <footer class="container text-center py-3">
      </footer>
    </body>
    </html>
    `;
};

module.exports = generatePage;
