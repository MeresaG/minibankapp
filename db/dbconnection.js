/**
 * dbconnection.js
 * @author Meresa G
 * @since 2022-03-15
 */

"use strict";
const mysql = require('mysql2');
const dbConfig = require('./dbconfig');

const dbConnection = (function(dbConfig){
    /**
     * Makes and returns a database connection pool using the given config
     */

    const getConnection = function() {
        return mysql.createPool(dbConfig);
    }
    return {
        getConnection : getConnection
    }
})(dbConfig);

module.exports = dbConnection;