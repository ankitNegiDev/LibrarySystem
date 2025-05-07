// import { Link } from "react-router-dom";
// import BrowseBooks from "../../pages/BrowseBooks";
// function Navbar({books}){
//     // home,browseBooks,addbooks

//     return (
//         <nav>
//             {/* <Link to="/" >Home</Link>
//             <Link to="/books/Fiction" >Browse Books</Link>
//             <Link to="/add-book">Add Book</Link> */}
//             <a href="/">Home</a>
//             {books}
//             {/* <Link to="/browse" > browse</Link> */}

//         </nav>
//     );
// }
// export default Navbar;

// // we need a state ... i do something like ... inside link a button when user click on browserbook button i will pass the filtered book by category.. means 1st fiction,non-fiction etc... (i have to option either i write the filtering logic in navbar which i think is not good , or i can write filtering logic in browsebooks...)

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/browse-books" style={{ marginRight: '1rem' }}>Browse Books</Link>
            <Link to="/add-book">Add Book</Link>
        </nav>
    );
}

export default Navbar;


// its simple ocmponent that will show the links to our diff pages .. like home , /brose-books, /add-book etc...