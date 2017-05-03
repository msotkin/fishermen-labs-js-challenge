const path = require('path')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const port = 3001

mongoose.connect('mongodb://msotkin:Locklock1@ds129031.mlab.com:29031/sotkin_sandbox')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type,' +
    'Access-Control-Request-Method, Access-Control-Request-Headers')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.use(require('./routes/products'))

app.all('/*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')))

app.listen(port, () => console.log(`API running on port ${port}`))
