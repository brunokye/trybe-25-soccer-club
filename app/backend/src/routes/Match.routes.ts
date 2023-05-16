import { Router } from 'express';
import MatchController from '../controllers/Match.controller';
import verifyToken from '../middlewares/verifyToken';
import verifyTeams from '../middlewares/verifyTeams';

const router = Router();

const { getMatches, createMatch, updateScore, finishMatch } = MatchController;

export default router
  .get('/', getMatches)
  .post('/', verifyToken, verifyTeams, createMatch)
  .patch('/:id', verifyToken, updateScore)
  .patch('/:id/finish', verifyToken, finishMatch);
