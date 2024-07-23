import { FontType, FontSortMapType } from 'types/index';
export declare const loadFontData: (sort: string, _ignoreWebfontsLoad?: boolean) => Promise<FontType[]>;
export declare const checkCategory: (font: FontType, category: string, subset: string) => boolean;
export declare const filterFonts: (allFonts: FontSortMapType, sort: string, category: string, subset: string, search: string) => FontType[];
export declare const loadFonts: (fonts: FontType[]) => void;
export declare const loadFontsWithSubsets: (fonts: FontType[], category: string, subset: string) => void;
