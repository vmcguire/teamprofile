const Intern = require("../lib/Intern.js");

test("creates an Intern", () => {
  const intern = new Intern("Joe", "Intern", 3, "joe@gmail.com", "UC Berkeley");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.name.length).toBeGreaterThan(0);
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.email.length).toBeGreaterThan(0);
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.school.length).toBeGreaterThan(0);
});
