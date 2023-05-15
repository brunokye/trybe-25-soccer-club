'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      home_team_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      home_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_team_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('matches');
  }
};
