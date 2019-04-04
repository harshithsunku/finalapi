var express = require("express");
var router = express.Router();
var dbConnection = require("../../dbConnection");
var fkClient = require("../fkClient");

router.get('/televisions/:price/:size/:smart/:type/:curve/:hdmi',function(req,res,next){
    var price = parseInt(req.params.price);
    var size = parseInt(req.params.size);
    var hdmi_tv = parseInt(req.params.hdmi);
    var smart = parseInt(req.params.smart);
    var type_tv = parseInt(req.params.type);
    var curve_tv = parseInt(req.params.curve);
    console.log(typeof(smart));
    if(size == 1){
        var min = 0;
        var max = 24;
    }
    if(size == 2){
        var min = 28;
        var max = 32;
    }
    if(size == 3){
        var min = 39;
        var max = 43;
    }
    if(size == 4){
        var min = 48;
        var max = 55;
    }
    if(size == 5){
        var min = 60;
        var max = 200;
    }
    if(price == 1){
        var p_min = 4999;
        var p_max = 9999;
    }
    if(price == 2){
        var p_min = 10000;
        var p_max = 19999;
    }
    if(price == 3){
        var p_min = 20000 ;
        var p_max = 35999;
    }
    if(price == 4){
        var p_min = 36000;
        var p_max = 50999;
    }
    if(price == 5){
        var p_min = 60000;
        var p_max = 1500000;
    }
    if(smart == 1){
        console.log("working");
        var sm = 'YES';
        // console.log(typeof(smart));
    }
    if(smart == 2){
      var sm = 'NO';
    }
    if(type_tv == 1){
        var type = "LED";
    }
    if(type_tv == 2){
        var type = "QLED";
    }
    if(type_tv == 3){
        var type = "OLED";
    }
    if(curve_tv == 1){
        var curve = "YES";
    }
    if(curve_tv == 2){
        var curve = "NO"
    }
    if(hdmi_tv == 1){
        var hdmi = 0;
    }
    if(hdmi_tv == 2){
        var hdmi = 1;
    }
    if(hdmi_tv == 3){
        var hdmi = 2;
    }
    if(hdmi_tv == 4){
        var hdmi = 3;
    }
    if(hdmi_tv == 5){
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
router.get('/mobiles/:price/:ram/:screen/:internal/:battery',function(req,res,next){
    var price = parseInt(req.params.price);
    var size = parseInt(req.params.screen);
    var ram = parseInt(req.params.ram);
    var storage = parseInt(req.params.internal);
    var battery = parseInt(req.params.battery);
    console.log(typeof(smart));
    if(size == 1){
        var min = 0;
        var max = 4;
    }
    if(size == 2){
        var min = 4;
        var max = 5;
    }
    if(size == 3){
        var min = 5;
        var max = 6;
    }
    if(size == 4){
        var min = 6;
        var max = 10;
    }
    if(price == 1){
        var p_min = 0;
        var p_max = 9999;
    }
    if(price == 2){
        var p_min = 10000;
        var p_max = 19999;
    }
    if(price == 3){
        var p_min = 20000 ;
        var p_max = 35999;
    }
    if(price == 4){
        var p_min = 36000;
        var p_max = 50999;
    }
    if(price == 5){
        var p_min = 60000;
        var p_max = 1500000;
    }
    if(ram == 1){
        var r_min = 0;
        var r_max = 1;
    }
    if(ram == 2){
        var r_min = 2.1;
        var r_max = 3;
    }
    if(ram == 3){
        var r_min = 3.1;
        var r_max = 4;
    }
    if(ram == 4){
        var r_min = 4.1;
        var r_max = 6;
    }
    if(ram == 5){
        var r_min = 6;
        var r_max = 100;
    }
    if(storage == 1){
        var s_min = 1;
        var s_max = 7;
    }
    if(storage == 2){
        var s_min = 8;
        var s_max = 15;
    }
    if(storage == 3){
        var s_min = 16;
        var s_max = 31;
    }
    if(storage == 4){
        var s_min = 32;
        var s_max = 63;
    }
    if(storage == 5){
        var s_min = 64;
        var s_max = 127;
    }
    if(storage == 6){
        var s_min = 128;
        var s_max = 1000;
    }
    if(battery == 1){
        var b_min = 1000;
        var b_max = 1999;
    }
    if(battery == 2){
        var b_min = 2000;
        var b_max = 2999;
    }
    if(battery == 3){
        var b_min = 3000;
        var b_max = 3999;
    }
    if(battery == 4){
        var b_min = 4000;
        var b_max = 4999;
    }
    if(battery == 5){
        var b_min = 5000;
        var b_max = 20000;
    }

    // console.log(sm);
    dbConnection.query("select * from mobiles as m , mobile_data as md WHERE m.p_id = md.p_id AND  selling_price BETWEEN '"+p_min+"' AND '" + p_max + "' AND display_size BETWEEN '"+min+"' AND '"+max+"'  ORDER BY md.score DESC ",function(error,results,fields){
        res.render('products',{
            title:"products in mobiles",
            products:results
        });
    });
});
router.get('/refrigerator/:price/:type/:cap/:sh',function(req,res,next){
    var price = parseInt(req.params.price);
    var type = parseInt(req.params.type);
    var capacity = parseInt(req.params.cap);
    var shelves = parseInt(req.params.sh);
   
    // console.log(typeof(smart));
    
    if(price == 1){
        var p_min = 0;
        var p_max = 9999;
    }
    if(price == 2){
        var p_min = 10000;
        var p_max = 19999;
    }
    if(price == 3){
        var p_min = 20000 ;
        var p_max = 35999;
    }
    if(price == 4){
        var p_min = 36000;
        var p_max = 50999;
    }
    if(price == 5){
        var p_min = 60000;
        var p_max = 1500000;
    }
    if(type == 1){
        console.log("working");
        var sm = 'single door';
        // console.log(typeof(smart));
    }
    if(type == 2){
      var sm = 'double door';
    }
    
    if(capacity == 1){
        var c_min = 0;
        var c_max = 99;
    }
    if(capacity == 2){
        var c_min = 100;
        var c_max = 199;
    }
    if(capacity == 3){
        var c_min = 200;
        var c_max = 299;
    }
    if(capacity == 4){
        var c_min = 300;
        var c_max = 1000;
    }
    
    if(shelves == 1){
        var sh = 1;
    }
    if(shelves == 2){
        var sh = 2;
    }
    if(shelves == 3){
        var sh = 3;
    }
    if(shelves == 4){
        var sh = 4;
    }
       
    console.log(sm);

    dbConnection.query("select * from refrigerator as r , refrigerator_data as rd WHERE r.p_id = rd.p_id AND  selling_price BETWEEN '"+p_min+"' AND '" + p_max + "' ORDER BY rd.score DESC ",function(error,results,fields){
        res.render('products',{
            title:"products in refrigerator",
            products:results
        });
    });

});
router.get('/cameras/:price/:mp/:wifi/:gps',function(req,res,next){
    var price = parseInt(req.params.price);
    var pixel = parseInt(req.params.mp);
    var wifi = parseInt(req.params.wifi);
    var gps = parseInt(req.params.gps);
    // console.log(typeof(smart));
    
    if(price == 1){
        var p_min = 0;
        var p_max = 9999;
    }
    if(price == 2){
        var p_min = 10000;
        var p_max = 2499;
    }
    if(price == 3){
        var p_min = 25000 ;
        var p_max = 39999;
    }
    if(price == 4){
        var p_min = 40000;
        var p_max = 59999;
    }
    if(price == 5){
        var p_min = 60000;
        var p_max = 100000;
    }
    if(price == 6){
        var p_min = 100000;
        var p_max = 9000000;
    }
    if(pixel == 1){
        var px_min = 0;
        var px_max = 5;
    }
    if(pixel == 2){
        var px_min = 6;
        var px_max = 9;
    }
    if(pixel == 3){
        var px_min = 10;
        var px_max = 19;
    }
    if(pixel == 4){
        var px_min = 20;
        var px_max = 10000;
    }
    if(wifi == 1){
        // console.log("working");
        var wf = 'YES';
        // console.log(typeof(smart));
    }
    if(wifi == 2){
      var wf = 'NO';
    }
    if(gps == 1){
        console.log("working");
        var gp = 'YES';
        // console.log(typeof(smart));
    }
    if(gps == 2){
      var gp = 'NO';
    }



    dbConnection.query("select * from cameras as c , camera_data as cd WHERE c.p_id = cd.p_id AND  selling_price BETWEEN '"+p_min+"' AND '" + p_max + "'  ORDER BY cd.score DESC ",function(error,results,fields){
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