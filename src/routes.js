import { Router } from 'express';

import User from './app/models/User';
import Admin from './app/models/Admin';

const routes = new Router();

routes.get('/user', async (req, res) => {
  const user = await User.create({
    name: 'Jean Borges',
    street: 'Rua da Minha Casa',
    number: 404,
    complement: 'Casa',
    city: 'Carmo do Rio Claro',
    zip_code: '37150-000',
    order_status: 4,
  });
  return res.json(user);
});

routes.get('/admin', async (req, res) => {
  const admin = await Admin.create({
    name: 'J Borges',
    email: 'jenborges2@gmail.com',
    password_hash: 'senha',
  });
  return res.json(admin);
});

export default routes;
