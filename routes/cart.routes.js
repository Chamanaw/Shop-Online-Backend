const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cart.controller")
const checkAuthenticate =  require("../middlewares/checkAuthenticate")

router.get('/getcart',checkAuthenticate,cartController.get)
router.post('/addproduct',checkAuthenticate,cartController.addItem)
router.delete('/deleteitem',checkAuthenticate,cartController.deleteItem)

module.exports = router

