// pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom"; // For navigation

function NotFound() {
    return (
        <div className="not-found container mx-auto p-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
            <p className="text-xl mb-6">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;
