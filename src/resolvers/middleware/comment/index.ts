import { UseMiddleware } from 'type-graphql'

import { ResolverActionsConfig } from '@generated/type-graphql'
import { CheckCommentOperation } from './check-operation'
import { CheckCreateOneComment } from './create-one'

export const commentEnhanceConfig: ResolverActionsConfig<'Comment'> = {
  _all: [UseMiddleware(CheckCommentOperation)],
  createOneComment: [UseMiddleware(CheckCreateOneComment)],
}
