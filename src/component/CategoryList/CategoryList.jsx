import React from "react";
import { Link } from "react-router-dom"; 


function CategoryList() {
    // Dummy categories
    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Mystery"];
    return (
        <div className="flex space-x-4">
            {categories.map(function (category, index) {
                return (
                    // Link to browse books by category
                    <Link
                        key={index}
                        to={`/books/${category.toLowerCase()}`} 
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        {category}
                    </Link>
                );
            })}
        </div>
    );
}

export default CategoryList;

// its simple compoennt that show all category on page and a link on each category...