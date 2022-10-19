import { ForbiddenError } from 'apollo-server-micro'
import { includes } from 'lodash'
import { NextFn, ResolverData } from 'type-graphql'
import { Context } from '../../../resolvers'

export const CheckCommentOperation = async (
  { info: { fieldName: operation } }: ResolverData<Context>,
  next: NextFn
) => {
  const allowedOperations = ['createOneComment']

  if (includes(allowedOperations, operation)) return next()

  throw new ForbiddenError(`The operation '${operation}' is not allowed`)
}
