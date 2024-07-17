//Install express js @4 and nodemon


const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

// app.use(express.static("public"))

//This is middleware 1
//middle ware 1 is a logger for our application
app.use((req, res, next) => {
    fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    req.harry = "I am jeethu bhai "
    // res.send('Hacked by Middleware1')
    next();
})
//This is middleware 2
app.use((req, res, next) => {
    console.log('M2')
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World!' + req.harry)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})