import MatchModel from '../database/models/Match.model';
import TeamModel from '../database/models/Team.model';
import { IMatch } from '../utils/interfaces';

export default class MatchService {
  public static async getMatches(): Promise<IMatch[]> {
    return MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
  }
}
