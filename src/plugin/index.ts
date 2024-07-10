import { FontType } from 'types/index'
import type { Plugin } from 'grapesjs'
import { loadFontData } from 'helpers/load'
import { getLinkFormats } from 'helpers/generators'

export type PluginOptions = {
  section?: string
  property?: string
  onSelectGoogleFont?: (...args: any[]) => void
}

type FontOption = {
  label: string
  style?: string
  options: {
    value: string
    name?: string
    style?: string
    'data-gf'?: number
  }[]
}

export const plugin: Plugin<PluginOptions> = (editor, opts) => {
  const options: PluginOptions = {
    section: 'text',
    property: 'font-family',
    ...opts,
  }

  const { section, property } = options
  const pfx = editor.getConfig().stylePrefix
  const sm = editor.Styles
  const typeSelect = sm.getType('select')

  const loadFontToCanvas = (font: FontType) => {
    const doc = editor.Canvas.getDocument()
    const { html } = getLinkFormats(font)
    const link = editor.$(html)
    doc.head.appendChild(link.get(0))
  }

  editor.Commands.add('add-google-font', (editor, _sender, options) => {
    const { name, value } = options
    const font = { id: value, name: name ?? value, value }
    const prop = editor.StyleManager.getProperty(String(section), String(property))
    // @ts-ignore
    prop?.set('addedFonts', [...(prop?.get('addedFonts') ?? []), font])
  })

  editor.Commands.add('add-google-fonts', (editor, _sender, options) => {
    const { fonts } = options
    const prop = editor.StyleManager.getProperty(String(section), String(property))
    // @ts-ignore
    prop?.view.set(
      'addedFonts',
      fonts.map((font: FontType) => ({ id: font.family.split(',')[0], name: font.family, value: font.family }))
    )
    fonts.forEach((font: FontType) => loadFontToCanvas(font))
  })

  sm.addType('font-select', {
    model: typeSelect.model,
    view: typeSelect.view.extend({
      init() {
        this.listenTo(this.model, 'change:value', this.addGoogleFont)
        this.listenTo(this.model, 'change:addedFonts', this.updateOptions)
      },
      addGoogleFont() {
        const googleFonts = this.googleFonts

        const fontName = this.model.getFullValue(undefined, { skipImportant: true })
        const font = googleFonts.find((font: FontType) => font.family === fontName)

        const selInp = this.input?.querySelector(`option[value='${fontName}']`)

        if (font && selInp.getAttribute('data-gf')) {
          editor.runCommand('add-google-font', { name: font.family.split(',')[0], value: font.family, font })
          loadFontToCanvas(font)
          // * add font to global manager
          options.onSelectGoogleFont?.(font)
        }
      },
      templateInput() {
        return `<div class="${pfx}field ${pfx}select"><span id="${pfx}input-holder"><input type="text" name="font"></span><div class="${pfx}sel-arrow"><div class="${pfx}d-s-arrow"></div></div></div>`
      },
      updateOptions() {
        this.input = null
        this.onRender()
      },
      async onRender() {
        if (!this.input) {
          let optGroupStr = ''

          const allFonts = (this.googleFonts as FontType[]) ?? (await loadFontData('popularity', true))
          const addedFonts = this.model.get('addedFonts')

          this.googleFonts = allFonts

          const localFonts: FontOption[] = [
            {
              label: 'User Fonts',
              options: this.model.getOptions() as {
                value: string
                name?: string
                style?: string
              }[],
            },
            ...(addedFonts && addedFonts.length
              ? [
                  {
                    label: 'Added Google Fonts',
                    options: addedFonts as {
                      value: string
                      name?: string
                      style?: string
                    }[],
                  },
                ]
              : []),
            {
              label: 'Google Fonts',
              options: allFonts.map(font => ({
                name: font.family.split(',')[0],
                value: font.family,
                style: `font-family: "${font.family}";`,
                'data-gf': 1,
              })),
            },
          ]

          this.fontOptions = localFonts

          localFonts.forEach(group => {
            let groupStyle = group.style ? group.style.replace(/"/g, '&quot;') : ''
            let groupStyleAttr = groupStyle ? `style="${groupStyle}"` : ''
            let groupLabel = group.label.replace(/"/g, '&quot;')
            let optionsStr = ''
            group.options.forEach(option => {
              let name = option.name || option.value
              let style = option.style ? option.style.replace(/"/g, '&quot;') : ''
              let gf = option['data-gf'] ? option['data-gf'] : ''
              let gfAttr = gf ? 'data-gf="1"' : ''
              let styleAttr = style ? `style="${style}"` : ''
              let value = option.value.replace(/"/g, '&quot;')
              optionsStr += `<option value="${value}" ${styleAttr} ${gfAttr}>${name}</option>`
            })
            optGroupStr += `<optgroup label="${groupLabel}" ${groupStyleAttr}>${optionsStr}</optgroup>`
          })

          const inputH = this.el.querySelector(`#${pfx}input-holder`)
          inputH.innerHTML = `<select>${optGroupStr}</select>`
          this.input = inputH.firstChild
        }
      },
    }),
  })
}

export default plugin
