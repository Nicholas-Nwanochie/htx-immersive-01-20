'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('authors', [{
      name: 'Austin',
      biography: '',
      imageURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jaye',
      biography: '',
      imageURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Daniel',
      biography: '',
      imageURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alina',
      biography: '',
      imageURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
