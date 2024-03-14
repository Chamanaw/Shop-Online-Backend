const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./connectDatabase')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))


app.post('/signin', (request, response) => {
    const { username, password } = request.body
    try {
        connection.query("SELECT * FROM user WHERE user_name = ? AND password = ? ", [username, password], (err, result, fields) => {
            if (!err) {
                return response.send(result)
            }
            return response.send({ message:"no user" })
        })

    } catch (err) {
        throw err
    }
})

app.post('/signup', (request, response) => {
    const { username, password, email } = request.body
    try {
        connection.query("INSERT INTO user(user_name,password,email) VALUE(?,?,?)", [username, password, email], (err, result, fields) => {
            if (!err) {
                return response.status(201).json({ message: 'succeed' })
            }

            return response.status(400).send({message:`error ${err}`})
        })
    } catch (err) {
        throw err
    }

})

app.get('/search', (request, response) => {

})

app.get('/carts', (request, response) => {

})

app.get('/productdetail', (request, response) => {

})

app.post('/additem', (request, response) => {
    if (request.body) {
        dataTest.push(request.body)
    }
    response.json(dataTest)
})

app.listen(3000, () => {
    console.log('server runing')
})


