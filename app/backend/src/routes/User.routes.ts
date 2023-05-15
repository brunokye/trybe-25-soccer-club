import { Router } from 'express';
import UserController from '../controllers/User.controller';
import verifyCredentials from '../middlewares/verifyCredentials';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

const { login, getRole } = UserController;

export default router
  .post('/', verifyCredentials, login)
  .get('/role', verifyToken, getRole);
