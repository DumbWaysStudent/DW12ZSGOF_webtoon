'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('detail_episodes', [{
        page: '1',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        webtoon_id: 7,
        episode_id: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        page: '2',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        webtoon_id: 7,
        episode_id: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        page: '3',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        webtoon_id: 7,
        episode_id: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      ], 
      {});
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('detail_episodes', null, {});
  }
};
