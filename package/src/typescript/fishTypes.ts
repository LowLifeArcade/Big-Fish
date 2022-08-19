export type StyleSheets = 'inlineStyles' | 'mainStyles' | 'teaserStyles' | 'topButtonStyles'
export interface FishResult {
    name: string;
    size: number;
    location: string; 
} 

export type DisplayType = 'topButton' | 'teaser' | 'inline'; 

export type WhiteList = 'fishfinder.sea' | 'everyfish.io';

export type Page = 'Fish' | 'Phone' | 'Address';

export type FishOpts = {
    type: DisplayType | DisplayType[];
    siteKey: string;
    siteName: WhiteList;
    page: Page;
};

export type FishReq = {
    siteKey: string,
    siteName: WhiteList,
    page: Page
}