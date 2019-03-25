var express = require("express");
var router = express.Router();
var dbConnection = require("../../dbConnection");
var fkClient = require("../fkClient");

router.get('/televisions',function(req,res,next){
    dbConnection.query("delete from televisions");
    res.send("deleted listings");
  });
  router.get('/mobiles',function(req,res,next){
    dbConnection.query("delete from mobiles");
    res.send("deleted listings");
  });
  router.get('/refrigerator',function(req,res,next){
    dbConnection.query("delete from refrigerator");
    res.send("deleted listings");
  });
  router.get('/cameras',function(req,res,next){
    dbConnection.query("delete from cameras");
    res.send("deleted listings");
  });
  router.get('/laptops',function(req,res,next){
    dbConnection.query("delete from laptops");
    res.send("deleted listings");
  });
  router.get('/tablets',function(req,res,next){
    dbConnection.query("delete from tablets");
    res.send("deleted listings");
  });
  router.get('/watches',function(req,res,next){
    dbConnection.query("delete from watches");
    res.send("deleted listings");
  });
  router.get('/mobiles',function(req,res,next){
    dbConnection.query("delete from productfeed");
    res.send("deleted listings");
  });
module.exports = router;