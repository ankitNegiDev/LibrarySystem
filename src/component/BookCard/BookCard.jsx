import React from "react";
import { Link } from "react-router-dom";

function BookCard(props) {
    const book = props.book;

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            {/* <h2 className="text-xl font-semibold mb-2">{book.title}</h2> */}
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Category: {book.category}</p>
            <p className="text-gray-600">Rating: {book.rating}</p>

            {/* View Details link */}
            <Link
                to={`/book-details/${book.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
            >
                View Details
            </Link>
        </div>
    );
}

export default BookCard;

// this component will show the book details not the image because for that we create another compo which is bookcard image.
// we will use it whenever we need t odisplay book info.