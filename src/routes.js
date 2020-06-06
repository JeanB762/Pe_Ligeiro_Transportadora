import { Router } from 'express';

import UserController from './app/controllers/UserControler';
import AdminController from './app/controllers/AdminController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/admin', AdminController.store);

routes.put('/admin', AdminController.update);

routes.delete('/admin/:adminId', AdminController.delete);

routes.post('/user', UserController.store);

routes.put('/user/:userId', UserController.update);

routes.delete('/user/:userId', UserController.delete);

export default routes;
