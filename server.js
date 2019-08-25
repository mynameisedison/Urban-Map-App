const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const db = require('./queries')
var cors = require('cors');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }))
app.use(cors())

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/surgerycenters', db.getUsers)

app.get('/surgerycenters/:id', db.getUserById)


app.use(function(req,res,next){
  res.status(404).json({error: {message: "404 not found"}})
})
