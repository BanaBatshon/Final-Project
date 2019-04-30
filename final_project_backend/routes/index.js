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
 * Route for processing search results based on id(tags)
 */
router.get('/items/:id/', function(req, res) {
  const tag = req.params.id;

});

/**
 * Endpoint to create new restaurants
 */
router.post('/restaurants', function(req, res) {
  const name = 'test restaurant';
  const address = '123 fake street';
  const phone_number = '6045552121';
  const website = '';
  const approved = false;
  models.Restaurant.build({name: name, address: address, phone_number: phone_number, 
    website: website, approved: approved, createdAt: new Date(), updatedAt: new Date()})
    .save()
    res.send();
});

/**
 * Returns all tags for each menu item in array.
 * @param {Array of restaurant ids} arrRestaurantIds 
 */
function getTags (arrMenuItemIds) {
  return models.MenuItemTag
  .find({where: {menu_item_id: {$in: [1]}}, include: [models.Tag]})
  .then(function(results) {
    console.log('here')
    console.log(results)
    let tagsForMenuItems = {};
    // results.forEach(function(tag) {
      //console.log(tag)
      // let res_id = tag.dataValues.id;
      // if (tagsForMenuItems[res_id] === undefined) {
      //   let tag_name = tag.dataValues.tag.dataValues.name;
      //   tagsForMenuItems[res_id] = [tag_name];
      // } else {
      //   tagsForMenuItems[res_id].push(tag_name);
      // }
    // });
    //return tagsForMenuItems;
  });
}
getTags(1)

/**
 * Returns array of menu item ids for specific tag.
 * @param {Menu Item Tag} tag 
 */
function getMenuItemIds (tag) {
  return models.Tag
  .findAll({where: {name: `${tag}`}, include: [models.MenuItemTag]})
  .then(function(results) {
    let menuItemIds = [];
    results.forEach(function(tag) {
      menuItemIds.push(tag.dataValues.menuitemtags[0].id);
    });
    return menuItemIds;
  });
}

/**
 * Returns an array of Menu Item objects
 * @param {Array of menu item ids} arrIds 
 */
function getMenuItemsById (arrIds) {
  return models.MenuItem
  .findAll({where: {id: {$in: arrIds}}})
  .then(function(results) {
    let menuItems = [];
    results.forEach(function(item) {
      menuItems.push(item.dataValues);
    });
   return menuItems;
  });
}

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
  .findAll({where: {restaurantId: {$in: arrRestaurantIds}}, include: [models.Tag]})
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
