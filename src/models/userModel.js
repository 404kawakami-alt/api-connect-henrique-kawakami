let users = [
  { id: 1, name: "Henrique", email: "henrique@email.com" },
  { id: 2, name: "Maria", email: "maria@email.com" }
];

let nextId = users.length + 1;

const generateId = () => nextId++;

module.exports = {
  users,
  generateId
};