import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCardImage from "../component/BookCard/BookCardImage";

function BookDetails() {
    // collecting the id from the url (its non-sensitive info so we can use path params )
    const { id } = useParams(); 
    const books = useSelector(function (state) {
        return state.books.items;
    });

    // on basis of id we will will fetch the book detials..
    const book = books.find(function (b) {
        return String(b.id) === id;
    });

    if (!book) {
        return <p className="text-center text-xl">Book not found.</p>;
    }

    return (
        <>
            <div>
                <BookCardImage book={book} />
            </div>
            <div className="container mx-auto p-8">
                {/* <h1 className="text-4xl font-bold mb-4">{book.title}</h1> */}
                <p className="text-lg">Author: {book.author}</p>
                <p className="text-lg">Category: {book.category}</p>
                <p className="text-lg">Rating: {book.rating}</p>
                <p className="mt-4">{book.description}</p>

                <Link
                    to="/browse-books"
                    className="mt-6 inline-block text-blue-500 hover:underline"
                >
                    Back to Browse
                </Link>
            </div>
        </>
    );
}

export default BookDetails;

// its simple based on id we will fetch the books detials ... and for book detials we have component call bookcard and for image we have bookcardimage.