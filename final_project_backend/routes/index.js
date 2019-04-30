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
      getTags(idsArr).then(function(tags){
        res.json({restaurants: restaurants, tags: tags});
      });
    });
  });
});

/**
 * Returns restaurant objects for each restaurant id in array.
 * @param {Array of restaurant ids} arr 
 */
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

/**
 * Returns array of restaurant ids.
 * @param {Restaurant Tag} tag 
 */
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

/**
 * Returns all tags for each restaurant in array.
 * @param {Array of restaurant ids} arrRestaurantIds 
 */
function getTags (arrRestaurantIds) {
  return models.RestaurantTag
  .findAll({where: {restaurantId: {$in: [1,2]}}, include: [models.Tag]})
  .then(function(results) {
    let tagsForRestaurants = {};
    results.forEach(function(tag) {
      let res_id = tag.dataValues.id;
      if (tagsForRestaurants[res_id] === undefined) {
        let tag_name = tag.dataValues.tag.dataValues.name;
        tagsForRestaurants[res_id] = [tag_name];
      } else {
        tagsForRestaurants[res_id].push(tag_name);
      }
    });
    return tagsForRestaurants;
  });
}

module.exports = router;
