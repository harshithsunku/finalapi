var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fk",
});
connection.connect();
connection.query("SET GLOBAL innodb_file_format=Barracuda;");
connection.query("SET GLOBAL innodb_file_per_table=on;");
connection.query("SET GLOBAL innodb_large_prefix=on;");
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
    selling_price  int(20),
    selling_price_currency varchar(20),
    model_name varchar(100),
    display_size float(10), 
    screen_type varchar(20), 
    resolution varchar(100), 
    smart_tv varchar(20), 
    curve_tv varchar(20), 
    hdmi int(10), 
    usb int(10), 
    view_angle int(20), 
    refresh_rate int(20), 
    power_consumption varchar(20), 
    weight float(20), 
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
    selling_price  int(20),
    selling_price_currency varchar(20),
    model_number varchar(100),
    model_name varchar(200),
    sim_type varchar(20),
    display_size float(4),
    resolution varchar(25), 
    operating_system varchar(25), 
    processor varchar(25), 
    rom int(10), 
    ram int(10), 
    p_cam int(20), 
    s_cam int(20),
    a_jack int(25), 
    battery int(25),
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
    selling_price  int(20),
    selling_price_currency varchar(20),

    type varchar(100),
    defrosting_type varchar(100),
    compressor_type varchar(100),
    capacity int(20),
    no_of_doors int(10),
    star_rating int(10),
    builtin_stabilizer varchar(20),
    shelf_material varchar(100),
    door_finish varchar(100),
    water_dispencer varchar(100),
    power_requirement varchar(100),
    no_of_shelves int(10),
    chlid_lock varchar(20),
    wheel_support varchar(20),
    warranty varchar(100),

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
    selling_price  int(20),
    selling_price_currency varchar(20),
    model_name varchar(100),
    type varchar(100),
    effective_pixel float(20),
    wifi varchar(120),
    sensor_type varchar(20),
    typeof_lens varchar(20),
    hd_support varchar(20),
    water_resistent varchar(20),
    remote_control varchar(20),
    image_stabiliser varchar(20),
    gps varchar(20),
    usb varchar(20),
    hdmi varchar(20),
    wide_angle varchar(20),
    weight float(10),
    warranty int(10),
    external_flash varchar(20),
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