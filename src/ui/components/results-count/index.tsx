import { Typography } from 'antd'
import { useSearchContext } from 'context/search-context'
import React from 'react'

const { Text } = Typography

const ResultsCount = () => {
    const { fonts } = useSearchContext()
  return (
    <Text type="secondary">{fonts.length} results</Text>
  )
}

export default ResultsCount