import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import grapesjs, { Editor } from 'grapesjs'
import GjsEditor from '@grapesjs/react'
import 'grapesjs/dist/css/grapes.min.css'
import plugin from 'plugin'

const DefaultEditor = () => {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor })
  }

  return (
    <GjsEditor
      grapesjs={grapesjs}
      options={{
        height: '100vh',
        storageManager: false,
        undoManager: { trackSelection: false },
        selectorManager: { componentFirst: true },
        projectData: {
          pages: [
            {
              name: 'Home page',
              component: `<h1>GrapesJS React Custom UI</h1>`,
            },
          ],
        },
        styleManager: {
          sectors: [
            {
              name: 'Text',
              open: true,
              buildProps: [
                'font-family',
                'color',
                'font-size',
                'font-weight',
                'line-height',
                'letter-spacing',
                'text-align',
              ],
              properties: [
                {
                  name: 'Font',
                  property: 'font-family',
                  type: 'font-select',
                  full: true,
                  default: 'inherit',
                  options: [
                    { id: 'inherit', name: '[same as parent]', value: 'inherit' },
                    { id: 'Arial', name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
                  ],
                },
              ],
            },
          ],
        },
        plugins: [e => plugin(e, {})],
      }}
      onEditor={onEditor}
    />
  )
}

export default {
  title: 'Plugin',
  component: DefaultEditor,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof DefaultEditor>

const Template: ComponentStory<typeof DefaultEditor> = () => {
  return <DefaultEditor />
}

export const Plugin = Template.bind({})
