const token = require("../heplers/createToken")
const checkRefreshToken = require("../middlewares/checkRefreshToken")

function refreshToken(req,res){
    const newAccessToken = token.createAccessToken(req.user)
    const newRefreshToken = token.createRefreshToken(req.user)
    res.json({accessToken:newAccessToken,refreshToken:newRefreshToken})
}
module.exports =  refreshToken