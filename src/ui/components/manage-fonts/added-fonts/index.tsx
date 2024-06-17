import { Card, Col, Row, Typography, Button } from 'antd'
import { useSearchContext } from 'context/search-context'
import React, { FC } from 'react'
import { FontType } from 'types/index'
import WebFont from 'webfontloader'
import { CloseOutlined } from '@ant-design/icons'

const { Text } = Typography

interface IFont {
  font: FontType
}

const Font: FC<IFont> = ({ font }) => {
  const { setFont, setEditFontOpen } = useSearchContext()

  return (
    <Col span={24}>
      <Card
        onClick={() => {
          WebFont.load({
            classes: false,
            google: {
              families: [font.family + ':' + font.variants.join(',') + ':' + font.subsets.join(',')],
              text: 'acdedghilmnortuxBEILMNSTU0123456789-',
            },
            active: function () {
              setFont(font)
              setEditFontOpen(true)
            },
          })
        }}
      >
        <Row gutter={16}>
          <Col span={21}>
            <div
              style={{
                fontFamily: "'" + font.family + "'",
              }}
            >
              <div>
                <span>{font.family}</span>
              </div>
            </div>
          </Col>
          <Col span={3}>
            <Button type="text" icon={<CloseOutlined />} onClick={(e) => e.stopPropagation()} />
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

const AddedFonts = () => {
  const { fonts } = useSearchContext()
  return (
    <>
      {fonts.length ? (
        fonts.map((font, i) => <Font key={i} font={font} />)
      ) : (
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text strong>You haven't added any fonts</Text>
        </Col>
      )}
    </>
  )
}

export default AddedFonts
