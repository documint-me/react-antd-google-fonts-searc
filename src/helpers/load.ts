import WebFont from 'webfontloader'
import { FontType, FontSortMapType } from 'types/index'

export const loadFontData = async (sort: string): Promise<FontType[]> => {
  const url = 'https://www.googleapis.com/webfonts/v1/webfonts?'
  const key = process.env.REACT_APP_GOOGLE_API_KEY

  try {
    const res = await fetch(`${url}sort=${sort}&key=${key}`)
    const resJson = await res.json()

    WebFont.load({
      classes: false,
      google: {
        families: resJson.items.map((font: FontType) => font.family),
        text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      },
    })

    return resJson.items
  } catch (error) {
    console.error(url, (error as Error).toString())
    return []
  }
}

export const checkCategory = (font: FontType, category: string, filterType: string, suggestions: string[] = []) => {
  if (category === 'all') {
    return true
  }

  if (filterType === 'category') {
    return font.category === category
  } else if (filterType === 'suggestion') {
    return suggestions.indexOf(font.family) > -1
  } else if (filterType === 'subset') {
    return font.subsets.indexOf(category) > -1
  }
}

export const filterFonts = (
  allFonts: FontSortMapType,
  sort: string,
  category: string,
  filterType: string,
  search: string,
  suggestions?: string[]
) => {
  search = search.toLowerCase().trim()
  let fonts: string[] = []
  let data = allFonts[sort]

  if (category !== 'all' || search.length > 0) {
    data = data.filter(function (elem, i, arr) {
      let isCategory = true,
        isMatch = true

      isCategory = Boolean(checkCategory(elem, category, filterType, suggestions ?? []))

      if (search.length > 0) {
        isMatch = elem.family.toLowerCase().indexOf(search) !== -1
      }

      return isCategory && isMatch
    })
  }

  data.forEach(font => {
    const hasRegular = font.variants.indexOf('regular') !== -1
    //const hasLatin = ($.inArray('latin', font.variants) !== -1);
    let subsets = ''

    if (filterType === 'subset' && category !== 'latin') {
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
    WebFont.load({
      classes: false,
      google: {
        families: fonts,
      },
    })
  }

  return data
}
