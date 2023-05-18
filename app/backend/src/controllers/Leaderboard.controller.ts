import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard.service';

export default class LeaderboardController {
  public static async getLeaderboard(_req: Request, res: Response): Promise<Response | void> {
    const leaderboard = await LeaderboardService.getLeaderboard();
    res.status(200).json(leaderboard);
  }
}
