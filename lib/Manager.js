function Manager (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

module.exports = Manager;






// class Manager extends Employee {
//     constructor(name, id, email) {
//       super(name, id, email);
//       // super(id);
//       // super(email);
//       this.officeNumber = officeNumber;
//     };

//     getName() {
//         return this.name;
//     }

//     getId() {
//         return this.id;
//     }

//     getEmail() {
//         return this.email;
//     }

//     getRole() {
//         return `Manager`
//     }

// }

// module.exports = Manager;
