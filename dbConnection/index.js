var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fk",
});
connection.connect();
connection.query("drop table if exists productFeedListing");
connection.query(`create table productFeedListing(
    category_id int(10) AUTO_INCREMENT,
    category_name varchar(100),
    getUrl varchar(200),
    deltaGetUrl varchar(200),
    PRIMARY KEY(category_id)
)`);
connection.query("drop table if exists televisions");
connection.query(`create table televisions(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);

connection.query("drop table if exists mobiles");
connection.query(`create table mobiles(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);

connection.query("drop table if exists refrigerator");
connection.query(`create table refrigerator(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);

connection.query("drop table if exists cameras");
connection.query(`create table cameras(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);

connection.query("drop table if exists laptops");
connection.query(`create table laptops(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);

connection.query("drop table if exists tablets");
connection.query(`create table tablets(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);

connection.query("drop table if exists watches");
connection.query(`create table watches(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);

connection.query("drop table if exists productFeed");
connection.query(`create table productFeed(
    id int(10) AUTO_INCREMENT,
    p_id varchar(200) UNIQUE,
    p_category varchar(20),
    p_title varchar(1000),
    p_img_small varchar(1000),
    p_img_medium varchar(1000),
    p_img_large varchar(1000),
    p_retail_price int(100),
    p_retail_currency varchar(10),
    p_productBrand varchar(1000),
    p_productUrl varchar(1000),
    p_instock tinyint(1),
    p_cod tinyint(1),
    PRIMARY KEY(id)
) ROW_FORMAT=DYNAMIC`);
// PRODUCT LISTINGS table

// connection.query('');

module.exports = connection;