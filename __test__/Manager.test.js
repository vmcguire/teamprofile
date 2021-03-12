const Manager = require("../lib/Manager.js");

test("creates an manager", () => {
  const manager = new Manager(
    "ManagerName",
    4,
    "manager@gmail.com",
    "5103326689"
  );

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.name.length).toBeGreaterThan(0);
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.email.length).toBeGreaterThan(0);
  expect(manager.officeNumber).toEqual(expect.any(String));
  expect(manager.officeNumber.length).toBeGreaterThan(0);
});
