// View engine and Routing engine
const express = require('express')
const pug = require('pug')
const app = express()
const port = 3001
var router = express.Router()
const auth = true
//import { print } from './utils/print-text-body.mjs'
//import controllers from '../controllers/index.js'

// the DataBase is stored in JSON file
var fitnessLogs// = require('./utils/data.json')
const fs = require('fs')
// read the data synchronosly and store it in the var. If the file is corrupt throw err
var data = fs.readFile('./utils/data.json', 'utf8', (err, jsonString) => {
    if (err) {
          console.error("Error reading DataBase from disk:", err)
          return
      }
      try {
        console.log(jsonString);
        
        fitnessLogs = JSON.parse(jsonString)
      }
      catch(err) {
            console.error('Error parsing JSON string:', err)
        }
        })
        //  print(fitnessLogs)
        console.log(fitnessLogs);
        
        //script for loading the data 
        //let loadData = require('scripts/load-data.js');
//set the views and the template engine to Handlebars
app.set('views', './views')  
app.set('view engine', 'pug')
app.use(router)
app.get('/', (req, res) => {
     res.render('home/home', fitnessLogs)

  })



app.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    res.send(`Search page ${keyword}`);
})

app.listen(port)