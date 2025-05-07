// components/SearchBar/SearchBar.jsx

// import React from "react";

// function SearchBar({ searchTerm, setSearchTerm }) {
//     return (
//         <div className="search-bar mb-6 flex justify-center">
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search by title or author"
//                 className="w-full sm:w-1/2 md:w-1/3 p-2 border border-gray-300 rounded"
//             />
//         </div>
//     );
// }

// export default  SearchBar;


function SearchBar({ searchTerm, setSearchTerm }) {
    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={handleChange}
            className="w-full p-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-800 placeholder-gray-400"
        />
    );
}

export default SearchBar;

// simple component means vased on what user is typeing on search bar based on that value we will render the books ..
// its responsibility of that compoent to pass the search term and set serch term which is calling search bar..


