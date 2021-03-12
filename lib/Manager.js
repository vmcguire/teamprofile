const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, type, id, email, officeNumber) {
    super(name, id, email);
    this.type = "Manager";
    this.officeNumber = officeNumber;
  }

  getRole() {
    return `Manager`;
  }
}
module.exports = Manager;
