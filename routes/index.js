var express = require('express');
var router = express.Router();
const db = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/characters', async function(req,res,next){
  var characters = await db.Character.findAll({include: [{model: db.Work, as:'Work'}] });
  res.status(200).json(characters);
})

module.exports = router;
