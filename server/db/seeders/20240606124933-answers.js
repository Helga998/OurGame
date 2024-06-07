'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Answers',
      [
        {
          dogId: 1,
          answer: 'Андрей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 2,
          answer: 'Миша',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 3,
          answer: 'Оля',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 4,
          answer: 'Паша',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 5,
          answer: 'Слава',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 6,
          answer: 'Саша',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 7,
          answer: 'Влад',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 8,
          answer: 'Катюша',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 9,
          answer: 'Рома',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 10,
          answer: 'Лера',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 11,
          answer: 'Катя',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 12,
          answer: 'Анрей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 13,
          answer: 'Юля',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 14,
          answer: 'Вова',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 15,
          answer: 'Лика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dogId: 16,
          answer: 'Ира',
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