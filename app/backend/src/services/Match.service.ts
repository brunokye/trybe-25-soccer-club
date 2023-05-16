import MatchModel from '../database/models/Match.model';
import TeamModel from '../database/models/Team.model';
import { Match, NewMatch, Score } from '../utils/types';

export default class MatchService {
  public static async getMatches(): Promise<Match[]> {
    return MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
  }

  public static async getInProgress(status: string): Promise<Match[]> {
    return MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
      where: { inProgress: status === 'true' },
    });
  }

  public static async createMatch(info: NewMatch): Promise<NewMatch> {
    const match = await MatchModel.create(info);
    return match;
  }

  public static async updateScore(id: number, score: Score): Promise<Match | undefined> {
    const { homeTeamGoals, awayTeamGoals } = score;
    const match = await MatchModel.findByPk(id);
    return match?.update({ homeTeamGoals, awayTeamGoals });
  }

  public static async finishMatch(id: number): Promise<Match | undefined> {
    const match = await MatchModel.findByPk(id);
    return match?.update({ inProgress: false });
  }
}
