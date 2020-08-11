const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello world 11111!'))
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    res.send('User Info successfully')
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))