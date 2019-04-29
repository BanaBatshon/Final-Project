var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Restaurant.findAll({attributes: ['id'], where: {name: 'Pourhouse'}})
  .then(function(restaurant){
    console.log(restaurant[0].dataValues.id)
  })
});

module.exports = router;
