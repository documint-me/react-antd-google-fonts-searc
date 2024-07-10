import { Col, Row, Typography, Select } from 'antd'
import React from 'react'
import { useSearchContext } from 'context/search-context'

const { Text } = Typography

const Filters = () => {
  const { category, setCategory, subset, setSubset } = useSearchContext()
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <div style={{ marginBottom: 5 }}>
          <Text type="secondary">Category:</Text>
        </div>
        <Select
          value={category}
          onChange={val => setCategory(val)}
          style={{ width: '100%' }}
          options={[
            { label: 'All', value: 'all' },
            { label: 'Sans-Serif', value: 'sans-serif' },
            { label: 'Serif', value: 'serif' },
            { label: 'Display', value: 'display' },
            { label: 'Handwriting', value: 'handwriting' },
            { label: 'Monospace', value: 'monospace' },
          ]}
        />
      </Col>
      <Col span={12}>
        <div style={{ marginBottom: 5 }}>
          <Text type="secondary">Subset:</Text>
        </div>
        <Select
          value={subset}
          onChange={val => setSubset(val)}
          style={{ width: '100%' }}
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
        />
      </Col>
    </Row>
  )
}

export default Filters
