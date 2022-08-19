import { Router } from "express";
import fishController from './fish-controller';
import { authenticated } from '../../../../middleware/auth'

const fishRouter = Router();

fishRouter.post('/', authenticated, fishController.getFish);

export default fishRouter;