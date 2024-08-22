import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList() {
    const { books } = useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return <BookShow  key={book.id} book={book}/>; //building a list of elements requires a key
    });
    
    return <div className="book-list">
        {renderedBooks}
    </div>
}

export default BookList;