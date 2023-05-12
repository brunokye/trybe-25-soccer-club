import { Router } from 'express';
import UserController from '../controllers/User.controller';
import verifyCredentials from '../middlewares/verifyCredentials';

const router = Router();

const { login } = UserController;

export default router
  .post('/', verifyCredentials, login);
