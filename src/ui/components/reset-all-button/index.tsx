import { ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useSearchContext } from 'context/search-context'

const ResetAllButton = () => {
  const { resetAll } = useSearchContext()
  return (
    <Button type="text" icon={<ReloadOutlined />} onClick={resetAll}>
      Reset
    </Button>
  )
}

export default ResetAllButton
