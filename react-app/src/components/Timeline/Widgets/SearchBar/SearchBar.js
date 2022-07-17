import "./SearchBar.css";
import React from 'react'
import { FiSearch } from 'react-icons/fi';


const SearchBar = () => {
    return (
        <div className="search-wrap">
            <div className="search-first-half">
                <div className="searchbar-wrap">
                    <FiSearch className="search-icon" />
                    <input className="search-input" type="text" placeholder="Search Quitter"></input>
                </div>
            </div>
            <div className="search-second-half"></div>
        </div>
    )
}

export default SearchBar
