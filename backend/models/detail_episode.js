'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_episode = sequelize.define('detail_episode', {
    page: DataTypes.STRING,
    image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER,
    episode_id: DataTypes.INTEGER
  }, {});
  detail_episode.associate = function(models) {
    // associations can be defined here
  };
  return detail_episode;
};