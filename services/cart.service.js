const connectDatabase = require("./db.service");

async function getCart(user) {
  const connection = connectDatabase();
  const [result] = await connection.query(
    `
                SELECT product.* FROM user
                JOIN cart_product ON user.user_id = cart_product.user_id
                JOIN product ON cart_product.product_id = product.product_id
                WHERE user.user_id = ?
            `,
    user
  );

  return result;
}

async function addProduct(user, product_id) {
  const connection = await connectDatabase();
  const [result] = await connection.query(
    "INSERT INTO cart_product(user_id,product_id) VALUE(?,?)",
    [user, product_id]
  );
  return result.affectedRows ? "Add product Success" : "Add product Error";
}

async function deleteProduct(user,product_id) {
  const connection = await connectDatabase(user, product_id);
  const [result] = await connection.query(
    "DELETE FROM cart_product WHERE user_id = ? AND product_id = ? ",
    [user, product_id]
  );
  return result.affectedRows ? "delete success" : "delete error"
}

module.exports = {getCart,addProduct,deleteProduct}
