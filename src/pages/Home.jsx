import BookCard from "../component/BookCard/BookCard";
import CategoryList from "../component/CategoryList/CategoryList";
import Navbar from "../component/Navbar/Navbar";

function Home() {
    let books = [
        {
            id: 1,
            title: "The Time Machine",
            author: "H.G. Wells",
            description: "A science fiction classic.",
            rating: 4.2,
            category: "Sci-Fi",
        },
        {
            id: 2,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            description: "A brief history of humankind.",
            rating: 4.5,
            category: "Non-Fiction",
        },
        {
            id: 2,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            description: "A brief history of humankind.",
            rating: 4.8,
            category: "Non-Fiction",
        },
    ];
    let popularBooks = books.filter(function callback(book) {
        if (book.rating > 4) {
            return true;
        } else {
            return false;
        }
    });

    return (
        <>
            <h1>Welcome to Bingolive online library system</h1>
            <Navbar books={books}/>
            <div>
                <h2>Books Category</h2>
                <CategoryList books={books} />
                {popularBooks.map(function callback(book) {
                    return <BookCard book={book} />;
                })}
                {/* <BookCard book={books[0]}/> */}
            </div>
        </>
    );
}
export default Home;
