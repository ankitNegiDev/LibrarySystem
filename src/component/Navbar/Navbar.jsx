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

// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
//             <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
//             <Link to="/browse-books" style={{ marginRight: '1rem' }}>Browse Books</Link>
//             <Link to="/add-book">Add Book</Link>
//         </nav>
//     );
// }
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full top-0 left-0 bg-gradient-to-r from-blue-200 via-violet-300 to-indigo-400 p-4 shadow-lg z-10"> 
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-4xl font-bold text-gray-800">
                    <Link to="/" className="hover:text-blue-500">
                        📘 Book Library
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-8 w-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex space-x-8">
                    {/* Home Link */}
                    <Link
                        to="/"
                        className="text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700 hover:scale-110"
                    >
                        🏠 Home
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-full group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>

                    {/* Browse Books Link */}
                    <Link
                        to="/browse-books"
                        className="text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700 hover:scale-110"
                    >
                        📚 Browse Books
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-full group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>

                    {/* Add Book Link */}
                    <Link
                        to="/add-book"
                        className="text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700 hover:scale-110"
                    >
                        ➕ Add Book
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-full group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div
                className={`lg:hidden bg-gradient-to-r from-blue-200 via-violet-300 to-indigo-400 p-1 transition-all transform ${isOpen ? 'max-h-screen' : 'max-h-0'
                    } overflow-hidden`}
            >
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700"
                        onClick={toggleMenu}
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-[3.2rem] group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>

                    <Link
                        to="/browse-books"
                        className=" font-medium block  text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700"
                        onClick={toggleMenu}
                    >
                        Browse Books
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-[7.2rem] group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>

                    <Link
                        to="/add-book"
                        className=" font-medium block relative group text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700 "
                        onClick={toggleMenu}
                    >
                        Add Book
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-[5.1rem] group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;






// its simple ocmponent that will show the links to our diff pages .. like home , /brose-books, /add-book etc...


// 