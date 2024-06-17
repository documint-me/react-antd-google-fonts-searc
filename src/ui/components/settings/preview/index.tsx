import { ReloadOutlined } from '@ant-design/icons'
import { Button, Col, Row, Input, Typography, Slider } from 'antd'
import React from 'react'
import { useSearchContext } from 'context/search-context'

const { TextArea } = Input
const { Text } = Typography

const Preview = () => {
  const { text, setText, randomizeText, previewSize, setPreviewSize } = useSearchContext()
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Button type="text" icon={<ReloadOutlined />} onClick={randomizeText}>
          Randomize
        </Button>
      </Col>
      <Col span={24}>
        <TextArea placeholder="Type something..." value={text} onChange={e => setText(e.target.value)} />
      </Col>
      <Col span={4} style={{ alignContent: 'center' }}>
        <Text type="secondary">{previewSize}px</Text>
      </Col>
      <Col span={20}>
        <Slider value={previewSize} onChange={setPreviewSize} />
      </Col>
    </Row>
  )
}

export default Preview
