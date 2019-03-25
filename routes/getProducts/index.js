var express = require("express");
var router = express.Router();
var dbConnection = require("../../dbConnection");
var fkClient = require("../fkClient");

router.get('/televisions/:price',function(req,res,next){
    console.log(typeof(req.params.price));
    var tprice = parseInt(req.params.price);
    console.log(typeof(tprice));
    console.log(tprice);
    dbConnection.query("select * from televisions WHERE p_retail_price >= '" + tprice + "'",function(error,results,fields){
        res.render('products',{
            title:"products in televisions",
            products:results
        });
    });
});
router.get('/mobiles/:price',function(req,res,next){
    var tprice = parseInt(req.params.price);
    dbConnection.query("select * from mobiles WHERE p_retail_price >= '" + tprice + "'",function(error,results,fields){
        res.render('products',{
            title:"products in mobiles",
            products:results
        });
    });
});
router.get('/refrigerator/:price',function(req,res,next){
    var tprice = parseInt(req.params.price);
    dbConnection.query("select * from refrigerator WHERE p_retail_price >= '" + tprice + "'",function(error,results,fields){
        res.render('products',{
            title:"products in refrigerator",
            products:results
        });
    });

});
router.get('/cameras/:price',function(req,res,next){
    var tprice = parseInt(req.params.price);
    dbConnection.query("select * from cameras WHERE p_retail_price >= '" + tprice + "'",function(error,results,fields){
        res.render('products',{
            title:"products in cameras",
            products:results
        });
    });

});
router.get('/laptops/:price',function(req,res,next){
    var tprice = parseInt(req.params.price);
    dbConnection.query("select * from laptops WHERE p_retail_price >= '" + tprice + "'",function(error,results,fields){
        res.render('products',{
            title:"products in laptops",
            products:results
        });
    });

});
router.get('/tablets/:price',function(req,res,next){
    var tprice = parseInt(req.params.price);
    dbConnection.query("select * from tablets WHERE p_retail_price >= '" + tprice + "'",function(error,results,fields){
        res.render('products',{
            title:"products in tablets",
            products:results
        });
    });

});
router.get('/watches/:price',function(req,res,next){
    var tprice = parseInt(req.params.price);
    dbConnection.query("select * from watches WHERE p_retail_price >= '" + tprice + "'",function(error,results,fields){
        res.render('products',{
            title:"products in watches",
            products:results
        });
    });

});
// router.get('/televisions',function(req,res,next){
//     dbConnection.query("select * from televisions",function(error,results,fields){
//         res.render('products',{
//             title:"products in televisions",
//             products:results
//         });
//     });

// });
module.exports = router;