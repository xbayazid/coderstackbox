import React from 'react';
import './SearchBar.css'

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
    return (
        <div className='searcgBar-wrap '>
           <form onSubmit={formSubmit}>
            <input
             type="text"
             onChange={handleSearchKey} 
             placeholder="Search here" 
             value={value}   
             />

            {value && <span onClick={clearSearch}>X</span>}
            <button className="btn btn-secondary">Go</button>
           </form>
        </div>
    );
};

export default SearchBar;