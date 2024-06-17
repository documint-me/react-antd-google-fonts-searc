import React, { useState } from 'react'
import { Col, Row, Divider, Button, Drawer, Space, BackTop } from 'antd'
import { FilterOutlined, CloseOutlined, SettingOutlined } from '@ant-design/icons'
import Fonts from 'ui/components/font'
import SearchInput from 'ui/components/search-input'
import SortInput from 'ui/components/sort-input'
import ToggleView from 'ui/components/toggle-view'
import SearchProvider from 'context/search-context'
import Preview from 'ui/components/settings/preview'
import Filters from 'ui/components/settings/filters'
import ResetAllButton from 'ui/components/reset-all-button'
import ResultsCount from 'ui/components/results-count'
import './style.css'

// TODO modal to select subsets and add, manage fonts tab

const SearchLayout = () => {
  const [openFilters, setOpenFilters] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

  return (
    <SearchProvider>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <BackTop />
        <Drawer title={<ResetAllButton />} placement="right" onClose={() => setOpenFilters(false)} open={openFilters}>
          <Divider orientation="left">Preview</Divider>
          <Preview />
          <Divider orientation="left">Filters</Divider>
          <Filters />
        </Drawer>
        <Drawer title="My Fonts" placement="right" onClose={() => setOpenSettings(false)} open={openSettings}></Drawer>
        <Row gutter={[16, 16]}>
          <Col span={21}>
            <SearchInput />
          </Col>
          <Col span={3} className="flex-end">
            <SortInput />
          </Col>
          <Col span={24}>
            <Button
              shape="round"
              onClick={() => setOpenFilters(!openFilters)}
              type="primary"
              icon={openFilters ? <CloseOutlined /> : <FilterOutlined />}
              style={{ marginRight: 5 }}
            >
              Filters
            </Button>
            <Button
              shape="round"
              onClick={() => setOpenSettings(!openSettings)}
              type={openSettings ? 'primary' : 'default'}
              icon={openSettings ? <CloseOutlined /> : <SettingOutlined />}
            >
              Manage My Fonts
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <ResultsCount />
          </Col>
          <Col span={12} className="flex-end">
            <ToggleView />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Fonts />
        </Row>
      </Space>
    </SearchProvider>
  )
}

export default SearchLayout
