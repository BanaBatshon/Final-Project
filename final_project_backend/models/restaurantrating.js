'use strict';
module.exports = (sequelize, DataTypes) => {
  var restaurantrating = sequelize.define('restaurantrating', {
    liked: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return restaurantrating;
};