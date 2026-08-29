const { users, generateId } = require("../models/userModel");

// 📌 GET - listar todos
exports.getAllUsers = (req, res) => {
  return res.status(200).json({
    data: users
  });
};

// 📌 GET - por ID
exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuário não encontrado"
    });
  }

  return res.status(200).json({
    data: user
  });
};

// 📌 POST - criar usuário (com validação)
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Nome e email são obrigatórios"
    });
  }

  const newUser = {
    id: generateId(),
    name,
    email
  };

  users.push(newUser);

  return res.status(201).json({
    data: newUser
  });
};

// 📌 PUT - atualizar usuário
exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuário não encontrado"
    });
  }

  const { name, email } = req.body;

  user.name = name || user.name;
  user.email = email || user.email;

  return res.status(200).json({
    data: user
  });
};

// 📌 DELETE - remover usuário
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Usuário não encontrado"
    });
  }

  users.splice(index, 1);

  return res.status(204).send();
};