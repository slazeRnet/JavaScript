// // View engine and Routing engine
// const express = require('express')
// const app = express()
// const port = 3000
// var router = express.Router()
// const auth = true
// // FileSystem library
// //const fs = require('fs')
// //Controllers
// import controllers from './controllers/index.mjs'

// // the DataBase is stored in JSON file
// //var fitnessLogs
// // read the data synchronosly and store it in the var. If the file is corrupt throw err
// // var data = fs.readFile('./utils/data.json', 'utf8', (err, jsonString) => {
// //     if (err) {
// //           console.error("Error reading DataBase from disk:", err)
// //           return
// //       }
// //       try {
// //         console.log(jsonString);
        
// //         fitnessLogs = JSON.parse(jsonString)
// //       }
// //       catch(err) {
// //             console.error('Error parsing JSON string:', err)
// //         }
// //         })
// //         console.log(fitnessLogs);
        
// //set the views and the template engine to Handlebars
// app.set('views', './views')  
// app.set('view engine', 'pug')
// app.use(router)
// //
// app.on('ready', () => {
//     mainWindow = new BrowserWindow({
//         webPreferences: {
//             nodeIntegration: true
//         }
//     });
// });
// // Main
// app.get('/', (req, res) => {
//     res.code(200).send('Working!')
// })
// // Workouts Routing
// app.get('/workouts/:year/:month/:day', (req, res) => {

// })

// app.get('/search/:keyword', (req, res) => {
//     const keyword = req.params.keyword;
//     res.send(`Search page ${keyword}`);
// })

// app.listen(port)

const express = require('express');
const app = express();
const port = 3000;
var router = express.Router()
const auth = true
//FileSystem library
const fs = require('fs')
//Controllers
import controllers from './controllers/index.mjs'
app.get('/', (req, res) => {
    res.status(200).send(`Welcome to our app.`)
})
app.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    res.send(`Search page ${keyword}`);
})

app.listen(port)