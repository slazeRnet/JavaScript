const express = require('express')

let mod  = function(){
    const app = express()
    
    app.use(express.static('public'))
    app.use(express.static('files'))
    
    app.listen(port, () =>{
        console.log('Listening on port: ' + port)
    })

}

module.exports = mod