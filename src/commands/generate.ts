import { GluegunToolbox } from 'gluegun'

const generateAtom = (name) => {
  return name
}
const generateMolecule = (name) => {
  return name
}
const generateOrganism = (name) => {
  return name
}

const TemplateTypes = {
  atom: 'atom',
  molecule: 'molecule',
  organism: 'organism',
}

const generateComponent = (type = typeof TemplateTypes, name = '') => {
  if (!name) {
    throw new Error('--name should be a valid string')
  }

  switch (type) {
    case TemplateTypes.atom:
      return generateAtom(name)
    case TemplateTypes.molecule:
      return generateMolecule(name)
    case TemplateTypes.organism:
      return generateOrganism(name)
    default:
      throw new Error(
        `--type is not a valid type. Valid types are: ${Object.values(
          TemplateTypes
        ).join(', ')}`
      )
  }
}

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { error, success },
    } = toolbox
    try {
      const { type, name } = parameters.options

      const path = generateComponent(type, name)
      generate({
        template: `${type}.ts.ejs`,
        directory: `./src/templates`,
        target: `./src/components/${type}/${name}.ts`,
        props: {
          name,
        },
      })
      success(`Succesfully generated ${name} as type ${type}. ${path}`)
    } catch (e) {
      error(e.message)
    }
  },
}
