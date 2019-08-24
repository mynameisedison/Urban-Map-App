const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 5000

const router = express.Router();
const knex = require('./knex')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get("/api", function(req,res,next){
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/', (req,res,next) => {
  knex('surgerycenters')
  .then( results => {
    res.send(results);
  })
})

app.use(function(req,res,next){
  res.status(404).json({error: {message: "404 not found"}})
});
