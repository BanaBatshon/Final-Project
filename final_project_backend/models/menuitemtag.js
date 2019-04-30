'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItemTag = sequelize.define('menuitemtag');
  MenuItemTag.associate = function(models) {
    // associations can be defined here
    models.MenuItemTag.belongsTo(models.Tag, {
      onDelete: "CASCADE",
    });
    models.MenuItemTag.belongsTo(models.MenuItem, {
      onDelete: "CASCADE",
    });
  }
  return MenuItemTag;
};