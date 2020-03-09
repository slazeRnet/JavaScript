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

function createPost(post){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: something went wrong!');
            }
        }, 1000);
    });
    
};




let post1 = {title: 'New post created', content:'this is a test'};

createPost(post1)
.then(getPosts)
.catch(err => console.log(err));

//Promise.all

let promise1 = Promise.resolve('Hello world!');
let promise2 = 10;
let promise3 = new Promise((resolve, reject) =>
setTimeout(resolve, 2000, 'Goodbye')
);
let promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(user => user.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

// async await

async function init(){ //  to use await we ne to declare the function with async keyword

    await createPost(post1); // we are waiting untill createPost gets resolved

    getPosts(); // after the resolution of createPost we run getPosts()
}

init();

// Async/ await/ fetch/

async function getUsers(){

    const dataRaw = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await dataRaw.json();
    
    jQuery.each(users, function(id, username, email) {
        document.body.innerHTML += $("#" + id).append(document.createTextNode(" - " + username));
      });
    //`<p>${JSON.stringify(users)}<p>`;
    
}

setTimeout(getUsers , 2000);