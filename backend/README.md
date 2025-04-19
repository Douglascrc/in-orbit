# Goals Manager API (Node.js)
> Uma API RESTful desenvolvida para ajudar os usuários a gerenciar suas metas pessoais e profissionais. Com esta API, os usuários podem criar e visualizar metas, bem como acompanhar o progresso de suas metas ao longo da semana corrente.

## Instalação:
Clone o repositorio:<br/>
```bash
git clone https://github.com/Douglascrc/manage_goals

```
Navegue para o diretório do projeto:<br/>
```bash   
cd ./manage_goals
````
Instale as dependências necessárias:<br/>
```bash
npm i
```

## Como executar o projeto:
1. **Configurar variáveis de ambiente:**  
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   DATABASE_URL='postgres://docker:docker@localhost:5432/goals'
   ```

2. **Iniciar o PostgreSQL via Docker Compose:**  
   Certifique-se de que o Docker está instalado e execute:
   ```bash
   docker-compose up -d
   ```

3. **Realizar as migrações:**  
   Utilize o Drizzle Kit para aplicar as migrações necessárias:
   ```bash
   npx drizzle-kit migrate
   ```

4. **Iniciar o servidor:**  
   Execute o comando abaixo para rodar o backend:
   ```bash
   npm run dev
   ```
   O servidor será iniciado na porta `3333`.

## Como usar:
### endpoints
`POST /goals` - Esse endpoint permite que você crie metas e defina a quantidade de vezes que deve realiza-la durante a semana:
```json
{
    "title":"Caminhar",
    "weeklyFrequency": 5 
}
```
------
`Post /completions` - Permite que você marque a meta concluída passando o ID da meta:
```json
{
    "goalId":"dnc441s7gx9kir9uifkt1et7",  
}
```
---
`GET /pending-goals` - Retorna as metas pendentes na semana e a quantidade de vezes que foram completadas
```json
{
    "pendingGoals": [
        {
            "id": "imi7wcphuqp1fu8i2y7muk9",
            "title": "Caminhar",
            "weeklyFrequence": 5,
            "completionsCount": 1
        },
        {
            "id": "sobalmuk41b7sli8opwo5ge",
            "title": "Acordar 8h",
            "weeklyFrequence": 5,
            "completionsCount": 0
        },
    ],
}
```
___
`GET /summary` - Retorna o resumo das metas concluidas na semana e das metas que não foram e o total
```json
{
    "summary": [
        {
            "completed": 1,
            "total": 19,
            "goalsPerDay": {
                "2024-09-29": [
                    {
                        "id": "dnc441s7gx9kir9uifkt1et7",
                        "title": "Estudar JavaScript",
                        "completedAt": "2024-09-29T03:00:00"
                    },
                ],
            },
        },
    ]
}
```
