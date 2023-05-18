import { Match, TeamInfo } from './types';

export default class Calculate {
  public static teamStatus(teamName: string, matches: Match[]): TeamInfo {
    const { victories, draws, losses } = this.calculateMatches(matches);
    const { goalsFavor, goalsOwn, goalsBalance } = this.calculateGoals(matches);

    const totalPoints = this.calculatePoints(victories.length, draws.length);
    const efficiency = this.calculateEfficiency(totalPoints, matches.length);

    return {
      name: teamName,
      totalPoints,
      totalGames: matches.length,
      totalVictories: victories.length,
      totalDraws: draws.length,
      totalLosses: losses.length,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency,
    };
  }

  public static calculatePoints(victories: number, draws: number) {
    return (victories * 3) + draws;
  }

  public static calculateMatches(matches: Match[]) {
    const victories = matches.filter((m) => m.homeTeamGoals > m.awayTeamGoals);
    const draws = matches.filter((m) => m.homeTeamGoals === m.awayTeamGoals);
    const losses = matches.filter((m) => m.homeTeamGoals < m.awayTeamGoals);

    return { victories, draws, losses };
  }

  public static calculateGoals(matches: Match[]) {
    const goalsFavor = matches.reduce((acc, m) => acc + m.homeTeamGoals, 0);
    const goalsOwn = matches.reduce((acc, m) => acc + m.awayTeamGoals, 0);
    const goalsBalance = goalsFavor - goalsOwn;

    return { goalsFavor, goalsOwn, goalsBalance };
  }

  public static calculateEfficiency(totalPoints: number, matches: number) {
    return Number(((totalPoints / (matches * 3)) * 100).toFixed(2));
  }
}
