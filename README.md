
# Atividade Token

Este projeto é composto por uma API e uma interface web que simulam um sistema de login com autenticação via token. O usuário pode fazer login e visualizar postagens protegidas.

##  Estrutura do Projeto

```
Atividade-Token/
├── api/     
└── web/    
```

##  Como Funciona

1. **Login**:
   - O usuário entra com um e-mail e senha na interface web.
   - A API valida as credenciais e retorna um token JWT.

2. **Autenticação**:
   - O token é usado para acessar as rotas protegidas (ex: lista de posts).

3. **Posts**:
   - Apenas usuários autenticados podem visualizar os posts protegidos pela API.

##  Como Testar

### 1. Inicie a API

No terminal, vá até a pasta `api/` e instale as dependências:

```bash
cd api
npm install
node server.js
```

A API estará rodando em `http://localhost:3000`.

### 2. Acesse a Interface Web

Abra o arquivo `web/login.html` no navegador.

- Faça login com:
  - **E-mail:** `usuario@gmail.com`
  - **Senha:** `a1b2@b3c4`

Se o login for bem-sucedido, você será redirecionado para a página `home.html`, onde verá os posts.

##  Requisitos

- Node.js instalado para rodar a API.
- Um navegador moderno para acessar os arquivos HTML.
