const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

const off = (bananapancakes) => {
  if (bananapancakes) {
    return `<li class="list-item align-center disabled">
    <p class="list-group-item mt-1 text-dark">Office Number: ${bananapancakes}</p>
    </li>`;
  }
  return ``;
};

const git = (bananapancakes) => {
  if (bananapancakes) {
    return `<li class="list-item align-center disabled">
    <a class="list-group-item mt-1 text-dark" href="http://www.github.com/${bananapancakes}">Github Username:${bananapancakes}</a>
    </li>`;
  }
  return ``;
};

const sch = (bananapancakes) => {
  if (bananapancakes) {
    return `<li class="list-item align-center disabled">
    <p class="list-group-item mt-1 text-dark">School: ${bananapancakes}</p>
    </li>`;
  }
  return ``;
};

const addEmployee = (employees) => {
  return employees
    .map(({ name, type, id, email, officeNumber, github, school }) => {
      return `

  <div class="col-md-3">
    <div class="card bg-light text-white">
      <div class="card-body">
        <div class="card-header bg-danger">
          <h2>
            ${name}
          </h2>
          <h3>
          ${type}
          </h3>
        </div>
        <li class="list-item align-center disabled">
          <p class="list-group-item card-text text-dark mt-1">ID: ${id}</p>
        </li>
        <li class="list-item align-center disabled">
          <a class="list-group-item card-text text-dark mt-1" href="mailto:${email}">Email: ${email}</a>
          </li>
          ${off(officeNumber)}
          ${git(github)}
          ${sch(school)}
      </div>
    </div>
  </div>
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">

      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header class="col-12 bg-dark text-light sticky-top flex-column d-flex p-4 p-lg-3">
        <h1 class="text-center">My Team</h1>
      </header>

      <main class="container-fluid mt-5">
        <div class="row">
          <div class ="col-lg-12">
            <div class ="mt-3 row col-12">
              ${addEmployee(employeeData)}
            </div>
          </div>
        </div> 
      </main>

      <footer class="container text-center py-3">
      </footer>
    </body>
    </html>
    `;
};

module.exports = generatePage;
