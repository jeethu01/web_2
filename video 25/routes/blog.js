const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('blogss home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})
router.get('/aboutPost/:slug', (req, res) => {
  res.send(`fetch the post for blog in the ${req.params.slug}`)
})

module.exports = router