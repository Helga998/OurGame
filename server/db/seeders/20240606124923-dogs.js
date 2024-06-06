'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dogs',
      [
        {
          breed: 'Дог',
          img: 'https://aigis.club/uploads/posts/2022-06/1655710673_62-adonius-club-p-poroda-sobak-korolevskii-dog-krasivo-foto-67.jpg',
          description: 'мудрый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed: 'Лабрадор',
          img: 'https://aigis.club/uploads/posts/https://avatars.mds.yandex.net/i?id=1f604e2964bfe80a159fcc33723a6aeba9d15ee7-5232078-images-thumbs&n=13-06/1655710673_62-adonius-club-p-poroda-sobak-korolevskii-dog-krasivo-foto-67.jpg',
          description: 'хорошо ладит с детьми',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          breed: 'Бигль',
          img: 'https://avatars.mds.yandex.net/i?id=d7709144bc69484c4f6e89d9d1a78230b46599b0-12149948-images-thumbs&n=13',
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