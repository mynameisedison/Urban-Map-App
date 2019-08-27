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
  response.json({ info: 'Hi I am a REST API' })
})

app.get('/surgerycenters', db.getSurgeryCenters)

app.get('/districts', db.getDistricts)

app.get('/surgerycenters/:id', db.getSurgeryCentersById)

app.get('/disctricts/:id',db.getDistrictById)


app.use(function(req,res,next){
  res.status(404).json({error: {message: "404 not found"}})
})
