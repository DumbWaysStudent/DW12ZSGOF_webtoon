'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('webtoons', [{
        title: 'True Beauty',
        genre: 'Drama',
        isFavorite: false,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        createdAt : new Date(),
        updatedAt : new Date(), 
        created_by : 1
      },
    {
      title: 'Age Matters',
      genre: 'Romance',
      isFavorite: false,
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      createdAt : new Date(),
      updatedAt : new Date(), 
      created_by : 1
    },
    {
      title: 'A Good Day to be a Dog',
      genre: 'Romance',
      isFavorite: true,
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      createdAt : new Date(),
      updatedAt : new Date(), 
      created_by : 1
    }
    ],);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('webtoons', null, {});
  }
};
