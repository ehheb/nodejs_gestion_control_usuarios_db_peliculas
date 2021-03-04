'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContentGenres', {

      genreId: {
/*         allowNull: false,
        primaryKey: true, */
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres',
          key: 'id'
        }
      },
      contentId: {
/*         allowNull: false,
        primaryKey: true, */
        type: Sequelize.INTEGER,
        references: {
          model: 'Contents',
          key: 'id'
        }
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
    await queryInterface.dropTable('ContentGenres');
  }
};