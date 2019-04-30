var models  = require('../models');
var express = require('express');
var router  = express.Router();

/**
 * Route for getting detailed information for a restaurant
 */
router.get('/restaurant/:id/', function(req, res) {
  const restaurantId = req.params.id;
  getRestaurant(restaurantId)
  .then(function(result){
    res.json(result);
  })
});

/**
 * Route for processing search results based on id(tags)
 */
router.get('/restaurants/:id/', function(req, res) {
  const tag = req.params.id;
  getRestaurantIds(tag)
  .then(function(idsArr) {
    getRestaurantsById(idsArr)
    .then(function(restaurants) {
      getTags(idsArr).then(function(tags) {
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
  getMenuItemIds(tag) 
  .then(function(idsArr) {
    getMenuItemsById(idsArr) 
    .then(function(menuItems) {
      getMenuTags(idsArr).then(function(tags) {
        res.json({menuItems: menuItems, tags: tags});
      });
    });
  });
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
 * Returns detailed information for specific restaurant
 * including all menu items
 * @param {restaurantId} id 
 */
function getRestaurant(id) {
  return models.restaurants
  .find({where: {id: id}, include: [models.menu_items]})
  .then(function(restaurant) {
    let menuItems = [];
    restaurant.dataValues.menuitems.forEach(function(item) {
      menuItems.push(item.dataValues);
    });
    restaurant.dataValues.menuitems = menuItems;
    return restaurant.dataValues;
  })
}

getRestaurant(1)
/**
 * Returns array of menu item ids for specific tag.
 * @param {Menu Item Tag} tag 
 */
function getMenuItemIds (tag) {
  return models.tags
  .findAll({where: {name: `${tag}`}, include: [models.menu_item_tags]})
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
  return models.menu_items
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
 * Returns all tags for each menu item in array.
 * @param {Array of restaurant ids} arrIds
 */
function getMenuTags (arrIds) {
  return models.menu_item_tags
  .findAll({where: {id: {$in: arrIds}}, include: [models.tags]})
  .then(function(results) {
    let menuTags = {};
    results.forEach(function(menu_tag) {
      if(menuTags[menu_tag.dataValues.id] === undefined) {
        menuTags[menu_tag.dataValues.id] = [menu_tag.dataValues.tag.name];
      } else {
        menuTags[menu_tag.dataValues.id].push(menu_tag.dataValues.tag.name);
      }
    });
    return menuTags;
  });
}

/**
 * Returns restaurant objects for each restaurant id in array.
 * @param {Array of restaurant ids} arr 
 */
function getRestaurantsById(arr) {
  return models.restaurants
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
  return models.tags
  .find({where: {name: `${tag}`}, include: [models.restaurant_tags]})
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
  return models.restaurant_tags
  .findAll({where: {restaurantId: {$in: arrRestaurantIds}}, include: [models.tags]})
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
