import { apiKey } from "./apiKey.js";

export function listAllBooks(){
    return fetch(apiKey + 'books.json')
}

export function createBook(books){
    return fetch(apiKey + 'books.json', {
        method: "POST",
        body: JSON.stringify(books)
    });
}

export function updateBook(id, book){
    return fetch(apiKey + `books/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(book)
    });
}

export function deleteBook(id){
    return fetch(apiKey + `books/${id}.json`, {
        method: "DELETE"
    })
}