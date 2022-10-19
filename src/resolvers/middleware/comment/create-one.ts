import { CommentCreateInput } from '@generated/type-graphql/'
import { ForbiddenError } from 'apollo-server-micro'
import { NextFn, ResolverData } from 'type-graphql'
import { Context } from '../../../resolvers'

export const CheckCreateOneComment = async (
  { context: { prisma }, args }: ResolverData<Context>,
  next: NextFn
) => {
  const { post } = args.data as CommentCreateInput

  const foundPost = await prisma.post.findFirst({
    where: {
      id: {
        equals: post?.connect?.id,
      },
    },
  })

  if (foundPost?.allowComments) return next()

  throw new ForbiddenError('This post does not allow comments')
}
