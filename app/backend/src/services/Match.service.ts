import MatchModel from '../database/models/Match.model';
import TeamModel from '../database/models/Team.model';
import { IMatch, IScore } from '../utils/interfaces';

export default class MatchService {
  public static async getMatches(): Promise<IMatch[]> {
    return MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
  }

  public static async getInProgress(status: string): Promise<IMatch[]> {
    return MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
      where: { inProgress: status === 'true' },
    });
  }

  public static async finishMatch(id: number) {
    const match = await MatchModel.findByPk(id);
    return match?.update({ inProgress: false });
  }

  public static async updateScore(id: number, score: IScore) {
    const { homeTeamGoals, awayTeamGoals } = score;
    const match = await MatchModel.findByPk(id);
    return match?.update({ homeTeamGoals, awayTeamGoals });
  }
}
