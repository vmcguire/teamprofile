const Engineer = require('../lib/Engineer.js');

test('creates an engineer', () => {
    const engineer = new Engineer('Bob', 2, 'bob@gmail.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email.length).toBeGreaterThan(0);

});