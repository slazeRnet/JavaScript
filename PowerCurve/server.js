//import controllers from '../controllers/index.js'
const express = require('express')
// the DataBase is stored in JSON file
const fitnessLogs = require('./utils/data.json')
const pug = require('pug')
const app = express()
//script for loading the data 
let loadData = require('scripts/load-data.js');
var router = express.Router()
const port = 3000
const auth = true
//set the views and the template engine to Handlebars
app.set('views', './views')  
app.set('view engine', 'pug')
app.use(router)
app.get('/', async function (req, res) {
     res.render('home/home', fitnessLogs)

  })



app.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    res.send(`Search page ${keyword}`);
})

app.listen(port)