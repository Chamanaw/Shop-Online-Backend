const https = require('https')
const cron = require('node-cron')


function job() {
    cron.schedule('*/14 * * * *', () => {
        https.get(process.env.URL_SERVER)
    });
}

module.exports = job

