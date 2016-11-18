'use strict';

module.exports = {
  // set up Burgers Model
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('burgers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      burger_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },      
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  // remove Burger Model
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('burgers');
  }
};
