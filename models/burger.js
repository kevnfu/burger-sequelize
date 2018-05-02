'use strict';
module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define('Burger', {
    name: {
      type: DataTypes.STRING,
      validate: {notEmpty: true}
    },
    devoured: DataTypes.BOOLEAN
  }, {});

  Burger.associate = function(models) {
    Burger.belongsTo(models.Customer);
  };

  return Burger;
};