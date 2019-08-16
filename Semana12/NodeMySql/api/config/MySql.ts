var mysql = require('mysql');
export var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // port:'3306',
    database: 'codigo5'
});
connection.connect();