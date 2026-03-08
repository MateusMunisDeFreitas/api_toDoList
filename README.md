# api_toDoList

API REST simples para gerenciamento de usuários e tarefas (to-do lists). Desenvolvida com Node.js + Express e MySQL.

---

## 🚀 Início Rápido

### Instalação e Execução

```bash
npm install
npm run dev  # ou npm start
```

**Configuração**: O servidor inicia na porta definida em `.env` (variável `PORT`).

---

## 📚 Documentação de Endpoints

### 1️⃣ AUTENTICAÇÃO E USUÁRIOS

#### 🔐 POST `/signup`
**Descrição**: Criar novo usuário

**Método**: `POST`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
  "nome": "João Silva",
  "senha": "senha123"
}
```

**Respostas**:
- **201 Created**: Usuário criado com sucesso
  ```json
  {
    "nome": "João Silva",
    "senha": "senha123"
  }
  ```
- **400 Bad Request**: Erro ao criar usuário

---

#### 🔑 GET `/login`
**Descrição**: Autenticar usuário e obter token JWT

**Método**: `GET`  
**Content-Type**: `application/json`

**Corpo da Requisição**:
```json
{
  "nome": "João Silva",
  "senha": "senha123"
}
```

**Respostas**:
- **200 OK**: Login com sucesso, retorna token JWT
  ```json
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  ```
- **404 Not Found**: Usuário não encontrado
  ```json
  {
    "menssage": "Usuario não encontrado"
  }
  ```
- **404 Not Found**: Erro na autenticação

**Observação**: O token JWT expira em **1 hora**. Guardar o token no `localStorage` ou `sessionStorage` para futuras requisições.

---

#### 👥 GET `/login/teste`
**Descrição**: Listar todos os usuários (rota de teste)

**Método**: `GET`

**Respostas**:
- **200 OK**: Lista de todos os usuários
  ```json
  [
    {
      "id": 1,
      "nome": "João Silva",
      "senha": "senha123"
    },
    {
      "id": 2,
      "nome": "Maria Santos",
      "senha": "senha456"
    }
  ]
  ```
- **400 Bad Request**: Erro ao buscar usuários

---

#### ✏️ PUT `/usuarios`
**Descrição**: Atualizar dados de um usuário

**Método**: `PUT`  
**Query Parameters**:
- `id` (obrigatório): ID do usuário a atualizar

**Corpo da Requisição**:
```json
{
  "nome": "João Silva Atualizado",
  "senha": "novaSenha123"
}
```

**URL Exemplo**: `/usuarios?id=1`

**Respostas**:
- **201 Created**: Usuário atualizado com sucesso
- **400 Bad Request**: Erro ao atualizar usuário

---

#### 🗑️ DELETE `/usuarios`
**Descrição**: Remover um usuário

**Método**: `DELETE`  
**Query Parameters**:
- `id` (obrigatório): ID do usuário a remover

**URL Exemplo**: `/usuarios?id=1`

**Respostas**:
- **200 OK**: Usuário removido com sucesso
- **400 Bad Request**: Erro ao remover usuário

---

### 2️⃣ TAREFAS (TO-DO LIST)

> ⚠️ **Autenticação obrigatória**: Todas as rotas de tarefas requerem um token JWT válido no header `Authorization: Bearer <token>`. Obtenha o token via `/login`.

#### 📋 GET `/tarefas`
**Descrição**: Listar todas as tarefas

**Método**: `GET`  
**Headers**:
- `Authorization: Bearer <token>`

**Respostas**:
- **200 OK**: Lista de tarefas
  ```json
  [
    {
      "id": 1,
      "descricao": "Fazer compras",
      "user_id": 1
    },
    {
      "id": 2,
      "descricao": "Estudar Node.js",
      "user_id": 1
    }
  ]
  ```
- **401 Unauthorized**: Token inválido ou expirado
- **400 Bad Request**: Erro ao buscar tarefas

---

#### ➕ POST `/tarefas`
**Descrição**: Criar nova tarefa

**Método**: `POST`  
**Content-Type**: `application/json`  
**Headers**:
- `Authorization: Bearer <token>`

**Corpo da Requisição**:
```json
{
  "descricao": "Fazer compras no mercado",
  "user_id": 1
}
```

**Respostas**:
- **201 Created**: Tarefa criada com sucesso
  ```json
  {
    "id": 3,
    "descricao": "Fazer compras no mercado",
    "user_id": 1
  }
  ```
- **401 Unauthorized**: Token inválido
- **400 Bad Request**: Erro ao criar tarefa

---

#### ✏️ PUT `/tarefas`
**Descrição**: Atualizar uma tarefa existente

**Método**: `PUT`  
**Query Parameters**:
- `id` (obrigatório): ID da tarefa a atualizar  
**Headers**:
- `Authorization: Bearer <token>`

**Corpo da Requisição**:
```json
{
  "descricao": "Fazer compras (ATUALIZADO)",
  "user_id": 1
}
```

**URL Exemplo**: `/tarefas?id=1`

**Respostas**:
- **201 Created**: Tarefa atualizada com sucesso
- **401 Unauthorized**: Token inválido
- **400 Bad Request**: Erro ao atualizar tarefa

---

#### 🗑️ DELETE `/tarefas`
**Descrição**: Remover uma tarefa

**Método**: `DELETE`  
**Query Parameters**:
- `id` (obrigatório): ID da tarefa a remover  
**Headers**:
- `Authorization: Bearer <token>`

**URL Exemplo**: `/tarefas?id=1`

**Respostas**:
- **200 OK**: Tarefa removida com sucesso
- **401 Unauthorized**: Token inválido
- **400 Bad Request**: Erro ao remover tarefa

---

## 🛠 Tecnologias

- **Runtime**: Node.js
- **Framework**: Express.js
- **Banco de Dados**: MySQL
- **Autenticação**: JWT (JSON Web Tokens)
- **Middleware**: Express JSON Parser

---

## 📝 Guia para o Front-End

### Fluxo Típico de Uso

1. **Criar Usuário** → `POST /signup`
2. **Autenticar Usuário** → `GET /login` (obter token JWT)
3. **Guardar Token** → Armazenar em `localStorage` ou `sessionStorage`
4. **Listar Tarefas** → `GET /tarefas`
5. **Criar Tarefa** → `POST /tarefas` (com `user_id` do usuário autenticado)
6. **Atualizar Tarefa** → `PUT /tarefas?id={id}`
7. **Excluir Tarefa** → `DELETE /tarefas?id={id}`

### Exemplo de Requisição com Fetch API

```javascript
// Signup
fetch('http://localhost:3000/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'João', senha: 'senha123' })
})
.then(res => res.json())
.then(data => console.log(data));

