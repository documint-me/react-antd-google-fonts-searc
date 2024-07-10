import { FontType } from 'types/index';
declare const useFontSettings: (fonts: FontType[], setFonts: (fonts: FontType[]) => void, onChange?: ((...args: any[]) => void) | undefined) => {
    saveFont: (font: FontType) => void;
    deleteFont: (font: FontType) => void;
};
export default useFontSettings;
