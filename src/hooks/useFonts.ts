import { FontType } from "types/index"
import { useCallback, useState } from "react"

const useFontSettings = (fonts: FontType[], setFonts: (fonts: FontType[]) => void, onChange?: (...args: any[]) => void ) => {
  const [savedFonts, setSavedFonts] = useState(fonts)

  const saveFont = useCallback((font: FontType) => {
    const fontToUpdate = savedFonts.findIndex((thisFont) => thisFont.family === font.family)
    if (fontToUpdate >= 0) {
      const fontsToUpdate = [...savedFonts]
      fontsToUpdate[fontToUpdate] = font
      setSavedFonts(fontsToUpdate)
      onChange?.(fontsToUpdate)
    }  else {
      setSavedFonts([...savedFonts, font])
      setFonts([...savedFonts, font])
      onChange?.([...savedFonts, font])
    }
  }, [])

  const deleteFont = useCallback((font: FontType) => {
    const fontToDelete = savedFonts.findIndex((thisFont) => thisFont.family === font.family)
    if (fontToDelete > -1) {
      const fontsToUpdate = [...savedFonts]
      fontsToUpdate.splice(fontToDelete, 1)
      setSavedFonts(fontsToUpdate)
      setFonts(fontsToUpdate)
      onChange?.(fontsToUpdate)
    }
    
  }, [])

  return {
    fonts: savedFonts,
    saveFont,
    deleteFont
  }
}

export default useFontSettings
