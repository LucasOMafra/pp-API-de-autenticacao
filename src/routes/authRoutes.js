import express from "express";
import { register, login } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rota de registro
router.post("/register", register);

// Rota de login
router.post("/login", login);

// Rota protegida (só acessa com token)
router.get("/perfil", authMiddleware, (req, res) => {
  res.json({
    message: "Perfil acessado!",
    user: req.user // usuário vindo do token
  });
});

export default router;
