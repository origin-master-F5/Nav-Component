import React from 'react';
import AutoCompleteBox from '../AutoCompleteBox/AutoCompleteBox.jsx';

const SearchBar = props => (
    <div className="navbar-topbarmiddle-searchbar">
        <input placeholder="Search Best Buy" />
        <AutoCompleteBox />
        <button className="navbar-searchbutton">
            <span className="navbar-searchicon">
                <img src="https://origin-master.s3-us-west-1.amazonaws.com/search_icon.svg" />
            </span>
        </button>
    </div>
)

export default SearchBar;