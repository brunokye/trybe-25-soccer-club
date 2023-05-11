import { Router } from 'express';
import TeamController from '../controllers/Team.controller';

const router = Router();

const { getTeams, getTeamById } = TeamController;

export default router
  .get('/', getTeams)
  .get('/:id', getTeamById);
