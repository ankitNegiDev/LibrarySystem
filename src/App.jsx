// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home page
import BrowseBooks from "./pages/BrowseBooks"; // Browse Books page
import BookDetails from "./pages/BookDetails"; // Book Details page
import AddBook from "./pages/AddBook"; // Add Book page
import NotFound from "./pages/NotFound"; // 404 page
import Navbar from "./component/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse-books" element={<BrowseBooks />} />
                <Route path="/books/:category" element={<BrowseBooks />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="*" element={<NotFound />} />{" "}
                Handle undefined routes
            </Routes>
        </Router>
    );
}

export default App;

// implement the lazy loading .... ()

