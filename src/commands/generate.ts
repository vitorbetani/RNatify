import { IExtendedGluegunToolbox } from '../types/toolbox.type'

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

      generate({
        template: config.templatesFiles[first],
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
