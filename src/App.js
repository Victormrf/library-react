import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
    );
}

export default App;

//==================================//
// Updating an array/object element //
//==================================//
// Array:
// 1) Create a new array 
// 2) Copy all the elements from old array
// 3) Add new element to end
// 4) Apply that new array through the 'set' function