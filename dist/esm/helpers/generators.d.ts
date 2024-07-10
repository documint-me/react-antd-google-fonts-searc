import { FontType, FontWeightsType } from 'types/index';
export declare const getLinkFormats: (font: FontType) => {
    html: string;
    css: string;
    fontFamily: string;
    google: string;
    url: string;
};
export declare const transformVariantsLinks: (variants: string[], fontFamily: string) => {
    label: string;
    variant: string;
    slug: string;
    style: string;
    weight: FontWeightsType;
    css: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: FontWeightsType;
    };
}[];
