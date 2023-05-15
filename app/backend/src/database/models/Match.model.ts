import { Model, DataTypes } from 'sequelize';
import db from '.';
import TeamModel from './Team.model';

export default class MatchModel extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: 'matches',
  modelName: 'matches',
  timestamps: false,
});

TeamModel.belongsTo(MatchModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
TeamModel.belongsTo(MatchModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });

MatchModel.hasMany(TeamModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
MatchModel.hasMany(TeamModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });
