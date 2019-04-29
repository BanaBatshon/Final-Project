'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    user_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.User.hasMany(models.MenuItemRating, {
          onDelete: "CASCADE",
        });
        models.User.hasMany(models.RestaurantRating, {
            onDelete: "CASCADE",
          });
      }
    }
  });

  return User;
};