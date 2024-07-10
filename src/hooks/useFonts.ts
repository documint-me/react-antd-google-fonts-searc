import { FontType } from 'types/index'
import { useCallback, useState } from 'react'

const useFontSettings = (
  fonts: FontType[],
  setFonts: (fonts: FontType[]) => void,
  onChange?: (...args: any[]) => void
) => {
  const saveFont = useCallback(
    (font: FontType) => {
      const fontToUpdate = fonts.findIndex(thisFont => thisFont.family === font.family)
      if (fontToUpdate >= 0) {
        const fontsToUpdate = [...fonts]
        fontsToUpdate[fontToUpdate] = font
        setFonts(fontsToUpdate)
        onChange?.(fontsToUpdate)
      } else {
        setFonts([...fonts, font])
        onChange?.([...fonts, font])
      }
    },
    [fonts, setFonts, onChange]
  )

  const deleteFont = useCallback(
    (font: FontType) => {
      const fontToDelete = fonts.findIndex(thisFont => thisFont.family === font.family)
      if (fontToDelete > -1) {
        const fontsToUpdate = [...fonts]
        fontsToUpdate.splice(fontToDelete, 1)
        setFonts(fontsToUpdate)
        onChange?.(fontsToUpdate)
      }
    },
    [fonts, setFonts, onChange]
  )

  return {
    saveFont,
    deleteFont,
  }
}

export default useFontSettings
