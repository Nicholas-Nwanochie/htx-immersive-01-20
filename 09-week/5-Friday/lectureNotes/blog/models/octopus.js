'use strict';
module.exports = (sequelize, DataTypes) => {
  const octopus = sequelize.define('octopus', {
    title: DataTypes.STRING
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
  octopus.associate = function (models) {
    // associations can be defined here
  };
  return octopus;
};