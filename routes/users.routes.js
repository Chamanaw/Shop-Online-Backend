const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controllers')
const checkAuthenticate = require('../middlewares/checkAuthenticate')

router.get('/user',checkAuthenticate,usersController.get)
router.post('/signup',usersController.create)


module.exports = router