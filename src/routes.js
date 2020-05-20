import { Router } from 'express';

import UserController from './app/controllers/UserControler';
import AdminController from './app/controllers/AdminController';

const routes = new Router();

routes.post('/user', UserController.store);

routes.post('/admin', AdminController.store);

export default routes;
