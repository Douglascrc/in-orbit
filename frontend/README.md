# In.Orbit Frontend

Esta é a interface do cliente do projeto **In.Orbit**, construída com React, TypeScript e Vite. A aplicação consome a API do backend para gerenciar e exibir metas pessoais e profissionais.

Abaixo, um exemplo da tela de cadastro de meta:

![Tela de Cadastro de Meta](./src/assets/interface.jpg)

## Tecnologias Utilizadas

- **Framework:** React
- **Linguagem:** TypeScript
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS
- **Gerenciamento de Estado:** React Query
- **Outras Dependências:**  
  - Radix UI (componentes acessíveis)
  - React Hook Form e Zod (validação de formulários)
  - Lucide Icons

## Estrutura do Projeto

```
.
├── public/
│   └── icon.svg
├── src/
│   ├── assets/         # Imagens e ícones (ex.: interface.jpg)
│   ├── components/     # Componentes reutilizáveis (ex.: Summary, CreateGoal, PendingGoals, EmptyGoals)
│   │   └── ui/         # Componentes de UI (Button, Input, Label, etc.)
│   ├── http/           # Funções para chamadas à API (ex.: create-goal, get-summary)
│   ├── lib/            # Utilitários e helpers (ex.: funções para manipulação de classes)
│   ├── App.tsx         # Componente principal
│   ├── index.css       # Estilos globais via Tailwind
│   └── main.tsx        # Ponto de entrada da aplicação
├── index.html
├── package.json
├── tailwind.config.js
└── README.md         # Este arquivo
```

## Instalação

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone o repositório (se ainda não o fez):
   ```bash
   git clone https://github.com/Douglascrc/in-orbit.git
   cd in-orbit/frontend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando a Aplicação

Inicie a aplicação com Vite:
```bash
npm run dev
```
A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

## Configurações Adicionais

- **Tailwind CSS:** Configuração disponível em `tailwind.config.js` e `postcss.config.js`.
- **Rotas e Consumo da API:**  
  As requisições para o backend (ex.: `http://localhost:3333/`) estão definidas na pasta `src/http`.

## Scripts Úteis

- `npm run dev` — Inicia a aplicação em modo de desenvolvimento.
- `npm run build` — Compila a aplicação para produção.
- `npm run lint` — Executa o ESLint para identificar problemas no código.
- `npm run preview` — Visualiza a versão de produção localmente.
