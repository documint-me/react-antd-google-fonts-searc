import { ComponentMeta, ComponentStory } from '@storybook/react'
import 'antd/dist/antd.css'
import React from 'react'
import { GoogleFontsSearch } from '../index'

export default {
  title: 'Main',
  component: GoogleFontsSearch,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof GoogleFontsSearch>

const Template: ComponentStory<typeof GoogleFontsSearch> = () => {
  return <GoogleFontsSearch />
}

export const Main = Template.bind({})
