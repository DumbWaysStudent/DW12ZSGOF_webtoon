'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER,
    episode_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};