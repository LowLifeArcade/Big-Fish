import { Request, Response, NextFunction } from 'express';
export const authenticated = async (req:Request, res: Response, next: NextFunction) => {
    if (!req.headers || !req.headers.authorization) {
        return next('Unauthroized')
    }
    
    const token = req.headers.authorization.split(' ')[1];
    
    try {
        await authUser(token);
    } catch (e) {
        return next(e)
    }
};

const authUser = async(token: string) => {
    // verify
}