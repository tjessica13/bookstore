"use client";

import { useState } from 'react';
import SearchBook from "./SearchBook";

const SearchBar = () => {

    const [book, setBook] = useState("");

    const handleSearch = () => {

    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__items">
                <SearchBook 
                book={book}
                setBook={setBook}
                />
            </div>
            <h1>{book}</h1>
        </form>
    );
}

export default SearchBar