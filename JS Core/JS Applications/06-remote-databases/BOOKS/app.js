function getAllBooks(){
    fetch('https://softuni008.firebaseio.com/.json')
    .then(x => x.json())
    .then(x =>{

      return x.books;

    }).catch(err => {
      throw new Error(`${err} : ${err.message}`);
        
    });
    
}

function loadBooks(){
    getAllBooks()
    .then(b => {
        console.log(b);
        
    })
}

function displayBook(book){
    let table = document.querySelector('body table');

    console.log(book);
    
}
let loadBooksButton = document.getElementById('loadBooks');

loadBooksButton.addEventListener('click', loadBooks);