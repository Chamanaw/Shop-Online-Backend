require('dotenv').config()

const dbConfig = {
    uri:process.env.DATABASE_URL,
    waitForConnections: true,
}

module.exports = dbConfig