import { GluegunToolbox } from 'gluegun'
import { defaultConfig } from './configs.type'

export interface IExtendedGluegunToolbox extends GluegunToolbox {
  config: typeof defaultConfig
}
