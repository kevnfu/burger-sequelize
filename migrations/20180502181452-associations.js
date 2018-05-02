'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Burger belongsTo Customer
    return queryInterface.addColumn('Burgers', 'CustomerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Customers',
        key: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove Burger belongsTo Customer
    return queryInterface.removeColumn(
      'Burgers', 
      'CustomerId'
    );
  }
};
