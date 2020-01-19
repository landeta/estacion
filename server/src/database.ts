import mysql from 'promise-mysql';
//const { mysql } = require('mysql');
import keys from './keys';
// const { promisify } = require('util');
const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connected');
    })
//   pool.query = promisify(pool.query);
    export default pool;
    