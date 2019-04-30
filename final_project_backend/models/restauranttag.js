'use strict';
module.exports = (sequelize, DataTypes) => {
  var restauranttag = sequelize.define('restauranttag', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.RestaurantTag.belongsTo(models.Tag, {
          onDelete: "CASCADE",
        });
        models.RestaurantTag.belongsTo(models.Restaurant, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return restauranttag;
};