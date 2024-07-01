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
        plugins: [
            (e) => plugin(e, {})
        ]
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

export const Main = Template.bind({})
