// View engine and Routing engine
const requirejs = require('requirejs')
const express = require('express')
var router = express.Router()
const app = express()
const port = 3000
const auth = true
// fetch API for HTTP requests
const fetch = require('node-fetch');
// FileSystem library
//const fs = require('fs')
//Controllers
const controllers = require('./controllers/index.js')

app.set('view engine', 'pug')
app.use(router)
// Main
app.get('/', controllers.home.get.home)
// Workouts Routing
app.get('/workouts/:year/:month/:day', (req, res) => {

})

app.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    res.send(`Search page ${keyword}`);
})

app.listen(port)

// const requirejs = require('requirejs')
// const controllers = require('./controllers/index.js')
// const express = require('express');
// const app = express();
// const port = 3000;
// var router = express.Router()
// const auth = true
// //FileSystem library
// const fs = require('fs')
// //Controllers
// app.get('/', controllers.home.get.home)
// app.get('/search/:keyword', (req, res) => {
//     const keyword = req.params.keyword;
//     res.send(`Search page ${keyword}`);
// })

// app.listen(port)