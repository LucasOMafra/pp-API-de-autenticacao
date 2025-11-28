# 🔐 Projeto Auth API – Autenticação com Node.js
O Projeto Auth API foi desenvolvido para aplicar e consolidar conceitos fundamentais de APIs RESTful, segurança, arquitetura backend e boas práticas de desenvolvimento utilizando JavaScript e Node.js.
Este projeto serve como base para futuros sistemas que exigem autenticação, controle de acesso e comunicação segura entre cliente e servidor.

---

## 🧠 Objetivo do Projeto
O principal objetivo é fixar a construção de uma API estruturada e segura, aplicando conceitos fundamentais como:  
🔹 Criação de rotas REST  
🔹 Hash seguro de senhas  
🔹 Geração e validação de tokens JWT  
🔹 Middlewares de autenticação  
🔹 Organização modular do backend  
🔹 Uso de variáveis de ambiente e boas práticas  

---

## 🧩 Estrutura do Código
A API foi organizada em pastas para garantir clareza, separação de responsabilidades e escalabilidade:
controllers → contém a lógica das rotas, como registrar e autenticar usuários
routes → define os endpoints acessíveis
middlewares → onde fica a proteção de rotas usando JWT
models → camada de dados (neste caso, um mock de usuário em memória)
server.js → ponto de entrada da aplicação, onde o servidor Express é iniciado
Essa estrutura segue um padrão comum em aplicações Node.js, facilitando manutenção e expansão.

---

## 🧱 Tecnologias Utilizadas  
🟩 Node.js  
⚡ Express.js  
🔐 bcryptjs (hash de senha)  
🔑 jsonwebtoken (JWT)  
⚙️ dotenv (gerenciar variáveis de ambiente)  
🔁 nodemon (desenvolvimento)  

---

## ▶️ Como Executar o Projeto
1. Instale as dependências:
npm install
2. Configure o arquivo .env:
PORT=3000
JWT_SECRET=seuSegredoAqui
JWT_EXPIRES_IN=1d
3. Execute o servidor:
npm start
4. Ou execute em modo desenvolvimento:
npm run dev
Ao iniciar, o terminal exibirá:
Servidor rodando na porta 3000

---

## 📌 Endpoints da API
🔸 Registrar usuário
POST /auth/register
Body:  
{
  "email": "email@teste.com",
  "password": "123456"
}  
🔸 Fazer login
POST /auth/login
Body:  
{
  "email": "email@teste.com",
  "password": "123456"
}
}
Retorno:
{
  "token": "jwt_aqui"
}  
🔸 Acessar rota protegida
GET/auth/protected  
Header:
Authorization: Bearer SEU_TOKEN  

---

## 🧮 Conceitos Aprendidos  
Durante o desenvolvimento desta API foram reforçados conceitos como:  
Organização de um projeto backend em múltiplas camadas;  
Validação e segurança com hash de senhas; 
Autenticação moderna baseada em tokens;  
Criação e proteção de rotas REST;  
Uso correto de middlewares;  
Vantagens do .env para segurança e configuração. 

---

## 🚀 Próximos Passos  
🔸 Adicionar banco de dados real (MongoDB/PostgreSQL)  
🔸 Criar sistema de refresh token  
🔸 Adicionar níveis de permissão (roles)  
🔸 Implementar recurso de recuperar senha  
🔸 Criar documentação Swagger  
🔸 Adicionar testes automatizados (Jest)  
