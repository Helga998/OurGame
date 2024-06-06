'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dogs',
      [
        {
          breed: 'Дог',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
          description: 'мудрый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed: 'Лабрадор',
          img: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
          description: 'хорошо ладит с детьми',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed: 'Бигль',
          img: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg',
          description: 'мудрый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dogs', null, {});
  },
};