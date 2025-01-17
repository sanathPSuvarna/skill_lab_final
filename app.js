const express = require('express');
const app = express();
const { LibraryManagementSystem, Book } = require('./src/LibraryManagementSystem');

// Initialize library system
const library = new LibraryManagementSystem();

app.use(express.json());


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// Routes
app.get('/books', (req, res) => {
    res.json(library.inventory.books);
});

app.post('/books', (req, res) => {
    const { bookId, title, author, isbn } = req.body;
    const book = new Book(bookId, title, author, isbn);
    library.addNewBook(book);
    res.status(201).json(book);
});

app.get('/books/search', (req, res) => {
    const { title } = req.query;
    const book = library.searchBook(title);
    res.json(book);
});

app.post('/books/request', (req, res) => {
    const { studentId, bookId } = req.body;
    library.requestBook(studentId, bookId);
    res.status(201).json({ message: 'Request added successfully' });
});

app.post('/books/:bookId/borrow', (req, res) => {
    const bookId = parseInt(req.params.bookId); // Convert string to number
    const success = library.incrementBookPopularity(bookId);
    if (success) {
        res.json({ message: 'Book borrowed successfully', status: 'success' });
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});
app.get('/books/popular', (req, res) => {
    const popularBooks = library.getPopularBooks();
    res.json(popularBooks);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
