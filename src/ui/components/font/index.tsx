import { Card, Col, Row, Typography, Pagination } from 'antd'
import { useSearchContext } from 'context/search-context'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { FontType } from 'types/index'
import FontSkeleton from '../font-skeleton'
import WebFont from 'webfontloader'
import { loadFonts, loadFontsWithSubsets } from 'helpers/load'

const { Text } = Typography

interface IFont {
  font: FontType
}

const PAGE_SIZE = 16

const Font: FC<IFont> = ({ font }) => {
  const { view, text, previewSize, setFont, setEditFontOpen, setCurrentFontLoading } = useSearchContext()
  const isGrid = view === 'grid'

  return (
    <Col span={isGrid ? 6 : 24}>
      <Card
        onClick={() => {
          setFont(font)
          setEditFontOpen(true)
          WebFont.load({
            classes: false,
            google: {
              families: [font.family + ':' + font.variants.join(',') + ':' + font.subsets.join(',')],
              text: 'acdedghilmnortuxBEILMNSTU0123456789-',
            },
            active: function () {
              setCurrentFontLoading(false)
            },
            loading: function () {
              setCurrentFontLoading(true)
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
  const { loading, fonts, search, category, subset, sort } = useSearchContext()
  const [page, setPage] = useState(1)

  const currentFonts = useMemo(() => [...fonts].slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [fonts, page])

  useEffect(() => {
    loadFonts(currentFonts)
    loadFontsWithSubsets(currentFonts, category, subset)
  }, [page])

  useEffect(() => {
    setPage(1)
  }, [search, category, subset, sort])

  return (
    <>
      {loading && (
        <Row gutter={[16, 16]} className="fonts-body">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(val => (
            <FontSkeleton key={val} />
          ))}
        </Row>
      )}
      {!loading && (
        <>
          {fonts.length ? (
            <>
              <div className="flex-center">
                <Pagination simple current={page} total={fonts.length} defaultPageSize={PAGE_SIZE} onChange={setPage} />
              </div>
              <Row gutter={[16, 16]} className="fonts-body">
                {currentFonts.map((font, i) => (
                  <Font key={i} font={font} />
                ))}
              </Row>
              <div className="flex-center">
                <Pagination simple current={page} onChange={setPage} defaultPageSize={PAGE_SIZE} total={fonts.length} />
              </div>
            </>
          ) : (
            <Row gutter={[16, 16]} className="fonts-body">
              <Col span={24} style={{ textAlign: 'center' }}>
                <Text strong>No fonts found</Text>
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  )
}

export default Fonts
