import WebFont from 'webfontloader'

export const loadFontData = async (sort: string, clb: (val: { [key: string]: string }) => void) => {
  const url = 'https://www.googleapis.com/webfonts/v1/webfonts?'
  const key = process.env.REACT_APP_GOOGLE_API_KEY

  try {
    const res = await fetch(`${url}sort=${sort}&key=${key}`)
    const resJson = await res.json()

    clb({ [sort]: resJson.items })

    let fonts = []
    for (let i = 0; i < 8; i++) {
      const font = resJson.items[i]
      fonts.push(font.family)
    }

    WebFont.load({
      classes: false,
      google: {
        families: fonts,
        text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      },
      active() {
        // TODO Handle infinite load
      },
    })
  } catch (error) {
    console.error(url, (error as Error).toString())
  }
}
