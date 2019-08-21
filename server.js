const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 8000
const listener = () => {console.log(`Listening in on port ${port}`)}
app.listen(port, listener)

const router = express.Router();
const knex = require('./knex')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static('public'))

app.get("/api", function(req,res,next){
  res.send("hello from api")
})

app.use(function(req,res,next){
  res.status(404).json({error: {message: "404 not found"}})
});
