import { Router } from 'express';

import UserController from './app/controllers/UserControler';
import AdminController from './app/controllers/AdminController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/user', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/admin', AdminController.store);

routes.use(authMiddleware);

routes.put('/admin', AdminController.update);

export default routes;
