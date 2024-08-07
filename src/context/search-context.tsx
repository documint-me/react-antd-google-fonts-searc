import React, { FC, PropsWithChildren, useContext, useState, useCallback, useEffect } from 'react'
import { FontType, FontSortMapType } from '../types/index'
import { texts } from 'helpers/constants'
import { loadFontData, filterFonts } from 'helpers/load'

export const SearchContext = React.createContext<{
  editFontOpen: boolean
  setEditFontOpen: (val: boolean) => void
  loading: boolean
  allFonts: FontSortMapType
  fonts: FontType[]
  savedFonts: FontType[]
  setSavedFonts: (val: FontType[]) => void
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
  sort: string
  setSort: (val: string) => void
  text: string
  setText: (val: string) => void
  font: FontType
  setFont: (val: FontType) => void
  randomizeText: () => void
  suggest: (val: 'paragraph' | 'heading') => void
  resetAll: () => void
  currentFontLoading: boolean
  setCurrentFontLoading: (val: boolean) => void
}>({
  editFontOpen: false,
  setEditFontOpen: () => {},
  loading: false,
  allFonts: { popularity: [] },
  fonts: [],
  savedFonts: [],
  setSavedFonts: () => {},
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
  sort: '',
  setSort: () => {},
  text: '',
  setText: () => {},
  font: { family: '', variants: [], subsets: [] },
  setFont: () => {},
  randomizeText: () => {},
  suggest: () => {},
  resetAll: () => {},
  currentFontLoading: false,
  setCurrentFontLoading: () => {},
})

interface ISearchProvider {
  addedFonts?: FontType[]
}

const SearchProvider: FC<ISearchProvider & PropsWithChildren> = ({ addedFonts, children }) => {
  const [loading, setLoading] = useState(false)
  const [editFontOpen, setEditFontOpen] = useState(false)
  const [currentFontLoading, setCurrentFontLoading] = useState(false)
  const [allFonts, setAllFonts] = useState<FontSortMapType>({ popularity: [] })
  const [fonts, setFonts] = useState<FontType[]>([])
  const [savedFonts, setSavedFonts] = useState<FontType[]>(addedFonts ?? [])
  const [previewSize, setPreviewSize] = useState(30)
  const [view, setView] = useState('grid')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [subset, setSubset] = useState('all')
  const [sort, setSort] = useState('popularity')
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog.')
  const [font, setFont] = useState<FontType>({ family: '', variants: [], subsets: [] })

  const randomizeText = useCallback(() => setText(texts[Math.floor(Math.random() * texts.length)]), [])
  const resetAll = useCallback(() => {
    setPreviewSize(30)
    setCategory('all')
    setSort('popularity')
    setText('The quick brown fox jumps over the lazy dog.')
    setSubset('')
    setSearch('')
  }, [])

  const suggest = useCallback((_key: 'paragraph' | 'heading') => {}, [])

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
    allFonts[sort] && setFonts(filterFonts(allFonts, sort, category, subset, search))
  }, [allFonts, sort, category, search, subset])

  return (
    <SearchContext.Provider
      value={{
        editFontOpen,
        setEditFontOpen,
        loading,
        fonts,
        allFonts,
        savedFonts,
        setSavedFonts,
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
        sort,
        setSort,
        text,
        setText,
        font,
        setFont,
        randomizeText,
        resetAll,
        currentFontLoading,
        setCurrentFontLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)

export default SearchProvider
