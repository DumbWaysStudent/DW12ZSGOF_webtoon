'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('images', [{
        page: '1',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        webtoon_id: 7,
        episode_id: 8,
        user_id: 14,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        page: '2',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        webtoon_id: 7,
        episode_id: 8,
        user_id: 14,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        page: '3',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        webtoon_id: 7,
        episode_id: 8,
        user_id: 14,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      ], 
      {});
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('images', null, {});
  }
};
