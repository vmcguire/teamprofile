const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, type, id, email, school) {
    super(name);
    this.id = id;
    this.email = email;
    this.school = school;
    this.type = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return `Intern`;
  }
}
module.exports = Intern;
