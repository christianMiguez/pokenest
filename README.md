<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

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
