# TypeGraphQL Prisma Demo

This project was used in the presentation **A Low-Code GraphQL Service in Node JS** by John Schult.

## Setup

### Package management

This project was developed using `pnpm`. If you are not already using `pnpm` [you should be](https://www.youtube.com/watch?v=d1E31WPR70g). If you don't want to switch, you can still use `npm`.

#### Installing pnpm
- https://pnpm.io/installation

### Installing packages
```
$ pnpm install
```
or
```
$ npm install
```

### Generating code
Before you can run the service, you will need to generate the code that is defined in `prisma/schema.prisma`. *Any time you change this file you will need to generate the code again.*

```
$ pnpm generate
```
or
```
$ npm run generate
```

If the SVG file generation fails just ignore it. This package is undergoing some changes right now with regard to their generator. I included the complete SVG fle in `docs/erd.svg`.

## Starting a database
A `docker-compose.yaml` is included in this project and can be used if you have `docker` installed on your system. This the easiest option for starting a database.

```
$ docker compose up -d
```

If you do not have `docker` on your system, you will need to provide an instance of PostgreSQL and make the needed changes to the `.env` file.

```
DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5433/tgpdemo
DB_USER=postgres
DB_PASSWORD=postgres
```

## Apply the database migrations
```
pnpm prisma migrate dev
```
or
```
npm run prisma migrate dev
```

## Running the service (Apollo)
After you start the Apollo service you can access the Apollo Studio at:

http://localhost:4001/graphql

```
$ pnpm dev
```
or
```
$ npm run dev
```

## Running Prisma Studio
With a simple tabular interface you can quickly have a look at the data of your local database and check if your app is working correctly.

https://www.prisma.io/studio

```
$ pnpm studio
```
or
```
npm run studio
```

## Resources

- [TypeScript: JavaScript With Syntax For Types](https://www.typescriptlang.org/)
- [Introduction to Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [vercel/micro: Asynchronous HTTP microservices](https://github.com/vercel/micro)
- [vercel/micro-dev: The development environment for `micro`](https://github.com/vercel/micro-dev)
- [TypeGraphQL · Modern framework for GraphQL API in Node.js](https://typegraphql.com/)
-[ Prisma Documentation | Concepts, Guides, and Reference](https://www.prisma.io/docs/)
- [TypeGraphQL Prisma](https://prisma.typegraphql.com/)
- [keonik/prisma-erd-generator: Generate an ER Diagram based on your Prisma schema](https://github.com/keonik/prisma-erd-generator)

## Help
If you have any questions about this project, please don't hesitate to [contact me on Teams](https://teams.microsoft.com/l/chat/0/0?users=js798p@att.com). I will be happy to show you around the code and how to use it.