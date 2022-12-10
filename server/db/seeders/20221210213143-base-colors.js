'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Colors', [
          {
        name: 'Red'
      },
      {
        name: 'Yellow'
      },
      {
        name: 'Blue'
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Colors', {
      name: ['Red', 'Blue', 'Yellow']
    });

  }
};