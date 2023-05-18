import { Router } from 'express';
import LeaderboardController from '../controllers/Leaderboard.controller';

const router = Router();

const { getLeaderboard } = LeaderboardController;

export default router
  .get('/home', getLeaderboard);
