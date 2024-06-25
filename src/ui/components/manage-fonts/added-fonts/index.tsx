import { Card, Col, Row, Typography, Button } from 'antd'
import { useSearchContext } from 'context/search-context'
import React, { FC } from 'react'
import { FontType } from 'types/index'
import WebFont from 'webfontloader'
import { CloseOutlined } from '@ant-design/icons'
import useFontSettings from 'hooks/useFonts'

const { Text } = Typography

interface IFont {
  font: FontType
  onChange?: (...args: any[]) => void
}

interface IAddedFonts {
  onChange?: (...args: any[]) => void
}

const Font: FC<IFont> = ({ font, onChange }) => {
  const { savedFonts, setSavedFonts, setFont, setEditFontOpen } = useSearchContext()
  const { deleteFont } = useFontSettings(savedFonts, setSavedFonts, onChange)

  return (
    <Col span={24}>
      <Card
        style={{ cursor: 'pointer' }}
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
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={e => {
                e.stopPropagation()
                deleteFont(font)
              }}
            />
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

const AddedFonts: FC<IAddedFonts> = ({ onChange }) => {
  const { savedFonts, fonts } = useSearchContext()
  return (
    <>
      {savedFonts.length ? (
        savedFonts.map((font, i) => <Font key={i} onChange={onChange} font={fonts.find(f => f.family === font.family) ?? font} />)
      ) : (
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text strong>You haven't added any fonts</Text>
        </Col>
      )}
    </>
  )
}

export default AddedFonts
