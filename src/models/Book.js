class Book {
    constructor(bookId, title, author, isbn) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.status = "available";
        this.popularity = 0;
    }
}

module.exports = Book;
