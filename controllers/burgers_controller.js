var express = require('express');
var router = express.Router();
var orm = require("../config/orm.js");

router.get('/', function(req,res){
  // var burgers = orm.selectAll();
  orm.selectAll(function(data){
    res.render('index', data);
  });
});

router.post('/addburger', function(req, res){
  orm.insertOne(req.body.burger_name);
  res.redirect('/');
});

router.put('/eat/:id', function(req, res){
  orm.updateOne(req.params.id);
  res.redirect('/');
});


module.exports = router;
