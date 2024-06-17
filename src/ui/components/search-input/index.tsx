import { Input } from 'antd'
import React from 'react'
import { useSearchContext } from 'context/search-context'

const { Search } = Input

const SearchInput = () => {
  const { search, setSearch } = useSearchContext()
  return <Search placeholder="input search text" value={search} onChange={e => setSearch(e.target.value)} />
}

export default SearchInput
