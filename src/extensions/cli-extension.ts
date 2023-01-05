import { GluegunToolbox } from 'gluegun'
import { defaultConfig } from '../types/configs.type'

const expectedConfig = (
  possiblyConfigs: typeof defaultConfig
): typeof defaultConfig => {
  const { paths, templatesFiles } = possiblyConfigs
  return {
    paths: {
      components: paths?.components || defaultConfig.paths.components,
      queries: paths?.queries || defaultConfig.paths.queries,
      screens: paths?.screens || defaultConfig.paths.screens,
      services: paths?.services || defaultConfig.paths.services,
      sanitizers: paths?.sanitizers || defaultConfig.paths.sanitizers,
    },
    templatesFiles: {
      component:
        templatesFiles?.component || defaultConfig.templatesFiles.component,
      query: templatesFiles?.query || defaultConfig.templatesFiles.query,
      screen: templatesFiles?.screen || defaultConfig.templatesFiles.screen,
      service: templatesFiles?.service || defaultConfig.templatesFiles.service,
      sanitizer:
        templatesFiles?.sanitizer || defaultConfig.templatesFiles.sanitizer,
    },
  }
}

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  /**
   * This will read the values from:
   * * a rnatify property in package.json
   * * a .rnatifyrc file in JSON or YAML format
   * * a .rnatifyrc.json file
   * * a .rnatifyrc.yaml, .rnatifyrc.yml, or .rnatifyrc.js file
   * * a rnatify.config.js file exporting a JS object
   *
   * @see https://infinitered.github.io/gluegun/#/toolbox-config
   */
  toolbox.config = {
    ...toolbox.config,
    ...expectedConfig(toolbox.config.loadConfig('rnatify', process.cwd())),
  }
}
