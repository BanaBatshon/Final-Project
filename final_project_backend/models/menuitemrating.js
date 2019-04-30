'use strict';
module.exports = (sequelize, DataTypes) => {
  var menuitemrating = sequelize.define('menuitemrating', {
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.MenuItemRating.belongsTo(models.MenuItem, {
          onDelete: "CASCADE",
        });
        models.MenuItemRating.belongsTo(models.User, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return menuitemrating;
};