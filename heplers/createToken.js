const jwt = require("jsonwebtoken")

function createAccessToken (user){
   return jwt.sign({user_id:user},process.env.ACCESS_TOKEN,{expiresIn:"1h"})
}

function createRefreshToken (user){
    return jwt.sign({user_id:user},process.env.REFRESH_TOKEN,{expiresIn:"1d"})
}

module.exports = {createAccessToken,createRefreshToken}