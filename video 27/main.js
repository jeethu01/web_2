// Install express js #92
// 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let siteName = "Puma"
    let sitedesc = "It is a brand"
  res.sendFile("views/index.ejs", {siteName: siteName, sitedesc: sitedesc})
})

app.get('/puma/:slug', (req, res)=>{
  let pumatitle = "The good company"
  let pumatext = "The good quality"
  res.render("views/puma.html", {pumatitle: 'pumatitle', pumatext: 'pumatext'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})