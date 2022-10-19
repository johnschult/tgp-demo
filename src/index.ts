import 'reflect-metadata'

import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-micro'
import { IncomingMessage, ServerResponse } from 'http'
import { send } from 'micro'
import microCors from 'micro-cors'
import { buildSchemaSync } from 'type-graphql'
import { formatError } from './format-error'
import { resolvers } from './resolvers'

const cors = microCors({ allowHeaders: ['*'] })

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

const schema = buildSchemaSync({
  resolvers,
})

const apolloServer = new ApolloServer({
  context: () => ({
    prisma,
  }),
  formatError,
  schema,
})

module.exports = apolloServer.start().then(() => {
  const handler = apolloServer.createHandler()

  return cors((req: IncomingMessage, res: ServerResponse) =>
    req.method === 'OPTIONS' ? send(res, 200, 'ok') : handler(req, res)
  )
})
