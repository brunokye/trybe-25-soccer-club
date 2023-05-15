import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

export default class MatchController {
  public static async getMatches(_req: Request, res: Response): Promise<Response | void> {
    const matches = await MatchService.getMatches();
    res.status(200).json(matches);
  }
}
