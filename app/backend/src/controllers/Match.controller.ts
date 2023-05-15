import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

export default class MatchController {
  public static async getMatches(req: Request, res: Response): Promise<Response | void> {
    const { inProgress } = req.query;

    if (inProgress) {
      const status = inProgress as string;
      const matches = await MatchService.getInProgress(status);

      return res.status(200).json(matches);
    }

    const matches = await MatchService.getMatches();
    res.status(200).json(matches);
  }
}
