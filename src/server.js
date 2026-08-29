const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

// Middleware JSON
app.use(express.json());

// Rotas
app.use("/users", userRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});