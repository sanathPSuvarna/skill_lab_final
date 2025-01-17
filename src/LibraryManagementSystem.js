const Book = require('./models/Book');
const BookInventory = require('./models/BookInventory');
const BookRequestQueue = require('./models/BookRequestQueue');
const BookBST = require('./models/BookBST');
const BookSorter = require('./services/BookSorter');


class LibraryManagementSystem {
    constructor() {
        this.inventory = new BookInventory();
        this.requestQueue = new BookRequestQueue();
        this.bookBST = new BookBST();
        this.sorter = BookSorter;
    }

    addNewBook(book) {
        this.inventory.addBook(book);
        this.bookBST.insert(book);
    }

    requestBook(studentId, bookId) {
        this.requestQueue.addRequest(studentId, bookId);
    }

    getPopularBooks() {
        return this.sorter.sortByPopularity(this.inventory.books);
    }

    searchBook(title) {
        return this.bookBST.search(title);
    }
    incrementBookPopularity(bookId) {
        const book = this.inventory.books.find(b => b.bookId === bookId);
        if (book) {
            book.popularity += 1;
            book.status = 'borrowed';
            return true;
        }
        return false;
    }
    
}
module.exports = {LibraryManagementSystem, Book};