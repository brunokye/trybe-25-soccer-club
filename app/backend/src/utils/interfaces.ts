export interface ITeam {
  id?: number;
  teamName: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IUser {
  id?: number,
  username: string,
  role: string,
  email: string,
  password: string,
}
