export type Team = {
  id?: number;
  teamName: string;
};

export type TeamInfo = {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
};

export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
};

export type Match = {
  id?: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
};

export type NewMatch = {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
};

export type Score = {
  homeTeamGoals: number;
  awayTeamGoals: number;
};
