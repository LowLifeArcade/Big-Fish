import {Router} from 'express';
import fishRouter from './fish/fish-router'

const v1Router = Router();

v1Router.use('/fish', fishRouter);

export default v1Router;