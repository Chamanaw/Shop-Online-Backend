const products = require("../services/products.service")

async function getMultipleProducts(req, res) {
    try {
        const result = await products.getMultiple()
        res.json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function search(req, res) {
    const { keyword } = req.query
    const query = keyword.replace(/\s/g, "").toLowerCase()
    try {
        const result = await products.findPronduct(query)
        res.json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function getDetailProduct(req, res) {
    const { productname } = req.params
    const query = productname.replace(/\s/g, "").toLowerCase()
    try{
        const result = await products.getOneProduct(query)
        res.json(result)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}



module.exports = { getMultipleProducts, search ,getDetailProduct }