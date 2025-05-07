import { Link } from "react-router-dom";

function BookCard({book}){
    console.log("book is : ",book);

    return (
        <>
            <h1>Book Title : {book.title}</h1>
            <div>
                <p> author : {book.author}</p>
                <p>Description : {book.description}</p>
                <p>Rating : {book.rating}</p>
                <p>category: {book.category}</p>
                {/* <Link>Viewmore</Link> */}
                <a href="">view more</a>
            </div>
        </>
    );
}
export default BookCard;