import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'init',
  description: 'Initialize a Rnatify project.',
  run: async (toolbox: GluegunToolbox) => {
    const {
      // parameters,
      // template: { generate },
      print: { error, success },
    } = toolbox

    // TODO: Ler package.json
    // TODO: Se não encontrar variaveis, criar variaveis

    // TODO: Ler diretorios e buscar por template, se não encontrar, criar diretorio de templates
    try {
      success(toolbox.filesystem.cwd())
      // const { type, name } = parameters.options

      // const path = generateComponent(type, name)
      // generate({
      //   template: `${type}.ts.ejs`,
      //   directory: `../templates`,
      //   target: `./src/components/${type}/${name}.ts`,
      //   props: {
      //     name,
      //   },
      // })
      // success(`Succesfully generated ${name} as type ${type}. ${path}`)
    } catch (e) {
      error(e.message)
    }
  },
}
