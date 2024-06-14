const connectDatabase = require("../services/db.service");

async function getUser(user) {
  const connection = await connectDatabase();
  const [result] = await connection.query(
    "SELECT  user_name , email, image FROM user WHERE user_id = ?",
    [user]
  )
  return result ? result : null;
}

async function findUser(username) {
  const connection = await connectDatabase();
  const [result] = await connection.query(
    "SELECT user_id,password FROM user WHERE user_name = ? ",
    [username]
  );
  return result.length != 0 ? result[0] : null;
}

async function createUser(username, password, email) {
  const connection = await connectDatabase();
  const [result] = await connection.query(
    "INSERT INTO user(user_name,password,email) VALUE(?,?,?)",
    [username, password, email]
  );
  return result.affectedRows ? "Created successfully" : "Error in creating ";
}

module.exports = { getUser, findUser ,createUser};
