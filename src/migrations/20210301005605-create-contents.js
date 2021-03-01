'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      totalSeasons: {
        type: Sequelize.INTEGER
      },
      imdbScore: {
        type: Sequelize.NUMERIC
      },
      releaseDates: {
        type: Sequelize.STRING
      },
      playTime: {
        type: Sequelize.STRING
      },
      contentRating: {
        type: Sequelize.INTEGER
      },
      totalEpisodes: {
        type: Sequelize.INTEGER
      },
      contentType: {
        type: Sequelize.INTEGER
      },
      imdbLink: {
        type: Sequelize.STRING
      },
      lastUpdate: {
        type: Sequelize.DATE
      },
      imdbScoreVotes: {
        type: Sequelize.INTEGER
      },
      ratingDetails: {
        type: Sequelize.JSON
      },
      languages: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Contents');
  }
};