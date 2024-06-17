import React, { PropsWithChildren, useContext, useState, useCallback, useEffect } from 'react'
import { FontType, FontSortMapType } from '../types/index'
import { texts, paragraphs, headings } from 'helpers/constants'
import { loadFontData, filterFonts } from 'helpers/load'

export const SearchContext = React.createContext<{
  loading: boolean
  allFonts: FontSortMapType
  fonts: FontType[]
  previewSize: number
  setPreviewSize: (val: number) => void
  view: string
  setView: (val: string) => void
  search: string
  setSearch: (val: string) => void
  category: string
  setCategory: (val: string) => void
  subset: string
  setSubset: (val: string) => void
  filterType: string
  setFilterType: (val: string) => void
  sort: string
  setSort: (val: string) => void
  text: string
  setText: (val: string) => void
  font: FontType
  setFont: (val: FontType) => void
  randomizeText: () => void
  suggest: (val: 'paragraph' | 'heading') => void
  resetAll: () => void
}>({
  loading: false,
  allFonts: { popularity: [] },
  fonts: [],
  previewSize: 0,
  setPreviewSize: () => {},
  view: '',
  setView: () => {},
  search: '',
  setSearch: () => {},
  category: '',
  setSubset: () => {},
  subset: '',
  setCategory: () => {},
  filterType: '',
  setFilterType: () => {},
  sort: '',
  setSort: () => {},
  text: '',
  setText: () => {},
  font: { family: '', variants: [], subsets: [] },
  setFont: () => {},
  randomizeText: () => {},
  suggest: () => {},
  resetAll: () => {},
})

const SearchProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false)
  const [allFonts, setAllFonts] = useState<FontSortMapType>({ popularity: [] })
  const [fonts, setFonts] = useState<FontType[]>([])
  const [previewSize, setPreviewSize] = useState(30)
  const [view, setView] = useState('grid')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [subset, setSubset] = useState('')
  const [filterType, setFilterType] = useState('category')
  const [sort, setSort] = useState('popularity')
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog.')
  const [font, setFont] = useState<FontType>({ family: '', variants: [], subsets: [] })

  const randomizeText = useCallback(() => setText(texts[Math.floor(Math.random() * texts.length)]), [])
  const resetAll = useCallback(() => {
    setPreviewSize(30)
    setCategory('all')
    setFilterType('category')
    setSort('popularity')
    setText('The quick brown fox jumps over the lazy dog.')
    setSubset('')
    setSearch('')
  }, [])

  const suggest = useCallback(
    (key: 'paragraph' | 'heading') =>
      allFonts[sort] &&
      setFonts(
        filterFonts(allFonts, sort, category, 'suggestion', search, key === 'paragraph' ? paragraphs : headings)
      ),
    [allFonts, sort, category, search]
  )

  useEffect(() => {
    setLoading(true)
    const loadAllFonts = async () => {
      const fonts = await loadFontData(sort)
      setAllFonts({ ...allFonts, [sort]: fonts })
      setLoading(false)
    }
    loadAllFonts()
  }, [sort])

  useEffect(() => {
    allFonts[sort] && setFonts(filterFonts(allFonts, sort, category, filterType, search))
  }, [allFonts, sort, category, filterType, search])

  return (
    <SearchContext.Provider
      value={{
        loading,
        fonts,
        allFonts,
        previewSize,
        suggest,
        setPreviewSize,
        view,
        setView,
        search,
        setSearch,
        category,
        setCategory,
        subset,
        setSubset,
        filterType,
        setFilterType,
        sort,
        setSort,
        text,
        setText,
        font,
        setFont,
        randomizeText,
        resetAll,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)

export default SearchProvider
