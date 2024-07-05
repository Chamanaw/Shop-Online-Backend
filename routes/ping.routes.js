const express = require('express')
const router = express.Router()

router.get('/pingserver',(res)=>{console.log("ping");res.status(200)})

module.exports = router