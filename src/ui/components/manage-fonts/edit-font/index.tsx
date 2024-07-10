import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Modal, Row, Col, Checkbox, Typography, message } from 'antd'
import { useSearchContext } from 'context/search-context'
import { getLinkFormats, transformVariantsLinks } from 'helpers/generators'
import useFontSettings from 'hooks/useFonts'

const { Text } = Typography

interface IEditFont {
  onChange?: (...args: any[]) => void
}

const EditFont: FC<IEditFont> = ({ onChange }) => {
  const { font, savedFonts, setSavedFonts, editFontOpen, setEditFontOpen } = useSearchContext()
  const { saveFont } = useFontSettings(savedFonts, setSavedFonts, onChange)
  const currentSavedFont = useMemo(() => savedFonts.find(f => f.family === font.family), [savedFonts, font])

  const allFalse = useCallback((obj: { [key: string]: boolean }) => Object.values(obj).every(value => !value), [])

  const getCheckboxValues = useCallback(
    (item: 'variants' | 'subsets') =>
      font[item].reduce((acc: { [key: string]: boolean }, search) => {
        if (!search) return acc
        if (!currentSavedFont) acc[search] = true
        else acc[search] = Boolean(currentSavedFont?.[item]?.includes(search))
        return acc
      }, {}),
    [font, currentSavedFont]
  )

  const [variants, setVariants] = useState(getCheckboxValues('variants'))
  const [subsets, setSubsets] = useState(getCheckboxValues('subsets'))

  useEffect(() => {
    setVariants(getCheckboxValues('variants'))
    setSubsets(getCheckboxValues('subsets'))
  }, [font, currentSavedFont])

  return (
    <Modal
      title={font.family}
      okText="Save"
      open={editFontOpen}
      onOk={() => {
        if (allFalse(variants) || allFalse(subsets)) {
          message.info('Select at least one subset and one variant')
        } else {
          saveFont({
            ...font,
            variants: Object.keys(variants).filter(key => variants[key]),
            subsets: Object.keys(subsets).filter(key => subsets[key]),
          })
          setEditFontOpen(false)
        }
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
              <div key={i}>
                <Checkbox
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
              <div key={subset}>
                <Checkbox
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
