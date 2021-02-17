const Employee = require('../lib/Employee.js');

test('creates an employee', () => {
    const employee = new Employee('Victor', 1, 'victor.mcguire@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email.length).toBeGreaterThan(0);

});

