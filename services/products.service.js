const connection = require('../services/db.service')

async function getMultiple() {
    const result = await connection.execute
        (
            `SELECT product.product_id,product.name,product.description,product.price,product.stock_quantity,product.color,
            product.memory,category.c_name,product.image
            FROM product 
            JOIN category 
            ON product.category_id = category.category_id`
        )
    return result
}

async function findPronduct(query) {
    const result = await connection.execute
        (
            `SELECT product.product_id,product.name,product.description,product.price,product.stock_quantity,product.color,
                product.memory,category.c_name,product.image FROM product
                JOIN category ON product.category_id = category.category_id 
                WHERE LOWER(REPLACE(name,' ','')) LIKE CONCAT('%' , ? , '%')`
            , [query]
        )
    return result
}

async function getOneProduct(query) {
    const result = await connection.execute("SELECT * FROM product WHERE LOWER(REPLACE(name,' ','')) = ? ",[query])
    return result
}

module.exports = { getMultiple, findPronduct , getOneProduct }