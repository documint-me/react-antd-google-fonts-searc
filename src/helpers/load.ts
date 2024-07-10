import WebFont from 'webfontloader'
import { FontType, FontSortMapType } from 'types/index'

export const PAGE_SIZE = 1000

export const SEARCH_PAGE_SIZE = 500

export const loadFontData = async (sort: string, ignoreWebfontsLoad?: boolean): Promise<FontType[]> => {
  const url = 'https://www.googleapis.com/webfonts/v1/webfonts?'
  const key = process.env.REACT_APP_GOOGLE_API_KEY

  try {
    const res = await fetch(`${url}sort=${sort}&key=${key}`)
    const resJson: { items: FontType[] } = await res.json()

    const pages = Math.ceil(resJson.items.length / PAGE_SIZE)

    !ignoreWebfontsLoad && Array.from(Array(pages).keys()).forEach(page => {
      WebFont.load({
        classes: false,
        google: {
          families: [...resJson.items].slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE).map(font => font.family),
          text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        },
      })
    })

    return resJson.items
  } catch (error) {
    console.error(url, (error as Error).toString())
    return []
  }
}

export const loadFonts = (fonts: FontType[]) => {
  WebFont.load({
    classes: false,
    google: {
      families: fonts.map((font: FontType) => font.family),
      text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    },
  })
}

export const checkCategory = (font: FontType, category: string, subset: string) => {
  if (category === 'all' && subset === 'all') {
    return true
  }
  if (category === 'all' && subset !== 'all') {
    return font.subsets.indexOf(subset) > -1
  }
  if (category !== 'all' && subset === 'all') {
    return font.category === category
  }
  return font.category === category && font.subsets.indexOf(subset) > -1
}

export const filterFonts = (
  allFonts: FontSortMapType,
  sort: string,
  category: string,
  subset: string,
  search: string
) => {
  search = search.toLowerCase().trim()
  let fonts: string[] = []
  let data = allFonts[sort]

  data = data.filter(function (elem) {
    let isCategory = true,
      isMatch = true

    isCategory = Boolean(checkCategory(elem, category, subset))

    if (search.length > 0) {
      isMatch = elem.family.toLowerCase().indexOf(search) !== -1
    }

    return isCategory && isMatch
  })

  data.forEach(font => {
    const hasRegular = font.variants.indexOf('regular') !== -1
    let subsets = ''

    if (subset !== 'latin') {
      if (font.subsets.indexOf('latin') !== -1) {
        subsets = ':latin,' + category
      } else {
        subsets = ':' + category
      }
    }

    if (hasRegular) {
      fonts.push(font.family + subsets)
    } else {
      fonts.push(font.family + ':' + font.variants[0] + subsets)
    }
  })

  if (fonts.length > 0) {
    const pages = Math.ceil(fonts.length / SEARCH_PAGE_SIZE)
    Array.from(Array(pages).keys()).forEach(page => {
      WebFont.load({
        classes: false,
        google: {
          families: fonts.slice(page * SEARCH_PAGE_SIZE, (page + 1) * SEARCH_PAGE_SIZE)
        },
      })
    })
  }

  return data
}
