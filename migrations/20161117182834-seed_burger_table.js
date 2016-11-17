'use strict';

module.exports = {
  // add initial burgers to Burger model/table
  up: function (queryInterface, Sequelize) {
    // bulk insert these entries using our model
    return models.Burger.bulkCreate(
      [
        {burger_name: "Hamburger"},
        {burger_name: "Cheese Burger"},
        {burger_name: "Double Meat"}
      ]
    )
  },

  // on undo...
  down: function (queryInterface, Sequelize) {
    // remove initial burgers to Burger model/tabel
    return models.Burger.destroy({where:{burger_name: [
        {burger_name: "Hamburger"},
        {burger_name: "Cheese Burger"},
        {burger_name: "Double Meat"}
    ]}})
  }
};
