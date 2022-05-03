const Manager = require('../lib/Manager');

test('creates a manager object', () => {
   const manager = new Manager('Amy', 123, 'arawls@gmail.com', 206);

   expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("creates employee's role", () => {
   const manager = new Manager('Amy', 123, 'arawls@gmail.com', 206);

   expect(manager.getRole()).toEqual('Manager');
});