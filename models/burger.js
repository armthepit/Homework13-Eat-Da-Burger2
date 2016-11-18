// Burger Model
// ===============
'use strict';

var Sequelize = require('sequelize');

// EXPORT THIS MODULE TO INDEX.JS
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    burger_name: DataTypes.STRING,
    devoured: {type: DataTypes.BOOLEAN, defaultValue: false}, // Order not picked
    createdAt: {type: DataTypes.DATE, defaultValue: sequelize.NOW},
    updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.NOW},
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};