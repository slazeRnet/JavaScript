class User{

    constructor(username){
        this.username = username;
    }

    changeUsername(newUsername){
        this.username = newUsername;
    }
}


module.exports = User;