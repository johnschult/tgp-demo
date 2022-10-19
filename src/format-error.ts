// See: https://www.apollographql.com/docs/apollo-server/data/errors/#for-client-responses
import { GraphQLError } from 'graphql'

export const formatError = (err: GraphQLError) => err
