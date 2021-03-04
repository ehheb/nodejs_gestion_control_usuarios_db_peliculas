'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EpisodeLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seasonNum: {
        type: Sequelize.INTEGER
      },
      episodeName: {
        type: Sequelize.STRING
      },
      contentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contents',
          key: 'id'
        }
      },
      releaseDate: {
        type: Sequelize.STRING
      },
      episodeRating: {
        type: Sequelize.NUMERIC
      },
      episodeNum: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      episodeImdbLink: {
        type: Sequelize.STRING
      },
      episodeScoreVotes: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EpisodeLists');
  }
};