import { Card, Col, Skeleton } from 'antd'
import { useSearchContext } from 'context/search-context'
import React from 'react'

const FontSkeleton = () => {
  const { view } = useSearchContext()
  const isGrid = view === 'grid'

  return (
    <Col span={isGrid ? 6 : 24}>
      <Card>
        <Skeleton active />
      </Card>
    </Col>
  )
}

export default FontSkeleton
