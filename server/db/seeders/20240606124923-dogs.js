'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dogs', [
      {
        breed: 'Лабрадор',
        img: 'https://avatars.mds.yandex.net/i?id=a5080de2e8c85c4387c89bd20b5b268d17ddb5fa-12509309-images-thumbs&n=13',
        description: 'очень хорошо ладит с детьми',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'Ньюфаундлен',
        img: 'https://lapkins.ru/upload/iblock/039/03964593b999cdd12d8b8cab160cfa62.jpg',
        description: 'очень классный , иногда немного взъерошеннй',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'Горная вискаша',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/9661583/pub_6488d568a696de4231797231_6488d59fbfaf86243ef1cd52/scale_1200',
        description:
          'умница, крсавица, всем нам оочень нравится...OQ как у Марии Кюри',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'тюлень',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hawaiian_monk_seal_at_French_Frigate_Shoals_05.jpg',
        description: 'стальные нервы, железный кулак, в душе - сама доброта',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'медведь',
        img: 'https://avatars.mds.yandex.net/i?id=f46c2fd354b11d1c5d8209c18a1b2d210f1b0b48-12714990-images-thumbs&n=13',
        description: 'мгкий и пушистый снаружи, буря эмоций внутри',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'веймаранер',
        img: 'https://simple-fauna.ru/wp-content/uploads/2018/11/weimaraner.jpg',
        description: 'скрытый потенциал',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'немецкая овчарка',
        img: 'https://i.pinimg.com/736x/70/b2/bc/70b2bc4cf4ed0de15e8476962309f7ad.jpg',
        description: 'умный, спокойный , талант - в розыске ошибок в React',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'квокка',
        img: 'https://rosspectr.ru/wp-content/uploads/d/e/8/de8ec48d6789e7592db76a359636b715.jpeg',
        description: 'любит утренние обнимашки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'мощное кeнгуру',
        img: 'https://do-slez.com/uploads/posts/2019-07/1563947134_orig.jpg',
        description: 'без компромиссов..., в школе не учился',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'белка',
        img: 'https://img.goodfon.ru/original/3000x2000/a/50/belka-pushistik-ozornitsa-gryzun.jpg',
        description: 'милая, красивая, суетная, громкая...хвост шикарный ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'птица',
        img: 'https://avatars.mds.yandex.net/i?id=6f5ae4ed5edf1759446765a7ff44d6123c052626-9244753-images-thumbs&n=13',
        description: 'курица -наседка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'боксер',
        img: 'https://furman.top/uploads/posts/2023-08/1692184243_furman-top-p-sobaka-v-ochkakh-oboi-krasivo-42.jpg',
        description: 'superstar нашего буткемпа',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'болонка',
        img: 'https://i1.imageban.ru/out/2023/03/07/8ac69e9d7098e03df9b331e245164f5d.jpg',
        description: 'нежная, пушистая, лечит деток ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'бурундук',
        img: 'https://avatars.mds.yandex.net/i?id=e6f4e1c061232e72214a7c4280cf5accd9bc1c4b-10401675-images-thumbs&n=13',
        description: 'очень любит учиться, будущий frontend разработчик',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'борзая',
        img: 'https://lite-story.com/wp-content/uploads/2020/07/05-1140x814.jpg',
        description: 'красота требует жертв, туфли на кросовки сменила на второй неделе',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        breed: 'рысь',
        img: 'http://i08.fotocdn.net/s119/47fe06b29a178229/public_pin_l/2710321172.jpg',
        description: 'борец по жизни, свой личный Эльбрус она уже покорила',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dogs', null, {});
  },
};
