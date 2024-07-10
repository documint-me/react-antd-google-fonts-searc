import React, { FC, PropsWithChildren } from 'react';
import { FontType, FontSortMapType } from '../types/index';
export declare const SearchContext: React.Context<{
    editFontOpen: boolean;
    setEditFontOpen: (val: boolean) => void;
    loading: boolean;
    allFonts: FontSortMapType;
    fonts: FontType[];
    savedFonts: FontType[];
    setSavedFonts: (val: FontType[]) => void;
    previewSize: number;
    setPreviewSize: (val: number) => void;
    view: string;
    setView: (val: string) => void;
    search: string;
    setSearch: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
    subset: string;
    setSubset: (val: string) => void;
    sort: string;
    setSort: (val: string) => void;
    text: string;
    setText: (val: string) => void;
    font: FontType;
    setFont: (val: FontType) => void;
    randomizeText: () => void;
    suggest: (val: 'paragraph' | 'heading') => void;
    resetAll: () => void;
}>;
interface ISearchProvider {
    addedFonts?: FontType[];
}
declare const SearchProvider: FC<ISearchProvider & PropsWithChildren>;
export declare const useSearchContext: () => {
    editFontOpen: boolean;
    setEditFontOpen: (val: boolean) => void;
    loading: boolean;
    allFonts: FontSortMapType;
    fonts: FontType[];
    savedFonts: FontType[];
    setSavedFonts: (val: FontType[]) => void;
    previewSize: number;
    setPreviewSize: (val: number) => void;
    view: string;
    setView: (val: string) => void;
    search: string;
    setSearch: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
    subset: string;
    setSubset: (val: string) => void;
    sort: string;
    setSort: (val: string) => void;
    text: string;
    setText: (val: string) => void;
    font: FontType;
    setFont: (val: FontType) => void;
    randomizeText: () => void;
    suggest: (val: 'paragraph' | 'heading') => void;
    resetAll: () => void;
};
export default SearchProvider;