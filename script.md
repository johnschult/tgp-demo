# Script for Coding Demo

## Terminal: Prisma

### Start the database

```
docker compose up
```

We have an existing database that has a `users` table. The `User` has an `id`, `email`, `firstName`, `lastName` and some timestamps.

### Database Pull
When I spoke earler about Prisma, I mentioned that it can pull the existing database. So, let's do that and pull the database, which will update the Prisma schema.

```
pnpm prisma db pull
```

### Code: Schema
Now that we have the `User` added to the schema, we can edit the schema and add a `Post` model and make a few changes to our `User` model.

- Copy from `schema.prisma`

### Terminal: Generate code

So we now have a `Post` and a `User` model. Let's sync the schema to the database and generate the code that will be used in our GraphQl server.

```
pnpm prisma migrate dev
```

- Preview `docs/erd.svg`

This will generate a whole bunch of code in our `node_modules` in the `@generated` package.

## Code: Review the service

- Open `src/index.ts`

This is the entry point of the service that will be running Apollo Server.

- Walk through the various parts

### Add the resolvers

When we generated the code, along with models and interfaces, we also got a bunch of resolvers for Apollo Server that will handle our CRUD operations.

- Edit `src/resolvers/index.ts`
- Add `FindManyPostResolver`, `FindFirstPostResolver`, `CreateOnePostResolver` and `PostRelationsResolver`

## Terminal: Start the service

Now that we have added a few resolvers added to our service we can start it up.

```
pnpm run dev
```

## Browser: Apollo Studio

- Navigate to http://localhost:4001/graphql
- Run query `Posts`

Since we just created the `Post` model we have no posts. Let's do something about that and create a `Post`.

Before we create a `Post`, we will need to have a `User` in our database. Let's use Prisma Studio to create a couple `User`s.

```
pnpm run studio
```

- Create two users

OK, now that we have a couple `User`s, we can create that `Post`.

- Copy the `User#id` from Prisma Studio
- Run mutation `CreateOnePost`
- Run query `Posts`

OK, so we now have a `Post` with the `User`. So far we have not written any code yet, except for importing and connecting our resolvers.

## Code: Add Comment

Blog posts are interesting, but we all know the comments are here the real action is. Let's now create a `Comment` model in our schema.

- Copy `Comment` from `src/prisma/schema`

In order to start using our `Comment` model, we need to first create a database migration.

```
pnpm prisma migrate dev
```

We can now add the `Comment` resolvers to our service.

- Edit `src/resolvers/index.ts`
- Add `CreateOneCommentResolver`

## Browser: Apollo Studio

- Restart Prisma Studio
- Copy `User#id` and `Post#id` from Prisma Studio
- Run mutation `CreateOneComment`

Now we can get the comments when we run the `Posts` query...

- Run query `PostsWithComments`

## Recap

So now we have resolvers and models for `Post`, `Comment` and `User` and still haven't really written any code.
I did say this was a low-code service, but by no means is it a no-code service. It is pretty rare
outside of a demo app for you to not have any business rules for CRUD operations, so with that
in mind, let's move on to middleware.

## Middleware

In the interest of time I am going to copy a bunch of middleware code and then I will go though it and explain what it does.

- Copy `src/resolvers`
- Go through middleware
- Run mutation `CreateOnePost` with `allowComments: false` 
- Get the `Post#id` from Prisma Studio
- Run mutation `CreateOneComment` and show that it fails

## Questions? Comments?