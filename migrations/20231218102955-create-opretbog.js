'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Opretbogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titel: {
        type: Sequelize.STRING
      },
      forfatter: {
        type: Sequelize.STRING
      },
      forlag: {
        type: Sequelize.STRING
      },
      udgave: {
        type: Sequelize.INTEGER
      },
      pris: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Opretbogs');
  }
};