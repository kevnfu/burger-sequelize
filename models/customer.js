'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      validate: {notEmpty: true}
    }
  }, {});

  Customer.associate = function(models) {
    Customer.hasMany(models.Burger);
  };

  return Customer;
};