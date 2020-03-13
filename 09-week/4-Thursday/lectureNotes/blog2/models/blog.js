'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  blog.associate = function (models) {
    // associations can be defined here
    models.blog.belongsTo(models.categories, { foreignKey: 'categoriesID' });
    models.blog.belongsTo(models.author, { foreignKey: 'authorID' });
  };
  return blog;
};