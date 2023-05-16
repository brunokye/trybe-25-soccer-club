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

  public static async createMatch(req: Request, res: Response): Promise<Response | void> {
    const match = await MatchService.createMatch(req.body);
    res.status(201).json(match);
  }

  public static async updateScore(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const update = await MatchService.updateScore(Number(id), req.body);
    res.status(200).json(update);
  }

  public static async finishMatch(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    await MatchService.finishMatch(Number(id));
    res.status(200).json({ message: 'Finished' });
  }
}
