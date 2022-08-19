import { Request, Response, NextFunction } from "express-serve-static-core";
import { BigFishService } from '../../../../services/big-fish-service';

export class FishController {
    private bigFish = new BigFishService();
    
    public getFish = async(req: Request, res:Response, next: NextFunction) => {
        try {
            const fishToken = this.bigFish.createFishToken();
            const fishResults = await this.bigFish.collectFish(fishToken as any);
            
            return res.status(200).json({ fishResults })
        } catch(e) {
            return next(e);
        }
    }
}

export default new FishController();