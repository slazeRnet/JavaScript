function solve(){

    class Post{

        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            let output = `Post: ${this.title}`;
            output += `\nContent: ${this.content}`;

            return output;
        }
    }

    class SocialMediaPost extends Post{

        constructor(title, content, likes, dislikes ){

            super(title, content);
            this.comments = [];
            this.likes = likes;
            this.dislikes = dislikes;

        }

        addComment(comment){
            this.comments.push(comment)
        }

        toString(){
            let output = super.toString();
            output += `\nRating: ${this.likes - this.dislikes}`;

            if(this.comments.length > 0){
                output += `\nComments:`
                output += this.comments.reduce((acc, current, index) => {
                    if(index == 1){
                        acc = '\n * ' + acc;
                        return acc + '\n * ' + current;

                    }
                    else{
                        return acc + '\n * ' + current;
                        
                    }
                });

            }

            return output.trim();
        }
    }

    class BlogPost extends Post{

        constructor(title, content, views){

            super(title, content);
            this.views = views;
        }

        view(){
            
            this.views++;

            return this;
        }

        toString(){

            let output = super.toString() + '\n';

            output += `Views: ${this.views}`;

            return output;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let result = solve();

let post = new result.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new result.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let bp = new result.BlogPost('title', 'content', 1);

bp.view().view().view();

console.log(bp.views);
console.log(bp.toString());


