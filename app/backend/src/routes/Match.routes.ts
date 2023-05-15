import { Router } from 'express';
import MatchController from '../controllers/Match.controller';

const router = Router();

const { getMatches } = MatchController;

export default router
  .get('/', getMatches);
