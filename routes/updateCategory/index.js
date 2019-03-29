var express = require("express");
var router = express.Router();
var dbConnection = require("../../dbConnection");
var fkClient = require("../fkClient");

router.get('/televisions', function(req,res,next){
    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('televisions' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
            res.send(json_data);
            json_data.products.forEach(function(product){

                dbConnection.query(`insert into televisions(
                    p_id,
                    p_category,
                    p_title,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('televisions')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});


//

router.get('/mobiles', function(req,res,next){
    var col , model_name , model_number , sim_type , display_size , resolution , operating_system, processor , rom , ram , p_cam , s_cam,a_jack , battery;
    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('mobiles' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
                //praveen code
                // json_data.products.forEach(function(eachProduct){
                //     if(eachProduct.categorySpecificInfoV1.specificationList){
                //         eachProduct.categorySpecificInfoV1.specificationList.forEach(function(eachSpec){
                //             eachSpec['values'].forEach(function(elem){
                //                 if(elem['key']==='Color'){
                //                     console.log(elem['value'][0]);
                //                 }
                //             });
                //                 // console.log(eachSpec['values']);


                //                 // if(pair.key['General']){
                //                 //     console.log(pair.values);
                //                 // }
                //             // }
                //         });
                //     }
                //     else{
                //         console.log('illa');
                //     }
                // });

            // res.send(json_data);
            // res.send(json_data.products.categorySpecificInfoV1.specificationList);
            json_data.products.forEach(function(product){
                // console.log(product.categorySpecificInfoV1.specificationList);
 // ----------------------------------
                if(product.categorySpecificInfoV1.specificationList){
                    product.categorySpecificInfoV1.specificationList.forEach(function(eachSpec){
                        eachSpec['values'].forEach(function(elem){
                            if(elem['key']==='Color'){
                                // console.log(elem['value'][0]);
                                col = elem['value'][0];
                            }
                            else if(elem['key']==='Model Number'){
                                model_number = elem['value'][0];
                            }
                            else if(elem['key']==='Model Name'){
                                model_name = elem['value'][0];
                            }
                            else if(elem['key']==='SIM Type'){
                                sim_type = elem['value'][0];
                            }
                            else if(elem['key']==='Display Size'){
                                display_size = elem['value'][0];
                            }
                            
                            else if(elem['key']==='Resolution'){
                                resolution = elem['value'][0];
                            }
                            
                            else if(elem['key']==='Operating System'){
                                operating_system = elem['value'][0];
                            }
                            
                            else if(elem['key']==='Processor Type'){
                                processor = elem['value'][0];
                            }
                            
                            else if(elem['key']==='Internal Storage'){
                                rom = elem['value'][0];
                            }
                            else if(elem['key']==='RAM'){
                                ram = elem['value'][0];
                            }
                            else if(elem['key']==='Primary Camera'){
                                p_cam = elem['value'][0];
                            }
                            else if(elem['key']==='Secondary Camera'){
                                s_cam = elem['value'][0];
                            }
                            else if(elem['key']==='Audio Jack'){
                                a_jack = elem['value'][0];
                            }
                            else if(elem['key']==='Battery Capacity'){
                                battery= elem['value'][0];
                            }
                        });
                    });
                }
// --------------------------------
                dbConnection.query(`insert into mobiles(
                    p_id,
                    p_category,
                    p_title,
                    selling_price,
                    selling_price_currency,
                    model_number,
                    model_name,
                    sim_type,
                    display_size,
                    resolution, 
                    operating_system, 
                    processor, 
                    rom, 
                    ram, 
                    p_cam, 
                    s_cam,
                    a_jack, 
                    battery,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('mobiles')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.flipkartSellingPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.flipkartSellingPrice.currency)},
                        ${dbConnection.escape(model_number)},
                        ${dbConnection.escape(model_name)},
                        ${dbConnection.escape(sim_type)},
                        ${dbConnection.escape(display_size)},
                        ${dbConnection.escape(resolution)},
                        ${dbConnection.escape(operating_system)},
                        ${dbConnection.escape(processor)},
                        ${dbConnection.escape(rom)},
                        ${dbConnection.escape(ram)},
                        ${dbConnection.escape(p_cam)},
                        ${dbConnection.escape(s_cam)},
                        ${dbConnection.escape(a_jack)},
                        ${dbConnection.escape(battery)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});

router.get('/refrigerator', function(req,res,next){

    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('refrigerator' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
            // res.send(json_data);
            json_data.products.forEach(function(product){

                dbConnection.query(`insert into refrigerator(
                    p_id,
                    p_category,
                    p_title,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('refrigerator')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});

router.get('/cameras', function(req,res,next){

    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('cameras' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
            // res.send(json_data);
            json_data.products.forEach(function(product){

                dbConnection.query(`insert into productfeed(
                    p_id,
                    p_category,
                    p_title,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('cameras')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});

router.get('/laptops', function(req,res,next){

    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('laptops' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
            // res.send(json_data);
            json_data.products.forEach(function(product){

                dbConnection.query(`insert into laptops(
                    p_id,
                    p_category,
                    p_title,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('laptops')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});

router.get('/tablets', function(req,res,next){

    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('tablets' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
            // res.send(json_data);
            json_data.products.forEach(function(product){

                dbConnection.query(`insert into productfeed(
                    p_id,
                    p_category,
                    p_title,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('tablets')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});

router.get('/watches', function(req,res,next){

    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('watches' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
            // res.send(json_data);
            json_data.products.forEach(function(product){

                dbConnection.query(`insert into watches(
                    p_id,
                    p_category,
                    p_title,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('watches')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});

router.get('/mobiles', function(req,res,next){

    var getCategoryUrl = new Promise(function(resolve,reject){
        dbConnection.query("select * from productfeedlisting",function(error,results,fields){
            results.forEach(function(result){
                if('mobiles' == result.category_name)
                    resolve(result.getUrl);
            });
        });
    });

getCategoryUrl.then(function(getUrl){
    return new Promise(function(resolve,reject){
        var insertProductsFromUrl = function(url){
            if(url == null){
                console.log(url);
            }
            fkClient.getProductsFeed(url).then(function(data){
            var json_data = JSON.parse(data.body);
            // res.send(json_data);
            json_data.products.forEach(function(product){

                dbConnection.query(`insert into productfeed(
                    p_id,
                    p_category,
                    p_title,
                    p_img_small,
                    p_img_medium,
                    p_img_large,
                    p_retail_price,
                    p_retail_currency,
                    p_productBrand,
                    p_productUrl,
                    p_instock,
                    p_cod )
                    values(
                        ${dbConnection.escape(product.productBaseInfoV1.productId)},
                        ${dbConnection.escape('mobiles')},
                        ${dbConnection.escape(product.productBaseInfoV1.title)},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['200x200'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['400x400'])},
                        ${dbConnection.escape(product.productBaseInfoV1.imageUrls['800x800'])},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.amount)},
                        ${dbConnection.escape(product.productBaseInfoV1.maximumRetailPrice.currency)},
                        ${dbConnection.escape(product.productBaseInfoV1.productBrand)},
                        ${dbConnection.escape(product.productBaseInfoV1.productUrl)},
                        ${dbConnection.escape(product.productBaseInfoV1.inStock)},
                        ${dbConnection.escape(product.productBaseInfoV1.codAvailable)}
                    )
                `);
            });
                if(json_data.nextUrl){
                    insertProductsFromUrl(json_data.nextUrl);
                }
                else{
                    resolve("inserted into db");
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        insertProductsFromUrl(getUrl);
    });
}).then(function(tempData){
    res.send(tempData);
});


    // fkClient.getProductsFeed("https://affiliate-api.flipkart.net/affiliate/1.0/feeds/gadsgear/category/ckf-czl.json?expiresAt=1552325104780&sig=32a824972f8d03774172c9d3e53b433a").then(function(value){
    //     res.send(value.body);
    // });

});

// router.get('/deletemobiles',function(req,res,next){
//     dbConnection.query("delete from productfeed");
//     res.send("deleted listings");
//   });
module.exports = router;