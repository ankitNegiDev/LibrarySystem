import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import BookCard from '../component/BookCard/BookCard';
import SearchBar from '../component/SearchBar/SearchBar';
import BookCardImage from '../component/BookCard/BookCardImage';

function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector(function (state) { return state.books.items; });
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(function () {
        let filtered = books;

        if (category) {
            filtered = filtered.filter(function (book) {
                return book.category.toLowerCase() === category.toLowerCase();
            });
        }

        if (searchTerm) {
            filtered = filtered.filter(function (book) {
                return (
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
        }

        setFilteredBooks(filtered);
    }, [category, searchTerm, books]);

    return (
        <div style={{ padding: '1rem' }}>
            {/* <h1>Browse Books</h1> */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {filteredBooks.length > 0 ? (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {filteredBooks.map(function (book) {
                        return (
                            <div key={book.id}>
                                <BookCardImage book={book} />
                                <BookCard book={book} />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>No books found.</p>
            )}
        </div>
    );
}

export default BrowseBooks;


// this page has two usecase one is when user click on the category on that case we will show only that category books else if user directly click for browsebook then we will show all books .
// for category wise we again path params..