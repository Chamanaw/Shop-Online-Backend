const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controllers')
const checkAuthenticate = require('../middlewares/checkAuthenticate')

router.get('/user',checkAuthenticate,usersController.get)
router.post('/signup',usersController.create)
router.patch('/updateusername',checkAuthenticate,usersController.updateUsername)
router.patch('/updatepassword',checkAuthenticate,usersController.changePassword)


module.exports = router