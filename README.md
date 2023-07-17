<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

NestJS API for a simple CRUD working with PokeAPI.

- Get all pokemons
- Get pokemon by id (can be id, no or name)
- Update, create and delete.
- Seed data: Once the app have been created, you can seed PokeAPI data.

## Instructions

1. Clone repository
2. Execute

```
yarn install
```

3. Make sure you have installed Nest CLI

```
npm i -g @nestjs/cli
```

4. Get DB ready

```
docker-compose up -d
```

5. Clone **.env.template**

6. Execute the app:

```
yarn start:dev
```

7. Fill DB using the seed endpoint

```
http://localhost:3000/API/V2/seed
```

## Stack

- MongoDB
- Nest

## Production Build

1. Use correct .env.prod based on .env.template
2. Fill .env.prod with correct values
3. Create docker image:

```
 docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```