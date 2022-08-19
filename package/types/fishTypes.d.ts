export declare type StyleSheets = 'inlineStyles' | 'mainStyles' | 'teaserStyles' | 'topButtonStyles';
export interface FishResult {
    name: string;
    size: number;
    location: string;
}
export declare type DisplayType = 'topButton' | 'teaser' | 'inline';
export declare type fishOpts = {
    type: DisplayType | DisplayType[];
    siteKey: string;
    siteName: string;
    page: 'Fish' | 'Phone' | 'Address';
};
export declare type FishReq = {
    siteKey: string;
};
//# sourceMappingURL=fishTypes.d.ts.map