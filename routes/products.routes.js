const express = require("express")
const router = express.Router()
const productsController =  require("../controllers/products.controller")

router.get('/allproduct',productsController.getMultipleProducts)
router.get('/search',productsController.search)
router.get('/:productname',productsController.getDetailProduct)

module.exports = router