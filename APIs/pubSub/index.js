let express = require('express')
let app = express();
const router = express.Router();
let mustache = require('mustache')
let path = require('path')
// let pubSub = require('pubSub')


const port = 3000;

app.get('/', function(req, res){
    // res.sendFile(path.join(__dirname + '/views/index.html'))
    res.send('All OK!')
})

app.listen(port) //() => { console.log(`Listening on port ${port}`)

