import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'rafael2 Lechensque',
    email: 'rafael2@aluno.com',
    password_hash: '1234567',
  });

  return res.json({ user });
});

export default routes;
