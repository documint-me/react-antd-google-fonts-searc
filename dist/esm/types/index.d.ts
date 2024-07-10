export type FontType = {
    family: string;
    variants: string[];
    subsets: string[];
    category?: string;
};
export type SearchLayoutProps = {
    addedFonts?: FontType[];
    onChange?: (...args: any[]) => void;
};
export type FontSortMapType = {
    [key: string]: FontType[];
};
export type FontWeightsType = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
