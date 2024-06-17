import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Segmented } from 'antd'
import React from 'react'
import { useSearchContext } from 'context/search-context'

const ToggleView = () => {
  const { view, setView } = useSearchContext()
  return (
    <Segmented
      value={view}
      onChange={value => setView(value.toString())}
      options={[
        {
          label: '',
          value: 'grid',
          icon: <AppstoreOutlined />,
        },
        {
          label: '',
          value: 'list',
          icon: <BarsOutlined />,
        },
      ]}
    />
  )
}

export default ToggleView
