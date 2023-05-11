import { Router } from 'express';
import TeamController from '../controllers/Team.controller';

const router = Router();

const { getTeams } = TeamController;

export default router
  .get('/', getTeams);
