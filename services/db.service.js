const mysql = require('mysql2/promise')
require('dotenv').config()

const connectDatabase = async () => {
    let conect = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT
    })
    return conect
}

module.exports = connectDatabase