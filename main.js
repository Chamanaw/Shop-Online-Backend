const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require("./routes/users.routes")
const loginRouter = require("./routes/login.routes")
const productsRouter = require("./routes/products.routes")
const refreshTokenRouter = require("./routes/authen.routes")
const cartRouter = require("./routes/cart.routes")
require('dotenv').config()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.use('/api',refreshTokenRouter)
app.use('/api',userRouter)
app.use('/api',productsRouter)
app.use('/api',loginRouter)
app.use('/api',cartRouter)


app.listen(port)





