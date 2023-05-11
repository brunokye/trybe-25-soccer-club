import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  public static async getTeams(_req: Request, res: Response): Promise<Response | void> {
    const teams = await TeamService.getTeams();
    res.status(200).json(teams);
  }

  public static async getTeamById(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const team = await TeamService.getTeamById(Number(id));
    res.status(200).json(team);
  }
}
