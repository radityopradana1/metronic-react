const Pool = require('pg').Pool;

const pool = new Pool({
    user: "rpradana",
    host: "localhost",
    database: "localdb",
    password: "Vaffanculo@123",
    port: 5432
});

module.exports = pool;