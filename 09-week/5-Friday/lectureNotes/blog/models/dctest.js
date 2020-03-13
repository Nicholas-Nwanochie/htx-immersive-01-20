'use strict';
module.exports = (sequelize, DataTypes) => {
  const dcTest = sequelize.define('dcTest', {
    title: DataTypes.STRING,
    isValid: DataTypes.BOOLEAN,
    count: DataTypes.INTEGER
  }, {});
  dcTest.associate = function (models) {
    // associations can be defined here

    // dcTest.belongsTo(models.author, { foreignKey: 'authorID' })
  };
  return dcTest;
};