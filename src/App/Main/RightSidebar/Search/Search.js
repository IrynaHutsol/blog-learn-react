import React from 'react';
import './search.css';

const Search =()=> {
    return (
        <div className="search">
            <input type="text" placeholder="Search" className="pole"/>
            <input type="button" className="button-search"/>
        </div>
    );
}

export default Search;