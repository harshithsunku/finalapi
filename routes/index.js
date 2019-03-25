var express = require('express');
var router = express.Router();
var details = require('./details');
var fkClient = require('./fkClient');
var dbConnection = require('../dbConnection');
/* GET home page. */
router.get('/', function(req, res, next) {
  dbConnection.query("select * from productfeedlisting",function(error,result,fields){
    if(error)
      res.send(error);
    else
      res.render('index',{
        "title":"productListings",
        listings:result
      });

  });
    // fkClient.getProductsFeedListing().then(function(value){
    //   return new Promise(function(resolve,reject){
    //     resolve(JSON.parse(value.body));
    //   });
    // }).then(function(value){
    //   var listings = Object.keys(value.apiGroups.affiliate.apiListings)
    //   res.render('index',{
    //     title:value.title,
    //     listings:listings
    //   })
    //   // res.send(value);

    // });
  // res.render('index', { title: 'Express' });
});

router.get('/updateListings',function(req , res , next){
  fkClient.getProductsFeedListing().then(function(productFeedListing){
    var json_data = JSON.parse(productFeedListing.body);
    // res.send(json_data);
    var listings = Object.keys(json_data.apiGroups.affiliate.apiListings);

    listings.forEach(function(listing){
      var getUrl = json_data.apiGroups.affiliate.apiListings[listing].availableVariants["v1.1.0"].get;
      var deltaGetUrl = json_data.apiGroups.affiliate.apiListings[listing].availableVariants["v1.1.0"].deltaGet;
      dbConnection.query("insert into productfeedlisting(category_name , getUrl , deltaGetUrl) values('"+listing+"','"+getUrl+"','"+deltaGetUrl+"')",function(error,result,fields){
        if(error) throw error;
      }); // db query
    }); // for each
    return new Promise(function(resolve,reject){
      dbConnection.query("select * from productfeedlisting",function(error,result,fields){
        if(error)
          reject(error);
        else
          resolve(result);
      });
    });
  }).then(function(value){
    res.send(value);
  });
});

router.get('/deleteListings',function(req,res,next){
  dbConnection.query("delete from productfeedlisting");
  res.send("deleted listings");
});

module.exports = router;
