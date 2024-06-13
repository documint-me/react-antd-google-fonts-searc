import React, { useState } from 'react'
import {
  Col,
  Row,
  Divider,
  Input,
  Select,
  Button,
  Typography,
  Segmented,
  Drawer,
  Skeleton,
  Card,
  Space,
  BackTop,
} from 'antd'
import { FilterOutlined, AppstoreOutlined, BarsOutlined, CloseOutlined, ReloadOutlined } from '@ant-design/icons'
import './style.css'

const { Search } = Input
const { Text } = Typography

// TODO filters count, about and license, modal to select subsets and add, manage fonts tab

const SearchLayout = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const onClose = () => {
    setOpen(false)
  }
  const onSearch = (value: string) => console.log(value)
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <BackTop />
      <Drawer
        title={
          <Button type="text" icon={<ReloadOutlined />} disabled>
            Reset all
          </Button>
        }
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Divider orientation="left">Preview</Divider>
        <Row gutter={[16, 16]}></Row>
        <Divider orientation="left">Filters</Divider>
        <Row gutter={[16, 16]}></Row>
      </Drawer>
      <Row gutter={[16, 16]}>
        <Col span={21}>
          <Search placeholder="input search text" onSearch={onSearch} />
        </Col>
        <Col span={3} className="flex-end">
          <Select
            defaultValue="lucy"
            style={{ width: '100%' }}
            onChange={handleChange}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'disabled',
                disabled: true,
                label: 'Disabled',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Button
            shape="round"
            onClick={toggleDrawer}
            type={open ? 'primary' : 'default'}
            icon={open ? <CloseOutlined /> : <FilterOutlined />}
          >
            Filters
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text type="secondary">1258 results</Text>
        </Col>
        <Col span={12} className="flex-end">
          <Segmented
            options={[
              {
                label: '',
                value: 'grid',
                icon: <AppstoreOutlined />,
              },
              {
                label: '',
                value: 'list',
                icon: <BarsOutlined />,
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Skeleton active />
          </Card>
        </Col>
      </Row>
    </Space>
  )
}

export default SearchLayout
