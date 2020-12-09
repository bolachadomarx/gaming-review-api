# REVIEW DE JOGOS API

Os passos abaixo estão disponibilizados para aqueles que desejam executar a API localmente.
Caso esta não seja uma opção, a API esta disponibilizada em https://gaming-review-api.herokuapp.com/api

# Passo a passo

### Primeiro passo

Instalar os pacotes necessários para execução do projeto: `npm install`

### Segundo passo

Criar um arquivo chamado `.env` na pasta raiz do projeto com a seguinte configuração:
`MONGO_URL=[link para conexão do banco de dados mongodb]`

### Terceiro passo

Executar o script que cria a build e executa a mesma com NodeJs: `npm run deploy`

#### Desta forma a API entrará em execução através do endereço: http://localhost:3000/api
