'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Webapplikations', [{
      titel: 'Node.js Design Patterns',
      forfatter: 'Mario Casciaro',
      forlag: 'Packt',
      udgave: '1',
      pris: '250',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};