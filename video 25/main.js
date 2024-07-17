//Install npm i express@4

const express = require('express')
const blog = require('./routes/blog')


const app = express()
const port = 3000



app.use(express.static("public"))

app.use('/blog' , blog)

app.get('/', (req, res) => {
    console.log("This is a get request")
    res.send('Hello World!')
})
app.get('/index', (req, res)=>{
    console.log("This is a getfile request")
    res.sendFile('templates/index.html', {root: __dirname})
})

app.post('/', (req, res) => {
    console.log("This is a post request")
    res.send('Hello post World!')
})
app.put('/', (req, res) => {
    console.log("This is a put request")
    res.send('Hello put World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})