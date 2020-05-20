import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Jean Borges',
    street: 'Rua da Minha Casa',
    number: 404,
    complement: 'Casa',
    city: 'Carmo do Rio Claro',
    zip_code: '37150-000',
    order_status: 2,
  });
  return res.json(user);
});
export default routes;
