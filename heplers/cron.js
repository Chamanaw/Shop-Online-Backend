const https = require('https')
const cron = require('node-cron')


function job() {

    cron.schedule('*/14 * * * * ', () => {
        https.get(process.env.URL_SERVER,(res)=>{
            if(res.statusCode === 200){
                console.log('server restarted')
            }
            else{
                console.log('failed restarted')
            }
        })
    });
}

module.exports = job

