import React from 'react';

const BottomBar = props => (
    <div className="bottombar">
        <div className="searchbarcontainer">
            <input placeholder="Search Best Buy" />
            <button className="searchbutton">Search</button>
        </div>

        <div className="buttonscontainer">
            <button type="button" className="btn-unstyled"><span className="store-display-name">Culver City WestField</span></button>
            <button type="button">Cart</button>
        </div>
    </div>

)

export default BottomBar;