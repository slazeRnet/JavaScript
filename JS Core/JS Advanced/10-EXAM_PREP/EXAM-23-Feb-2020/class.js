class Article {

    comments = [];
    likes = [];
    constructor(title, creator){
        this.title = title;
        this.creator  = creator ;
        // comments  = [];
        // likes = [];
    }
    get likes(){
        if(this.likes.length == 0){
            return `${this.title} has 0 likes`
        }
        if(this.likes.length == 1){
            return `${this.likes[0].username} likes this article!`; /// <=
        }
        return `${this.likes[0].username} and ${this.likes.length - 2} others like this article!`; ///<==
    }
    like(username){
        if(this.likes.some(u => u === username)){
            throw new Error("You can't like the same article twice!");
        }
        if(username === this.creator){
            throw new Error("You can't like your own articles!");
        }
        let likeObj = {username, condition: true};
        this.likes.push(likeObj);
        let message = `${username} liked ${this.title}!`;
        return message;
    }

    dislike(username){
        if(!this.likes.some(l => l.username === username)){
            throw new Error(`You can't dislike this article!`);
        }

        this.likes.filter(l => l.username === username).condition = false;
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id){
        if(id == undefined && this.comments.some(c => c.id != id)){

            let newId = this.comments.length - 1;
            let comment = { id: newId, username, content, replies: []};
            this.comments.push(comment);
            return`${username} commented on ${this.title}`;
        }
        if(this.comments.some(c => c.id == id)){

            let currentComment = this.comments.filter(c => c.id == id)[0];
            let newId = id + '.' + currentComment.replies.length - 1;
            let reply = {id: newId, username, content};
            currentComment.repliesToComment.push(reply);
            return`You replied successfully`;
        }
    }

    // toString(sortingType){
    //     let output;
    //     output+= `Title: ${this.title}\n`
    //     output+= `Creator: ${this.creator}\n`
    //     output+= `Likes: ${this.likes}\n`
    //     output+= `Comments:\n`
    //     let temp;
    //     if(sortingType === 'asc'){
    //         temp = this.comments.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    //     }
    //     if(sortingType === 'desc'){
    //         temp = this.comments.sort((a, b) => parseInt(a.id) - parseInt(b.id)).reverse();
    //     }
    //     if(sortingType === 'username'){
    //         temp = this.comments.sort((a, b) => a.username - b.username);
    //     }

    //     let commentsAndReplies = temp.reduce((a, c) => {
    //         let text = a + `-- ${c.id}. ${c.username}: ${c.content}\n`;
    //         if(c.replies.length > 0){
    //             text += c.replies.reduce((a2, c2) => {
    //                 return a2 + `--- ${c2.id}. ${c2.username}: ${c2.content}\n`;
    //             });
    //         }
    //         else{
    //             return text;
    //         }
    //     });

    //     output += commentsAndReplies.trim();
    // }


}
let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));