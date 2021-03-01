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
      contentRatingId: { //foreign key
        type: Sequelize.INTEGER,
        references: {
          model: "ContentRating",
          key: "id"
        }
      },
      contentTypeId: { //foreign key
        type: Sequelize.INTEGER,
        references: {
          model: "ContentTypes",
          key: "id"
        }
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
      totalEpisodes: {
        type: Sequelize.INTEGER
      },
      imdbLink: {
        type: Sequelize.STRING
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