const cart = require('../services/cart.service')

async function get(req,res){
    try{
        const result = await cart.getCart(req.user)
        res.json(result)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

async function addItem(req,res){
    const {product_id} = req.body
    try{
        const result = await cart.addProduct(req.user,product_id)
        res.json(result)
    }catch(err){
        res.status(500).json({message:err.message})
    }   
}

async function deleteItem(req,res){
    const {product_id} = req.body
    try{
        const result = await cart.deleteProduct(req.user,product_id)
        res.json(result)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {get,addItem,deleteItem}
