// import { useEffect } from "react";
// import getBookCover from "../../utils/bookCover.mjs";
// function BookCardImage({book}){

//     useEffect( function callback(){
//         async function fetchBookCover(){
//             const coverImage = await getBookCover(book);
//             console.log(`${book}: ${coverImage}`);
//         }
//         fetchBookCover();
//     },[])


//     return(
//         <>
//             <h1>{book.title}</h1>
//             <div>
//                 <img src="" alt="" />
//             </div>
//         </>
//     );
// }
// export default BookCardImage;
import { useEffect, useState } from "react";
import getBookCover from "../../utils/bookCover.mjs";

function BookCardImage({ book }) {
    const [coverImage, setCoverImage] = useState("");

    useEffect(function () {
        async function fetchBookCover() {
            // Assuming getBookCover gives the book ID for Open Library URL
            const imageUrl = await getBookCover(book.title);
            console.log(`${book.title}: ${imageUrl}`);
            setCoverImage(imageUrl);
        }

        fetchBookCover();
    }, [book.title]);

    return (
        <>
            <h1>{book.title}</h1>
            <div>
                {coverImage ? (
                    <img src={coverImage} alt={book.title} style={{ width: '200px', height: 'auto' }} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default BookCardImage;


// simply importing the fuction of getting book cover from utils folder and then calling getcover function which is async function so we wrap it in useEffect..
// we are displaying like if coveriamge is loaded then show it else write loading .... we can implement a loader also .. but no nessessary ehrer.