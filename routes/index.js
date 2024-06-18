var express = require('express');
var router = express.Router();
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db'); 
var Character = require('../models/character')(sequelize, DataTypes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/characters', async function(req,res,next){
  var characters = await Character.findAll();
  res.status(200).json(characters);
})

module.exports = router;
