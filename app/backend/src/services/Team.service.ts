import TeamModel from '../database/models/Team.model';
import { ITeam } from '../utils/interfaces';

export default class TeamService {
  public static async getTeams(): Promise<ITeam[]> {
    return TeamModel.findAll();
  }

  public static async getTeamById(id: number): Promise<ITeam | null> {
    return TeamModel.findByPk(id);
  }
}
