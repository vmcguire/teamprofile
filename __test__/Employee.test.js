const Employee = require("../lib/Employee.js");

test("creates an employee", () => {
  const employee = new Employee("Victor", 1, "victor.mcguire@gmail.com");

  expect(employee.name).toBe("Victor");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(0);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.email.length).toBeGreaterThan(0);
});

// test("gets player's health value", () => {
//   const player = new Player("Dave");

//   expect(player.getHealth()).toEqual(
//     expect.stringContaining(player.health.toString())
//   );
// });
