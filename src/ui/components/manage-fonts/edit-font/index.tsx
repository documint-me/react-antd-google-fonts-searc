import React, { FC, useMemo, useState } from 'react'
import { Modal, Row, Col, Checkbox, Typography } from 'antd'
import { useSearchContext } from 'context/search-context'
import { getLinkFormats, transformVariantsLinks } from 'helpers/generators'
import useFontSettings from 'hooks/useFonts'

const { Text } = Typography

interface IEditFont {
  onChange?: (...args: any[]) => void
}

const EditFont: FC<IEditFont> = ({ onChange }) => {
  const { font, savedFonts, setSavedFonts, editFontOpen, setEditFontOpen } = useSearchContext()
  const { fonts, saveFont } = useFontSettings(savedFonts, setSavedFonts, onChange)
  const currentSavedFont = useMemo(() => fonts.find(f => f.family === font.family), [fonts, font])

  const [variants, setVariants] = useState(
    font.variants.reduce((acc: { [key: string]: boolean }, variant) => {
      if (!variant) return acc
      acc[variant] = Boolean(currentSavedFont?.variants.includes(variant))
      return acc
    }, {})
  )
  const [subsets, setSubsets] = useState(
    font.subsets.reduce((acc: { [key: string]: boolean }, subset) => {
      if (!subset) return acc
      acc[subset] = Boolean(currentSavedFont?.subsets.includes(subset))
      return acc
    }, {})
  )

  return (
    <Modal
      title={font.family}
      okText="Save"
      open={editFontOpen}
      onOk={() => {
        saveFont({
          ...font,
          variants: Object.keys(variants).filter(key => variants[key]),
          subsets: Object.keys(subsets).filter(key => subsets[key]),
        })
        setEditFontOpen(false)
      }}
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
                <Checkbox
                  key={i}
                  style={variant.css}
                  checked={variants[variant.variant]}
                  onChange={e => setVariants({ ...variants, [variant.variant]: e.target.checked })}
                >
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
          {font.subsets.map(subset => {
            return (
              <div>
                <Checkbox
                  key={subset}
                  checked={subsets[subset]}
                  onChange={e => setSubsets({ ...subsets, [subset]: e.target.checked })}
                >
                  {subset}
                </Checkbox>
              </div>
            )
          })}
        </Col>
      </Row>
    </Modal>
  )
}

export default EditFont
