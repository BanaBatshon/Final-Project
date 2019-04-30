var models  = require('../models');
var express = require('express');
var router  = express.Router();
var cors = require('cors')

router.use(cors());
/**
 * Route for getting a list of all restaurants
 */
router.get('/restaurants', function(req, res) {
  allRestaurants().then(function(result) {
    res.json(result);
  });
});

 /* Route for getting detailed information for a restaurant
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
    console.log(idsArr)
    getRestaurantsById(idsArr)
    .then(function(restaurants) {
      res.json(restaurants);
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
  console.log("testttttttt")
  console.log(req.body);
  const name = req.body.name;
  const address = req.body.address;
  const phone_number = req.body.phone_number;
  const website = req.body.website;
  const approved = req.body.approved;
  models.restaurants.build({name: name, address: address, phone_number: phone_number, 
    website: website, approved: approved, createdAt: new Date(), updatedAt: new Date()})
    .save()
    .then(function(restaurant) {
      res.status(200).end();
    })
    .catch(function(err){
      if (err) {
        console.log(err)
      }
    })
});

function allRestaurants() {
  return models.restaurants
  .findAll()
  .then(function(results) {
    let restaurants = [];
    results.forEach(function(restaurant) {
      restaurants.push(restaurant.dataValues);
    });
    return restaurants;
  });
}

/**
 * Returns detailed information for specific restaurant
 * including all menu items
 * @param {restaurantId} id 
 */
function getRestaurant(id) {
  return models.restaurants
  .find({where: {id: id}, include: [{model: models.menu_items, include: [models.menu_item_ratings]}]})
  .then(function(restaurant) {
    let menuItems = [];
    let menu_items = restaurant.dataValues.menuitems;
    menu_items.forEach(function(item) {
      let ratings = [];
      item.menuitemratings.forEach(function(rating) {
        ratings.push(rating.dataValues);
      });
      item.menuitemratings = ratings;
      menuItems.push(item.dataValues);
    });
    restaurant.dataValues.menuitems = menuItems;
    return restaurant.dataValues;
  })
}

/**
 * Returns array of menu item ids for specific tag.
 * @param {Menu Item Tag} tag 
 */
function getMenuItemIds (tag) {
  return models.tags
  .find({where: {name: `${tag}`}, include: [models.menu_item_tags]})
  .then(function(results) {
    let menuItemIds = [];
    results.dataValues.menuitemtags.forEach(function(item) {
      menuItemIds.push(item.dataValues.menuitemId)
    })
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
  .findAll({where: {id: {$in: arr}}, include: [{model : models.restaurant_tags, include: [models.tags]}]})
  .then(function(restaurants) {
    let restaurantsArr = [];
    restaurants.forEach(function(restaurant) {
      let tags = restaurant.dataValues.restauranttags;
      let tagsArr = [];
      tags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.dataValues.name);
      });
      restaurant.dataValues.restauranttags = tagsArr;
      restaurantsArr.push(restaurant.dataValues);
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
      restaurantIds.push(id.dataValues.restaurantId);
    });
    return restaurantIds;
  });
}

module.exports = router;
