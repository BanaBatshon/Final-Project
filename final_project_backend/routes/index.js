var models  = require('../models');
var express = require('express');
var router  = express.Router();
var cors = require('cors')

router.use(cors());

/**
 * Returns all tags
 */
router.get('/tags', function(req, res) {
  return models.tags
  .findAll()
  .then(function(results) {
    let tags = [];
    results.forEach(function(result) {
      tags.push({id : result.dataValues.id, name : result.dataValues.name});
    });
    res.json(tags);
  });
});

router.get('/items', function(req, res) {
  allItems().then(function(results) {
    res.json(results);
  });
});

/**
 * Route for creating a new menu item for a restaurant
 */
router.post('/items', function(req, res) {
  const name = req.body.name;// || 'test';
  const restaurantId = req.body.restaurantId;// || 1;
  const approved = req.body.approved;// || false;
  const tags = req.body.tags; //|| [{id: 28, name: 'pizza'}, {id: 7, name:'italian'}, {id :2, name: 'pasta'}];

  models.menu_items.build({name: name, restaurantId: restaurantId, 
    approved: approved, createdAt: new Date(), updatedAt: new Date()})
    .save().then(function(menu_item) {
      let menuitemId = menu_item.dataValues.id;
      let tagsArr = [];
      tags.forEach(function(tag) {
        let tagEntry = models.menu_item_tags.build({menuitemId: menuitemId, 
          tagId: tag.id, createdAt: new Date(), updatedAt: new Date()}).save()
      });
     res.send();
    });
});

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
      res.json( menuItems);
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

/**
 * Gets all items for explore dishes page
 */
function allItems() {
  return models.menu_items
  .findAll({include: [{model: models.menu_item_tags, include: [models.tags]}, 
    models.menu_item_ratings, models.restaurants]})
  .then(function(results) {
    let menuArr = [];
    results.forEach(function(result) {
      let tagsArr = [];
      result.dataValues.menuitemtags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      result.dataValues.menuitemtags = tagsArr;
      let count = result.dataValues.menuitemratings.length;
      let sum_ratings = 0;
      result.dataValues.menuitemratings.forEach(function(rating) {
        sum_ratings += rating.dataValues.rating;
      });
      result.dataValues.restaurant = result.restaurant.dataValues.name;
      result.dataValues.menuitemratings = (sum_ratings/count);
      menuArr.push(result.dataValues);
    });
    return menuArr;
  });
}

/**
 * Returns a list of all restaurants with tag names
 */
function allRestaurants() {
  return models.restaurants
  .findAll({include: [{model: models.restaurant_tags, 
    include: [models.tags]}, {model: models.menu_items, include: [models.menu_item_ratings]}]})
  .then(function(results) {
    let restaurants = [];
    results.forEach(function(restaurant) {
      let ratings = [];
      let sum = 0;
      restaurant.menuitems.forEach(function(item) {
        item.menuitemratings.forEach(function(rating) {
          ratings.push(rating.dataValues.rating);
          sum += rating.dataValues.rating;
        });
      });
      const avg_rating = (sum/ratings.length) ?  (sum/ratings.length).toPrecision(2):0;
      restaurant.dataValues['avg_ratings'] = avg_rating;
      let restaurant_tags = restaurant.dataValues.restauranttags;
      let tagsArr = [];
      restaurant_tags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      restaurant.dataValues.restauranttags = tagsArr;
      delete restaurant.dataValues.menuitems
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
  .findAll({where: {id: {$in: arrIds}}, include:[{model: models.menu_item_tags, 
    include: [models.tags]}, models.menu_item_ratings]})
  .then(function(results) {
    let menuItems = [];
    results.forEach(function(item) {
      let tags = item.dataValues.menuitemtags;
      let ratings = item.dataValues.menuitemratings;
      let tagsArr = [];
      let reviewsArr = [];
      tags.forEach(function(tag) {
        tagsArr.push(tag.dataValues.tag.name);
      });
      item.dataValues.menuitemtags = tagsArr;
      ratings.forEach(function(rating) {
        reviewsArr.push({rating: rating.dataValues.rating, userId: rating.dataValues.userId});
      });
      item.dataValues.menuitemratings = reviewsArr;
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
