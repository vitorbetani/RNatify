import { GluegunToolbox } from "gluegun";

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { error },
    } = toolbox;

    const { type, name } = parameters.options;

    if (type && name) {

      return;
    }
    
    error("Invalid arguments. Accepted are: --type | --name")
   },
}
