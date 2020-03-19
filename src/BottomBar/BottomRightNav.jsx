import React from 'react';
import RightListItem from './RightListItem.jsx';

const BottomRightNav = props => (
    <nav className="rightnavigation">
        <ul className="navbar-links">
            <RightListItem title="Account" />
            <RightListItem title="Recently Viewed" />
            <RightListItem title="Order Status" />
            <RightListItem title="Saved Items" />
        </ul>
    </nav>



)

export default BottomRightNav;