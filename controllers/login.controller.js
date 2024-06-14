const { findUser } = require("../services/users.service");
const bcrypt = require("bcrypt");
const token = require("../heplers/createToken");

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const result = await findUser(username);
        const match = result
            ? await bcrypt.compare(password,result.password)
            : false;
        if (!match) {
            return res
                .status(404)
                .json({ status: "error", message: "user not find" });
        }
        const { user_id } = result;
        const accessToken = token.createAccessToken(user_id);
        const refreshToken = token.createRefreshToken(user_id);
        res.json({ status: "success", accessToken, refreshToken });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = login;
