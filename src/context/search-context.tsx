import React, { PropsWithChildren, useContext } from 'react'

export const SearchContext = React.createContext<{}>({})

const SearchProvider = ({ children }: PropsWithChildren) => {
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>
}

export const useSearchContext = () => useContext(SearchContext)

export default SearchProvider
