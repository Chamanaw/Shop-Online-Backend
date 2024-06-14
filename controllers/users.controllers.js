const users = require("../services/users.service");
const bcrypt =require("bcrypt")

async function get(req,res) {
    try {
        const result = await users.getUser(req.user);
        res.json(result[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function create(req, res) {
    const { username, password, email } = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const result = await users.createUser(username, passwordHash, email)
        res.json({message:result})
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

async function updateUsername (req,res){
    const {newUsername} = req.body
    try{
        const result = await users.updateUsername(req.user,newUsername)
        res.json({message:result})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}


module.exports = { get, create , updateUsername };
