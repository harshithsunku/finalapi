var express = require("express");
var router = express.Router();
var dbConnection = require("../../dbConnection");
var fkClient = require("../fkClient");

router.get('/televisions/:price/:size/:smart/:type/:curve/:hdmi',function(req,res,next){
    var price = parseInt(req.params.price);
    var size = parseInt(req.params.size);
    var hdmi = parseInt(req.params.hdmi);
    var smart = parseInt(req.params.smart);
    var type = parseInt(req.params.type);
    var curve = parseInt(req.params.curve);
    console.log(typeof(smart));
    if(price == 2){
        var p_min = 10000;
        var p_max = 20000;
    }
    if(size == 1){
        var min = 0;
        var max = 24;
    }
    else if(size == 2){
        var min = 28;
        var max = 32;
    }
    else if(size == 3){
        var min = 39;
        var max = 43;
    }
    else if(size == 4){
        var min = 48;
        var max = 55;
    }
    else if(size == 5){
        var min = 60;
        var max = 200;
    }
    else if(price == 1){
        var p_min = 4999;
        var p_max = 9999;
    }
    else if(price === 2){
        var p_min = 10000;
        var p_max = 19999;
    }
    else if(price == 3){
        var p_min = 20000 ;
        var p_max = 35999;
    }
    else if(price == 4){
        var p_min = 36000;
        var p_max = 50999;
    }
    else if(price == 5){
        var p_min = 60000;
        var p_max = 1500000;
    }
    else if(smart == 1){
        console.log("working");
        var sm = 'YES';
        // console.log(typeof(smart));
    }
    else if(smart == 2){
        var sm = 'NO';
    }
    else if(type_tv == 1){
        var type = "LED";
    }
    else if(type_tv == 2){
        var type = "QLED";
    }
    else if(type_tv == 3){
        var type = "OLED";
    }
    else if(curve_tv == 1){
        var curve = "YES";
    }
    else if(curve_tv == 2){
        var curve = "NO"
    }
    else if(hdmi_tv == 1){
        var hdmi = 0;
    }
    else if(hdmi_tv == 2){
        var hdmi = 1;
    }
    else if(hdmi_tv == 3){
        var hdmi = 2;
    }
    else if(hdmi_tv == 4){
        var hdmi = 3;
    }
    else if(hdmi_tv == 5){
        var hdmi = 4;
    }
    console.log(sm);
    dbConnection.query("select * from televisions as t , tv_data as tv WHERE t.p_id = tv.p_id AND  selling_price BETWEEN '"+p_min+"' AND '" + p_max + "' AND display_size BETWEEN '"+min+"' AND '"+max+"'  ORDER BY tv.score DESC ",function(error,results,fields){
        res.render('products',{
            title:"products in televisions",
            products:results
        });
    });
});
router.get('/mobiles/:price',function(req,res,next){
    var tprice = parseInt(req.params.price);
    dbConnection.query("select * from mobiles WHERE selling_price >= '" + tprice + "'",function(error,results,fields){
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