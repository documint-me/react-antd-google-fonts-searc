import React from 'react'
import { Modal, Row, Col, Checkbox, Typography } from 'antd'
import { useSearchContext } from 'context/search-context'
import { getLinkFormats, transformVariantsLinks } from 'helpers/generators'

const { Text } = Typography

const EditFont = () => {
  const { font, editFontOpen, setEditFontOpen } = useSearchContext()
  return (
    <Modal
      title={font.family}
      okText="Save"
      open={editFontOpen}
      onOk={() => {}}
      onCancel={() => setEditFontOpen(false)}
    >
      <Row gutter={16}>
        <Col span={12}>
          <div>
            <Text strong>Variants</Text>
          </div>
          {transformVariantsLinks(font.variants.sort(), getLinkFormats(font).fontFamily).map((variant, i) => {
            return (
              <div>
                <Checkbox key={i} style={variant.css}>
                  {variant.label} {variant.weight} {variant.style}
                </Checkbox>
              </div>
            )
          })}
        </Col>
        <Col span={12}>
          <div>
            <Text strong>Subsets</Text>
          </div>
          {font.subsets.sort().map(subset => {
            return (
              <div>
                <Checkbox key={subset}>{subset}</Checkbox>
              </div>
            )
          })}
        </Col>
      </Row>
    </Modal>
  )
}

export default EditFont
