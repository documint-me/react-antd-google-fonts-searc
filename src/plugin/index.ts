import type { Plugin } from 'grapesjs'

export type PluginOptions = {}

export const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const options: PluginOptions = {
    ...opts,
  }
}

export default plugin
