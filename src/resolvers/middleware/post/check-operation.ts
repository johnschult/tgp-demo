import { ForbiddenError } from 'apollo-server-micro'
import { includes } from 'lodash'
import { NextFn, ResolverData } from 'type-graphql'
import { Context } from '../../../resolvers'

export const CheckPostOperation = async (
  { info: { fieldName: operation } }: ResolverData<Context>,
  next: NextFn
) => {
  const allowedOperations = [
    'posts',
    'createOnePost',
    'findFirstPost',
    'deleteOnePost',
    'updateOnePost',
  ]

  if (includes(allowedOperations, operation)) return next()

  throw new ForbiddenError(`The operation '${operation}' is not allowed`)
}
