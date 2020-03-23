import React from 'react';
import BottomRightNav from './BottomRightNav.jsx';
import BottomLeftNav from './BottomLeftNav.jsx';

const BottomBar = props => (
    <div className="navbar-bottombar">
        <div className="container">
            <BottomLeftNav />
            <BottomRightNav />
        </div>
        

    </div>

)

export default BottomBar;