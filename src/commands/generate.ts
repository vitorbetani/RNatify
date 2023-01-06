import { IExtendedGluegunToolbox } from '../types/toolbox.type'
import * as path from 'path'

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox: IExtendedGluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { error, success },
      config,
    } = toolbox

    try {
      const { name } = parameters.options
      const { first } = parameters

      const templateName = path.parse(config.templatesFiles[first]).base

      generate({
        template: templateName,
        directory: config.templatesFiles[first].replace(`/${templateName}`, ''),
        target: `${config.paths[`${first}s`]}/${name}.tsx`,
        props: {
          name,
        },
      })

      success(`Succesfully generated ${name} ${first}.`)
    } catch (e) {
      error(e.message)
    }
  },
}
