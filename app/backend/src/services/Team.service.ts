import TeamModel from '../database/models/Team.model';
import { Team } from '../interfaces';

export default class TeamService {
  public static async getTeams(): Promise<Team[]> {
    return TeamModel.findAll();
  }

  public static async getTeamById(id: number): Promise<Team | null> {
    return TeamModel.findByPk(id);
  }
}
