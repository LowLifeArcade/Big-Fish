export type StyleSheets = 'inlineStyles' | 'mainStyles' | 'teaserStyles' | 'topButtonStyles'
export interface FishResult {
    name: string;
    size: number;
    location: string; 
} 

export type DisplayType = 'topButton' | 'teaser' | 'inline'; 

export type fishOpts = {
    type: DisplayType | DisplayType[];
    siteKey: string;
    siteName: string;
    page: 'Fish' | 'Phone' | 'Address';
};

export type FishReq = {
    siteKey: string
}