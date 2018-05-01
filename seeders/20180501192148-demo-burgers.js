'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Burgers', [{
      name: 'Big Mac',
      devoured: false
    }, {
      name: 'Whopper',
      devoured: false
    }, {
      name: 'Baconator',
      devoured: false
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
