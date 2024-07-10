type FontType = {
    family: string;
    variants: string[];
    subsets: string[];
    category?: string;
};
type SearchLayoutProps = {
    addedFonts?: FontType[];
    onChange?: (...args: any[]) => void;
};
type FontSortMapType = {
    [key: string]: FontType[];
};
type FontWeightsType = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export { FontSortMapType, FontType, FontWeightsType, SearchLayoutProps };
