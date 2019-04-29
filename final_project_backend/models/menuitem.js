'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('menuitem', {
    name: DataTypes.STRING,
    approved: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.MenuItem.hasMany(models.MenuItemTag, {
          onDelete: "CASCADE",
        });
        models.MenuItem.hasMany(models.MenuItemRating, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return  MenuItem;
};