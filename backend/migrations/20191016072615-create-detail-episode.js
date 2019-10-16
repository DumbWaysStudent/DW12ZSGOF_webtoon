'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detail_episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      webtoon_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'episodes',
          key: 'webtoon_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      episode_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'episodes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('detail_episodes');
  }
};