const fs = require('fs')

class User{

    constructor(username, pass){
        this.username = username
        this.pass = pass
    }

    
}

let user = new User('Admin', '123456')
let userObj = {user: user.username, pass: user.pass}
console.log(userObj);

let userJSONParsed = JSON.stringify(user)

console.log(userJSONParsed);
