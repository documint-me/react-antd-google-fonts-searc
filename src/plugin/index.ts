import type { Plugin } from 'grapesjs'

export type PluginOptions = {
    section?: string;
    property?: string;
}

export const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const options: PluginOptions = {
    section: 'typography',
    property: 'font-family',
    ...opts,
  }

  const { section, property } = options

  editor.Commands.add('add-google-font', {
    run(editor, _sender, options) {
      const { id, label } = options
      const font = { id, label: label ?? id }
      const prop = editor.StyleManager.getProperty(String(section), String(property))
      // @ts-ignore
      prop?.setOptions([font, ...prop.getOptions()])
    },
    stop() {},
  })
}

export default plugin
