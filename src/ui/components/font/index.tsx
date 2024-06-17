import { Card, Col, Row, Typography } from 'antd'
import { useSearchContext } from 'context/search-context'
import React, { FC } from 'react'
import { FontType } from 'types/index'
import FontSkeleton from '../font-skeleton'
import WebFont from 'webfontloader'

const { Text } = Typography

interface IFont {
  font: FontType
}

const Font: FC<IFont> = ({ font }) => {
  const { view, text, previewSize, setFont, setEditFontOpen } = useSearchContext()
  const isGrid = view === 'grid'

  return (
    <Col span={isGrid ? 6 : 24}>
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
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text strong>{font.family}</Text>
          </Col>
          <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Text type="secondary">
              {font.variants.length} Style{font.variants.length === 1 ? '' : 's'}
            </Text>
          </Col>
          <Col span={24}>
            <div
              className="preview"
              style={{
                fontSize: previewSize,
                fontFamily: "'" + font.family + "'",
              }}
            >
              <div>
                <span>{text === 'fontName' ? font.family : text}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

const Fonts = () => {
  const { loading, fonts } = useSearchContext()
  return (
    <>
      {loading && [1, 2, 3, 4, 5, 6, 7, 8].map(val => <FontSkeleton key={val} />)}
      {!loading && fonts.length ? (
        fonts.map((font, i) => <Font key={i} font={font} />)
      ) : (
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text strong>No fonts found</Text>
        </Col>
      )}
    </>
  )
}

export default Fonts
