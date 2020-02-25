var books = [];
var bookTitle = "Tom Sawyer";
var author = "Mark Twain";
var foo = {};
foo[bookTitle] = author;

books.push(foo);

console.log("books: %s", JSON.stringify(books))

console.log(books);
