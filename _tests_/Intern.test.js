const Intern = require('../lib/Intern');

test('creates an intern object', () => {
   const intern = new Intern('Amy', 123, 'arawls@gmail.com', 'VCU');

   expect(intern.school).toEqual(expect.any(String));
});

test("creates intern's school", () => {
   const intern = new Intern('Amy', 123, 'arawls@gmail.com', 'VCU');

   expect(intern.getSchool()).toEqual(expect.any(String));
});

test("creates employee's role", () => {
   const intern = new Intern('Amy', 123, 'arawls@gmail.com', 'VCU');

   expect(intern.getRole()).toEqual('Intern');
});