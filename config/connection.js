var mysql = require("mysql");

var db = mysql.createConnection({
    host: "z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "qmbf71entp9j4tf6", //Your username
    password: "uorr52lzor3s35rs", //Your password
    database: "ur6or8ifbf1yuus5",
    debug: false
});

module.exports = mysql;
module.exports = db;
