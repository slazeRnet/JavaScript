import { deleteBook, updateBook } from "./requests.js";
import {loadBooks} from './app.js'

export function appendBook(title, author, isbn, id){
    let tbody = document.querySelector('tbody');
    console.log(tbody);
    
    let row = document.createElement('tr');
    let columnTitle = document.createElement('td');
    let columnAuthor = document.createElement('td');
    let columnIsbn = document.createElement('td');
    let columnOperations = document.createElement('td');
    //set values for each column
    columnTitle.innerText = title;
    columnAuthor.innerText = author;
    columnIsbn.innerText = isbn;
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';
    //events for each button
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        let bookId = id;
        deleteBook(bookId).then(() => {
            refreshTable();
            loadBooks();

        });
    });
    editButton.addEventListener('click', (e) => {
        e.preventDefault();

    });
    columnOperations.appendChild(editButton);
    columnOperations.appendChild(deleteButton);
    // append row
    row.appendChild(columnTitle);
    row.appendChild(columnAuthor);
    row.appendChild(columnIsbn);
    row.appendChild(columnOperations);
    tbody.appendChild(row);
}

export function refreshTable(){
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
}