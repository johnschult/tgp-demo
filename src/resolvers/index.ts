import {
  CreateOneCommentResolver,
  CreateOnePostResolver,
  DeleteOnePostResolver,
  FindFirstPostResolver,
  FindManyPostResolver,
  PostRelationsResolver,
  UpdateOnePostResolver,
} from '@generated/type-graphql'

import { PrismaClient } from '@prisma/client'
import { NonEmptyArray } from 'type-graphql'
import { applyMiddleware } from './middleware'

export interface Context {
  prisma: PrismaClient
}

applyMiddleware()

const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  FindManyPostResolver,
  CreateOnePostResolver,
  FindFirstPostResolver,
  UpdateOnePostResolver,
  DeleteOnePostResolver,
  PostRelationsResolver,
  CreateOneCommentResolver,
]

export { resolvers }
