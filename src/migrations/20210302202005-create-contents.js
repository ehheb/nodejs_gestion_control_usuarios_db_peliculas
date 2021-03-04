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
        type: Sequelize.TEXT
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
      contentRatingId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ContentRatings',
          key: 'id'
        }
      },
      totalEpisodes: {
        type: Sequelize.INTEGER
      },
      contentTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ContentTypes',
          key: 'id'
        }
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
        type: Sequelize.ARRAY(Sequelize.TEXT)
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