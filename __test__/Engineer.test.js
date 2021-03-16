const Engineer = require("../lib/Engineer.js");

test("creates an engineer", () => {
  const engineer = new Engineer(
    "Bob",
    "Engineer",
    2,
    "bob@gmail.com",
    "bobgithub"
  );

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.name.length).toBeGreaterThan(0);
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.email.length).toBeGreaterThan(0);
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.github.length).toBeGreaterThan(0);
});
