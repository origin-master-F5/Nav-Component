import React from 'react';

const SearchBar = props => (
    <div className="navbar-topbarmiddle-searchbar">
        <input placeholder="Search Best Buy" />
        <button className="navbar-searchbutton">
            <span className="navbar-searchicon">
                <img src="https://origin-master.s3-us-west-1.amazonaws.com/search_icon.svg" />
            </span>
        </button>
    </div>
)

export default SearchBar;