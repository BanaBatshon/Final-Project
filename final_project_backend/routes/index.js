var models  = require('../models');
var express = require('express');
var router  = express.Router();


/**
 * Route for processing search results based on id(tags)
 */
router.get('/restaurants/:id/', function(req, res) {
  const tag = req.params.id;
  getRestaurantIds(tag)
  .then(function(idsArr){
    getRestaurantsById(idsArr)
    .then(function(restaurants){
      res.json(restaurants);
    });
  });
  
});

function getRestaurantsById(arr) {
  return models.Restaurant
  .findAll({where: {id: {$in: arr}}})
  .then(function(restaurants) {
    let restaurantsArr = [];
    restaurants.forEach(function(restaurant){
      restaurantsArr.push(restaurant.dataValues)
    });
    return restaurantsArr;
  });
}

function getRestaurantIds (tag) {
  return models.Tag
  .find({where: {name: `${tag}`}, include: [models.RestaurantTag]})
  .then(function(results) {
    let restaurantIds = [];
    results.dataValues.restauranttags.forEach(function(id){
      restaurantIds.push(id.dataValues.id);
    });
    return restaurantIds;
  });
}

module.exports = router;
