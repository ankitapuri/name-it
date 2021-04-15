import React from 'react';
import './SearchBox.css';
const searchBox = () => {
    return(
        <div className = "search-container">
            <input placeholder ="Type in the keywords" className="search-input"/>
        </div>
    );
};
export default searchBox;