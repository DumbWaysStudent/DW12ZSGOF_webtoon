'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoon', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {});
  webtoon.associate = function(models) {
    // associations can be defined here
  };
  return webtoon;
};