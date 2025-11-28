import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  // Pega o token do header Authorization: Bearer token
  const token = req.headers.authorization?.split(" ")[1];

  // Verifica se veio token
  if (!token) {
    return res.status(401).json({ message: "Token não encontrado." });
  }

  try {
    // Valida e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Salva o usuário decodificado na requisição
    req.user = decoded;

    // Continua a execução da rota
    next();

  } catch (error) {
    return res.status(401).json({ message: "Token inválido." });
  }
};
