'use strict';

var Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://labber:labber@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const models = {
  User: sequelize.import('./user'),
  MenuItemRating: sequelize.import('./menuitemrating'),
  MenuItemTag: sequelize.import('./menuitemtag'),
  MenuItem: sequelize.import('./menuitem'),
  RestaurantRating: sequelize.import('./restaurantrating'),
  RestaurantTag: sequelize.import('./restauranttag'),
  Restaurant: sequelize.import('./restaurant'),
  Tag: sequelize.import('./tag')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
