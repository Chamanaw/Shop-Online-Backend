const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controllers')
const checkAuthenticate = require('../middlewares/checkAuthenticate')

router.get('/getuser',checkAuthenticate,usersController.get)
router.post('/signup',usersController.create)
router.patch('/updateusername',checkAuthenticate,usersController.changeUsername)
router.patch('/updatepassword',checkAuthenticate,usersController.changePassword)
router.patch('/updateEmail',checkAuthenticate,usersController.changeEmail)

module.exports = router