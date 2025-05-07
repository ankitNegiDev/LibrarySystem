// const getBookCover = async (bookTitle) => {
//     const query = bookTitle.replace(/\s+/g, '+'); // Format title for URL
//     const url = `https://covers.openlibrary.org/b/id/${query}-L.jpg`;
//     const response = await fetch(url);
//     if (response.ok) {
//         return response.url;
//     } else {
//         return 'fallback-image-url'; // Fallback image URL if no cover is found
//     }
// };



// export default getBookCover;


async function getBookCover(bookTitle) {
    const query = bookTitle.replace(/\s+/g, '+');
    const searchUrl = `https://openlibrary.org/search.json?title=${query}`;

    try {
        const response = await fetch(searchUrl);
        const data = await response.json();

        // Check if we got a valid result and extract the ID
        if (data.docs && data.docs.length > 0) {
            // Getting cover image ID (if available)
            const bookId = data.docs[0].cover_i; 
            if (bookId) {
                return `https://covers.openlibrary.org/b/id/${bookId}-L.jpg`;
            }
        }
        // we can  give any url here ...
        return 'fallback-image-url'; 
    } catch (error) {
        console.error('Error fetching book cover:', error);
        // same if any error occ we can give here a custom url of our image...
        return 'fallback-image-url';
    }
}

export default getBookCover;

// calling the free api for getting the book cover....
// check why default image is applied... without even setting urll because of book tile.