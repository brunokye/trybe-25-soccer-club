import { Router } from 'express';
import MatchController from '../controllers/Match.controller';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

const { getMatches, createMatch, updateScore, finishMatch } = MatchController;

export default router
  .get('/', getMatches)
  .post('/', verifyToken, createMatch)
  .patch('/:id', verifyToken, updateScore)
  .patch('/:id/finish', verifyToken, finishMatch);
