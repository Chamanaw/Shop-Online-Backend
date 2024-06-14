const express = require("express")
const router = express.Router()
const refreshTokenController = require('../controllers/refreshToken.controller')
const checkRefreshToken = require('../middlewares/checkRefreshToken')
router.post('/refreshtoken',checkRefreshToken,refreshTokenController)

module.exports = router