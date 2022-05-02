const Employee = require('../lib/Employee');

console.log(new Employee());

test('creates an employee object', () => {
   const employee = new Employee('Amy', 123, 'arawls@gmail.com');

   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
});

test("creates employee's name", () => {
   const employee = new Employee('Amy', 123, 'arawls@gmail.com');

   expect(employee.getName()).toEqual(expect.any(String));
});

test("creates employee's id", () => {
   const employee = new Employee('Amy', 123, 'arawls@gmail.com');

   expect(employee.getId()).toEqual(expect.any(Number));
});

test("creates employee's email", () => {
   const employee = new Employee('Amy', 123, 'arawls@gmail.com');

   expect(employee.getEmail()).toEqual(expect.any(String));
});

test("creates employee's role", () => {
   const employee = new Employee('Amy', 123, 'arawls@gmail.com');

   expect(employee.getRole()).toEqual('Employee');
});