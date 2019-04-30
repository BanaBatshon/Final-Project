'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Tag.hasMany(models.RestaurantTag, {
          onDelete: "CASCADE",
        });
        models.Tag.hasMany(models.MenuItemTag, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return Tag;
};