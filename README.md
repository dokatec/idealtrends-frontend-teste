# Teste Técnico Frontend - Ideal Trends

## Descrição

Criação de uma pagina simples para cadastro de usuários no meu caso de uso uma plataforma de exercícios físicos bodyweight a página faz a conexão com uma API backend feita em laravel com acesso a banco de dados SQLITE neste caso para teste somente para teste. a API fornece as informações através dos metodos HTTP GET - Para consultar os usuarios cadastrados usando Template Engine Blade do laravel.

## Tecnologias Utilizadas

- **Frontend:** [Javascript, HTML, CSS, React, Axios, Toads]
- **backend:** [PHP, Laravel]
- **Banco de dados:** [SQLite, Blade]
- **Outras:** []

## Pré-requisitos

- **Node.js:** [v18.20.4]
- **npm:** [10.7.0]
- **PHP:** [8.3.12]
- **Laravel:** [x11]

## Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/dokatec/idealtrends-frontend-teste.git

   ```

2. **Acessar a pasta via CLI:**

   ```bash
   cd frontend

   ```

3. **Instalar as dependências com npm via CLI:**

   ```bash
   npm install

   ```

4. **Iniciar a aplicação com npm via CLI:**

   ```bash
   npm run dev

   ```

5. **Metodos HTTP utilizados:**

   ```bash
   GET - Obter todos os cadastros com os campos id, nome, email.
   POST - Cria novos registros com nome, email, senha, confirma senha.

   ```

6. **Cadastrar registro via POST em JSON:**

   ```bash
    POST
   {
    "name":"cadastro usuario",
    "email":"usuario@gmail.com",
    "password":"minha_senha"
   }
   ```
