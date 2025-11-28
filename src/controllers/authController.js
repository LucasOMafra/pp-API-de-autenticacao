import bcrypt from "bcryptjs";       // Para criptografar senhas
import jwt from "jsonwebtoken";      // Para gerar tokens JWT
import users from "../models/userModel.js"; // "Banco" em memória
import dotenv from "dotenv";
dotenv.config();

// ---------------------- REGISTER ---------------------- //
export const register = (req, res) => {
  const { name, email, password } = req.body;

  // Verifica se email já existe
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "Email já registrado." });
  }

  // Criptografa a senha
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Monta objeto do usuário
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  // Salva no "banco"
  users.push(newUser);

  return res.status(201).json({ message: "Usuário criado!", user: newUser });
};

// ---------------------- LOGIN ---------------------- //
export const login = (req, res) => {
  const { email, password } = req.body;

  // Procura o usuário pelo email
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado." });
  }

  // Compara senha digitada com a senha criptografada
  const validPass = bcrypt.compareSync(password, user.password);
  if (!validPass) {
    return res.status(401).json({ message: "Senha inválida." });
  }

  // Gera token JWT com ID e email do usuário
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return res.json({ message: "Logado!", token });
};
