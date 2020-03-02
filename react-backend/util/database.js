//Database credentials
const mariadb = require('mariadb')
const pool = mariadb.createPool({
   host: 'localhost',
   user: 'root',
   password: 'gigglyinventory$2020',
   database: 'gigglyinventory'
})

module.exports = pool
