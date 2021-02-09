const express = require('express')
const app = express();

let mod = function() {
    const port = 3000;
    
    app.get('/', (req, res) => {
        res.send('Wellcome to Express!')
    })
    
    app.listen(port, () => {
        console.log('Listening on port: ' + port)
    })

}

// let mod = function(){
//     console.log('here')
// }
module.exports = mod


