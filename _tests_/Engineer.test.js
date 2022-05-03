const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
   const engineer = new Engineer('Amy', 123, 'arawls@gmail.com', 'charliebear2000');

   expect(engineer.github).toEqual(expect.any(String));
});

test("creates engineer's github", () => {
   const engineer = new Engineer('Amy', 123, 'arawls@gmail.com', 'charliebear2000');

   expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("creates employee's role", () => {
   const engineer = new Engineer('Amy', 123, 'arawls@gmail.com', 'charliebear2000');

   expect(engineer.getRole()).toEqual('Engineer');
});