let posts = [
    {title: "Hey mom", content: 'content hello world'},
    {title: "Is me", content: 'content hello world'},
    {title: "The weather tommorow", content: 'content hello world'}
];

function getPosts(){

    setTimeout(() =>{

        let output = '';

        posts.forEach((post, index) =>{

            output += `<li>${post.title}<li>\b`
        });

        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post, callback){

    setTimeout(() =>{

        posts.push(post);

        callback();
    }, 2000);
};


let post1 = {title: 'New post created', content:'this is a test'};

createPost(post1, getPosts);