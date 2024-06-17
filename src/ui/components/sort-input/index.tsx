import { Select } from 'antd'
import React from 'react'
import { useSearchContext } from 'context/search-context'

const SortInput = () => {
    const { sort, setSort } = useSearchContext()

  return (
    <Select
      value={sort}
      style={{ width: '100%' }}
      onChange={setSort}
      options={[
        { label: 'Trending', value: 'trending' },
        { label: 'Popularity', value: 'popularity' },
        { label: 'Alpha', value: 'alpha' },
        { label: 'Date', value: 'date' },
        { label: 'Style', value: 'style' }
      ]}
    />
  )
}

export default SortInput
