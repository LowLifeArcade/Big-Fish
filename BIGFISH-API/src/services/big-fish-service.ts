import fetch from 'node-fetch';

export interface FishResult {
    name: string;
    size: number;
    location: string; 
} 

export class BigFishService {
    public async getFish(): Promise<FishResult[]> {
        const fishURL = '🐠';
        const response = await this.fetchBigFish(fishURL, 'POST');

        // DEMO
        const demoResponse: FishResult[] = [
            { name: 'Billy', size: 42, location: 'Lake Elsinor' },
            { name: 'Sally', size: 32, location: 'Atlantic Ocean' },
            { name: 'Frank', size: 85, location: 'Unknown' },
            { name: 'Mandy', size: 65, location: 'LA Tar Pits' },
        ];
        return demoResponse;
    }
    
    public async createFishToken() {
        // do stuff
        return []
    }
    
    public async collectFish(fishToken: string) {
        // do stuff
    }

    private async fetchBigFish(URL: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: any) {
        const response = (await fetch(URL, {
            method,
            headers: {
                // 'X-Auth-Token': store
            },
            body,
        })) as any;
        if (response.status === 204) {
            return [];
        }
        if (!response.ok) {
            throw new Error("We don't even know what happened 👀");
        }
        return response.json();
    }
}
