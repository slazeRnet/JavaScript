let express = require('express')
let app = express();
const router = express.Router();
let path = require('path')
const port = 3000;
// let pubSub = require('pubSub')

app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    // res.sendFile(path.join(__dirname + '/views/index.html'))
    res.render('index')
})

app.listen(port) //() => { console.log(`Listening on port ${port}`)

