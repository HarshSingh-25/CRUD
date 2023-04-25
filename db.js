const mysql = require('mysql2');
const db = mysql.createPool({
    connectionLimit: 10,
    host:"localhost",
    user:"root",
    password:"Harsh@123",
    database:"harshbhai"
})

module.exports = db;