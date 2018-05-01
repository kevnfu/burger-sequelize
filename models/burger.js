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
    // associations can be defined here
  };

  return Burger;
};