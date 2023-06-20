# Soccer Club

O Soccer Club é um site informativo sobre partidas e classificações de futebol!

No time de desenvolvimento do Soccer Club, seu squad ficou responsável por desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto, você vai construir um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento deve respeitar regras de negócio providas no projeto e sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto.

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

## Projeto

![Print do Projeto](https://i.imgur.com/T54PEQ7.png)

## Executar Localmente

Clone o projeto 

```bash
  git clone git@github.com:brunokye/trybe-25-soccer-club.git
```

Entre no diretório

```bash
  cd trybe-25-soccer-club/
```

Inicie os containers

```bash
  npm run compose:up
```

Acesse a pasta do frontend e instale as dependências

```bash
  cd app/frontend && npm i
```

Acesse a pasta do backend e instale as dependências

```bash
  cd ../backend && npm i
```

Abra o projeto

```bash
  code .
```

## Executar os Testes

Dentro do diretório do projeto, acesse a pasta de testes

```bash
  cd app/backend/src/tests
```

Inicie os testes

```bash
  npm run test
```

## Tecnologias

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Chai](https://img.shields.io/badge/Chai-A30701.svg?style=for-the-badge&logo=Chai&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## Autores

- [@brunokye](https://github.com/brunokye) - Desenvolvimento do projeto
- [@betrybe](https://github.com/betrybe) - Commit inicial
