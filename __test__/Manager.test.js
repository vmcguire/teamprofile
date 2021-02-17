const Manager = require('../lib/Manager.js');

test('creates an manager', () => {
    const manager = new Manager('Victor', 1, 'victor.mcguire@gmail.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email.length).toBeGreaterThan(0);

});
