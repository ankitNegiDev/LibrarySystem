import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../component/BookCard/BookCard';
import BookCardImage from '../component/BookCard/BookCardImage';

function Home() {
    const books = useSelector(function (state) {
        return state.books.items;
    });

    const categories = [...new Set(books.map(function (book) {
        return book.category;
    }))];

    const popularBooks = books.slice(0, 30); // Assuming first 3 are popular

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Welcome to the Book Library</h1>
            <h2>Categories</h2>
            <ul>
                {categories.map(function (category) {
                    return (
                        <li key={category}>
                            <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
                        </li>
                    );
                })}
            </ul>
            <h2>Popular Books</h2>
            <ul>
                {popularBooks.map(function (book) {
                    return (
                        <li key={book.id}>
                            {/* <BookCard book={book} /> */}
                            <Link to={`/book-details/${book.id}`}>
                                {/* {book.title} */}
                                <BookCardImage book={book} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home;

// at home we ahve to show navbar , category and popular books ... for popular books we selected  books from 0 to 20 or we can create a random function of a random range .... (check later)
