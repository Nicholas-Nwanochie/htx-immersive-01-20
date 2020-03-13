'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  author.associate = function (models) {
    // associations can be defined here
    models.author.hasMany(models.blog, { foreignKey: 'authorID' });
  };
  return author;
};