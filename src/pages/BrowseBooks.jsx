import BookCard from "../component/BookCard/BookCard";

function BrowseBooks({ books }) {
    // this is books array i need to filter out each category...
    let fiction = [];
    let science = [];

    fiction = books.filter(function callback(book) {
        if (book.category === "Non-Fiction") {
            return true;
        } else {
            false;
        }
    });
    science = books.filter(function callback(book) {
        if (book.category === "Sci-Fi") {
            return true;
        } else {
            false;
        }
    });
    return (
        <>
            <div>
                {fiction.map(function callback(book) {
                    <BookCard book={book} />;
                })}
            </div>
            <div>
                {science.map(function callback(book) {
                    <BookCard book={book} />;
                })}
            </div>
        </>
    );
}
export default BrowseBooks;
