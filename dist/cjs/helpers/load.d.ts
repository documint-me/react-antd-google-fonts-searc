import { FontType, FontSortMapType } from 'types/index';
export declare const PAGE_SIZE = 1000;
export declare const SEARCH_PAGE_SIZE = 500;
export declare const loadFontData: (sort: string, ignoreWebfontsLoad?: boolean) => Promise<FontType[]>;
export declare const loadFonts: (fonts: FontType[]) => void;
export declare const checkCategory: (font: FontType, category: string, subset: string) => boolean;
export declare const filterFonts: (allFonts: FontSortMapType, sort: string, category: string, subset: string, search: string) => FontType[];