// Login
fetch('http://localhost:3000/login', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'João', senha: 'senha123' })
})
.then(res => res.json())
.then(token => {
  localStorage.setItem('token', token);
  console.log('Token armazenado:', token);
});

// Listar Tarefas
fetch('http://localhost:3000/tarefas', {
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
})
.then(res => res.json())
.then(tarefas => console.log(tarefas));

// Criar Tarefa
fetch('http://localhost:3000/tarefas', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  body: JSON.stringify({ 
    descricao: 'Minha nova tarefa',
    user_id: 1 
  })
})
.then(res => res.json())
.then(tarefa => console.log(tarefa));

// Atualizar Tarefa
fetch('http://localhost:3000/tarefas?id=1', {
  method: 'PUT',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  body: JSON.stringify({ 
    descricao: 'Tarefa atualizada',
    user_id: 1 
  })
})
.then(res => res.json())
.then(tarefa => console.log(tarefa));

// Excluir Tarefa
fetch('http://localhost:3000/tarefas?id=1', {
  method: 'DELETE',
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
})
.then(res => res.json())
.then(result => console.log(result));
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=sua_database
SECRECT_KEY=sua_chave_secreta
```

---

## 📌 Status HTTP Utilizados

| Código | Significado | Quando Usado |
|--------|------------|------------|
| 200 | OK | GET bem-sucedido, DELETE bem-sucedido |
| 201 | Created | POST/PUT bem-sucedido |
| 400 | Bad Request | Erro na requisição ou validação |
| 404 | Not Found | Usuário/recurso não encontrado |

---
