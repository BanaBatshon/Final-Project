'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    website: DataTypes.STRING,
    approved: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Restaurant.hasMany(models.RestaurantTag, {
          onDelete: "CASCADE",
        });
      }
    }
  });
  return Restaurant;
};