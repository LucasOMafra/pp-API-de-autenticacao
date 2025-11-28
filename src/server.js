import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Permite enviar JSON no body
app.use(express.json());

// Rotas de autenticação
app.use("/auth", authRoutes);

// Inicializa servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
