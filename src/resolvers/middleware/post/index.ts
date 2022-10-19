import { UseMiddleware } from 'type-graphql'

import { ResolverActionsConfig } from '@generated/type-graphql'
import { CheckPostOperation } from './check-operation'

export const postEnhanceConfig: ResolverActionsConfig<'Post'> = {
  _all: [UseMiddleware(CheckPostOperation)],
}
