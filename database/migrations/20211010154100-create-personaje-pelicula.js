'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('personajePeliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personajeId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'personajes'
          },
          key : 'id'
        }
      },
      peliculaId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'peliculas'
          },
          key : 'id'
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
    await queryInterface.dropTable('personajePeliculas');
  }
};