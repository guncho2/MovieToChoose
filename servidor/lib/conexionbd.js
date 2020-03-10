// @ts-nocheck
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'D4295D6e1fdd14a6',
  database : 'que_veo_hoy'
});

module.exports = connection;

