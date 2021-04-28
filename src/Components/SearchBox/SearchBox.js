import React from 'react';
import './SearchBox.css';
const searchBox = ({onInputchange}) => {
    return(
        <div className = "search-container">
            <input onChange ={(event)=> onInputchange(event.target.value)}
             placeholder ="Type in the keywords"
              className="search-input"/>
        </div>
    );
};
export default searchBox;