class User {
    posts = [];
    constructor(username, pass, email){
        this.username = username;
        this.pass = pass;
        this.email = email;
    }

     changeUsername(newUsername){
        this.username = newUsername;
        return newUsername;
    }

    newPost(topic, content){
        this.posts.push({topic, content});

        return {topic, content};
    }

    get posts(){
        return this.posts.length;
    }
}   

module.exports = User;

exports.printMail = () => { return this.mail };
let user2 = new User('admin', '123', 'admin@web.com' );

console.log(user2.username);
