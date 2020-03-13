'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {});
  categories.associate = function (models) {
    // associations can be defined here
    models.categories.hasMany(models.blog, { foreignKey: 'categoriesID' });
  };
  return categories;
};