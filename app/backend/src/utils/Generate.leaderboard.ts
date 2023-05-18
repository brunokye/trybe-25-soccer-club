import Calculate from './Calculate.leaderboard';
import { Match, Team, TeamInfo } from './types';

export default class Generate {
  public static generateLeaderboard(allMatches: Match[], allTeams: Team[]) {
    const leaderboard = allTeams.map((team) => this.generateRows(allMatches, team));
    return this.sortRows(leaderboard);
  }

  public static generateRows(allMatches: Match[], { id, teamName }: Team) {
    const teamMatches = allMatches.filter((m) => m.homeTeamId === id);
    return Calculate.teamStatus(teamName, teamMatches);
  }

  public static sortRows(leaderboard: TeamInfo[]) {
    return leaderboard.sort((home, away) => (
      away.totalPoints - home.totalPoints
      || away.totalVictories - home.totalVictories
      || away.goalsBalance - home.goalsBalance
      || away.goalsFavor - home.goalsFavor
      || away.goalsOwn - home.goalsOwn
    ));
  }
}
