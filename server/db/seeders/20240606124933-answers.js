'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Answers',
      [
        {
          dogId: 1,
          answer: 'Юра',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 2,
          answer: 'Андрей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 3,
          answer: 'Влад',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};