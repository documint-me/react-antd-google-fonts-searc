import { FontType, FontWeightsType } from 'types/index'
import { weightLabels } from './constants'

export const getLinkFormats = (font: FontType) => {
  const family = font.family.replace(/ /g, '+')
  let url = 'https://fonts.googleapis.com/css?family=' + family
  let category = font.category

  if (category === 'display' || category === 'handwriting') {
    category = 'cursive'
  }

  if (font.variants.length > 0) {
    url = url + ':' + font.variants.join(',')
  }

  if (font.subsets.length > 0) {
    url = url + '&subset=' + font.subsets.join(',')
  }

  const value = "'" + font.family + "', " + category
  const html = "<link href='" + url + "' rel='stylesheet' type='text/css'>"
  const css = '@import url(' + url + ');'
  const google = 'https://fonts.google.com/specimen/' + family

  return {
    html,
    css,
    fontFamily: value,
    google,
    url
  }
}

export const transformVariantsLinks = (variants: string[], fontFamily: string) => {
  return variants.map(function (variant) {
    let slug = variant
    let style = ''
    let fontStyle = 'normal'
    let fontWeight: FontWeightsType = 400

    if (slug === 'regular') {
      slug = '400'
    } else if (slug === 'italic') {
      slug = '400italic'
      style = 'Italic'
      fontStyle = 'italic'
    } else if (slug.length === 3) {
      fontWeight = parseInt(slug) as FontWeightsType
    } else {
      style = 'Italic'
      fontStyle = 'italic'
      fontWeight = parseInt(slug.substring(0, 3)) as FontWeightsType
    }

    return {
      label: weightLabels[fontWeight],
      variant,
      slug,
      style,
      weight: fontWeight,
      css: {
        fontFamily,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
      },
    }
  })
}
