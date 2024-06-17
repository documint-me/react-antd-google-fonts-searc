import { Col, Radio, Row, Typography } from 'antd'
import React from 'react'
import { useSearchContext } from 'context/search-context'

const { Text } = Typography

const Filters = () => {
  const { category, setCategory, subset, setSubset } = useSearchContext()
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <div style={{ marginBottom: 5 }}>
          <Text type="secondary">Category:</Text>
        </div>
        <Radio.Group
          value={category}
          onChange={e => setCategory(e.target.value)}
          options={[
            { label: 'All', value: 'all' },
            { label: 'Sans-Serif', value: 'sans-serif' },
            { label: 'Serif', value: 'serif' },
            { label: 'Display', value: 'display' },
            { label: 'Handwriting', value: 'handwriting' },
            { label: 'Monospace', value: 'monospace' },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Col>
      <Col span={24}>
        <div style={{ marginBottom: 5 }}>
          <Text type="secondary">Subset:</Text>
        </div>
        <Radio.Group
          value={subset}
          onChange={e => setSubset(e.target.value)}
          options={[
            { label: 'All', value: 'all' },
            { label: 'Arabic', value: 'arabic' },
            { label: 'Cyrillic', value: 'cyrillic' },
            { label: 'Cyrillic Extended', value: 'cyrillic-ext' },
            { label: 'Devanagari', value: 'devanagari' },
            { label: 'Greek', value: 'greek' },
            { label: 'Greek Extended', value: 'greek-ext' },
            { label: 'Hebrew', value: 'hebrew' },
            { label: 'Khmer', value: 'khmer' },
            { label: 'Latin', value: 'latin' },
            { label: 'Latin Extended', value: 'latin-ext' },
            { label: 'Tamil', value: 'tamil' },
            { label: 'Telugu', value: 'telugu' },
            { label: 'Thai', value: 'thai' },
            { label: 'Vietnamese', value: 'vietnamese' },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Col>
    </Row>
  )
}

export default Filters
