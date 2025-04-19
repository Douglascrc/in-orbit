<h1>
  In.Orbit <img src="./frontend/src/assets/logo.svg" alt="Logo InOrbit" style="vertical-align: middle; margin-left: 8px;" width="30">
</h1>

Projeto para gerenciamento de metas pessoais e profissionais.

Este projeto é composto por duas partes:

- **Backend:** API RESTful construída com Fastify, Drizzle ORM e PostgreSQL.
- **Frontend:** Aplicação React + TypeScript + Vite que consome a API para exibir e cadastrar metas.

## Índice

- [Recursos do Projeto](#recursos-do-projeto)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Testando a API](#testando-a-api)
- [Observações](#observações)
- [Licença](#licença)

## Recursos do Projeto

- Cadastro, visualização e remoção de metas.
- Marcação de metas concluídas.
- Resumo semanal de metas concluídas e pendentes.
- API RESTful com endpoints para criação, listagem, conclusão e remoção de metas.
- Frontend responsivo com React, utilizando React Query para gerenciamento de estado.

## Arquitetura

- **Backend:** 
  - Framework: Fastify.
  - ORM: Drizzle ORM.
  - Banco de dados: PostgreSQL (rodando via Docker com o arquivo `docker-compose.yml`).
  - Dependências: [@fastify/cors](https://github.com/fastify/fastify-cors), [drizzle-kit](https://www.npmjs.com/package/drizzle-kit) para migrações, entre outras.
  
- **Frontend:** 
  - Framework: React.
  - Build Tool: Vite.
  - Linguagem: TypeScript.
  - Estilização: Tailwind CSS.
  - Gerenciamento de estado: React Query.

## Pré-requisitos

- Node.js (versão estável recomendada)
- Docker (para rodar o PostgreSQL via Docker Compose no backend)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Douglascrc/in-orbit.git
   cd in-orbit
   ```
2. Instale as dependências separadamente para backend e frontend:

   ### Backend
   ```bash
   cd backend
   npm install
   ```

   ### Frontend
   ```bash
   cd ../frontend
   npm install
   ```

## Executando o Projeto

### Backend

1. Configure as variáveis de ambiente no arquivo `.env` (localizado em `backend/.env`):
  
2. Inicie o PostgreSQL via Docker:
   ```bash
   cd backend
   docker-compose up -d
   ```
3. Gere e execute as migrações (caso você tenha arquivos de migração):
   ```bash
   npx drizzle-kit migrate deploy
   ```
4. Execute o servidor:
   ```bash
   npm run dev
   ```

### Frontend

1. Inicie a aplicação:
   ```bash
   cd frontend
   npm run dev
   ```
2. A aplicação estará disponível em [http://localhost:5173](http://localhost:5173)

## Testando a API

Você pode testar os seguintes endpoints usando ferramentas como Postman ou cURL:

- **POST /goals**: Cria uma nova meta.
  ```json
  {
     "title": "Caminhar",
     "weeklyFrequency": 2
  }
  ```
- **POST /completions**: Marca uma meta como concluída.
  ```json
  {
     "goalId": "id_da_meta"
  }
  ```
- **GET /pending-goals**: Retorna a lista de metas pendentes para a semana.
- **GET /summary**: Retorna o resumo da semana (metas completadas e totais).

## Observações

- Certifique-se de que o backend está rodando (porta 3333) e que as URLs no frontend (arquivos em `src/http`) estão apontando para o endereço correto.
- Caso precise refazer os seeds do banco, utilize o script definido em `npm run seed` no backend.

## Licença
- Esse projeto usa a licença MIT