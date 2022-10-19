import {
  applyResolversEnhanceMap,
  ResolversEnhanceMap,
} from '@generated/type-graphql'

import { commentEnhanceConfig } from './comment'
import { postEnhanceConfig } from './post'

const resolversEnhanceMap: ResolversEnhanceMap = {
  Comment: commentEnhanceConfig,
  Post: postEnhanceConfig,
}

export const applyMiddleware = () =>
  applyResolversEnhanceMap(resolversEnhanceMap)
