const jwt = require("jsonwebtoken")

function checkAuthenticate (req,res,next){
    try{
        const token = req.headers.authorization.split(' ')[1]
        const {user_id} = jwt.verify(token,process.env.ACCESS_TOKEN)
        req.user = user_id
        next()
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
}

module.exports = checkAuthenticate