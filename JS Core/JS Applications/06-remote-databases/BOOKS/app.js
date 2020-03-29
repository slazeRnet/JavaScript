import { apiKey } from './apiKey.js';
import { createBook, listAllBooks } from './requests.js';
import {appendBook, refreshTable} from './dom-operations.js'

//Load Books
export async function loadBooks() {
    
    let books = await listAllBooks()
        .then(b => {
           return b.json();
        })
        .then(b => {
           return b;

        });

        console.log(Object.values(books));
        
    if (books) {
        refreshTable();
        for (const book of Object.entries(books)) { //{title, author, isbn}
            let id = book[0];
            let title = book[1].title;
            let author = book[1].author;
            let isbn = book[1].isbn;
            appendBook(title, author, isbn, id)            
        }
    }
}

async function main() {
    // FORM for creating books
    let createBookForm = document.querySelector('form');
    let loadBooksButton = document.querySelector('#loadBooks');

    loadBooksButton.addEventListener('click', (e) => {
        e.preventDefault();
        loadBooks();
    })
    // Submit 
    let formButton = createBookForm.elements[3];
    formButton.addEventListener('click', async (e) => {
        
        e.preventDefault();
        let title = e.target.parentElement.elements['title'].value;
        let author = e.target.parentElement.elements['author'].value;
        let isbn = e.target.parentElement.elements['isbn'].value;

        let book = { title, author, isbn };
        let response = await createBook(book)
        .then(r => {
            return r.json();
        });
        //refresh table
        refreshTable();
        loadBooks();
    })

}

main();