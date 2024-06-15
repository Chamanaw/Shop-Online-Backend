const mysql = require('mysql2/promise')
const dbConfig = require("../configs/db.config")
require('dotenv').config()

const pool = mysql.createPool(dbConfig)

const execute = async (sql, params) => {
    const conect = await pool.getConnection()
    try {
        const [result] = await conect.execute(sql, params)
        return result
    } finally {
        conect.release()
    }
}

module.exports = {execute}