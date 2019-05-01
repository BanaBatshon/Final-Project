var models  = require('../models');
var express = require('express');
var router  = express.Router();
var cors = require('cors')

router.use(cors());

/**
 * Endpoint to delete a user review
 */
router.get('/:userid/ratings/:id', function(req, res) {
  const user_id = req.params.userid;
  const menu_item_id = req.params.id;
  models.menu_item_ratings.destroy({where:{userId: user_id, menuitemId: menu_item_id}})
  .then(function(result) {
    res.send();
  });
});

/**
 * Endpoint to update a users reviews
 */
router.patch('/:userid/ratings/:id', function(req, res) {
  const user_id = req.params.userid;
  const rating = req.body.rating || 1;
  const menu_item_id = req.params.id;

  models.menu_item_ratings.update({rating: rating, updatedAt: new Date()}, 
  {where: {menuitemId: menu_item_id, userId: user_id}})
  .then(function(rows) {
    res.send();
  });
});

/**
 * Endpoint to retrieve user reviews for 
 * a specific restaurant
 */
router.get('/:userid/restaurant/:id', function(req, res) {
  const userId = req.params.userid;
  const restaurantId = parseInt(req.params.id);
  getUserRestaurantReviews(userId, restaurantId)
  .then(function(results) {
    res.json(results);
  });
});



/**
 * Retunrs all user reviews with userId for restaurant with restaurantId
 * @param {user id} userId 
 * @param {restaurant id} restaurantId 
 */
function getUserRestaurantReviews(userId, restaurantId) {
  return models.menu_item_ratings
  .findAll({where: {userId: userId}, include: [{model: models.menu_items, include: [models.restaurants]}]})
  .then(function(results) {
    let reviewsArr = [];
    results.forEach(function(rating) {
      rating.dataValues.menuitem = rating.dataValues.menuitem.dataValues;
      rating.dataValues.menuitem.restaurant = rating.dataValues.menuitem.restaurant.dataValues;
      let restaurant_id = rating.dataValues.menuitem.restaurant.id;
      if(restaurant_id === restaurantId) {
        reviewsArr.push(rating.dataValues);
      }
    });
    return reviewsArr;
  });
}

module.exports = router;
