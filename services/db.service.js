const mysql = require('mysql2/promise')
const dbConfig = require("../configs/db.config")
require('dotenv').config()


const execute = async (sql, params) => {
    const conect = await mysql.createPool(dbConfig).getConnection()
    try {
        const [result] = await conect.execute(sql, params)
        return result
    } finally {
        conect.release()
    }
}

module.exports = {execute}