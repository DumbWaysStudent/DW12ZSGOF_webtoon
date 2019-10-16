'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('episodes', [{
        title: 'Episodes Pertama',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        webtoon_id: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    {
      title: 'Episodes Kedua',
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      webtoon_id: 8,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Episodes Ketiga',
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      webtoon_id: 8,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    ], 
    {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('episodes', null, {});
  }
};
