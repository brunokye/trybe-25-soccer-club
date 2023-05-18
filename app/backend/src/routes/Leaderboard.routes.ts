import { Router } from 'express';
import LeaderboardController from '../controllers/Leaderboard.controller';

const router = Router();

const { getHomeLeaderboard } = LeaderboardController;

export default router
  .get('/home', getHomeLeaderboard);
