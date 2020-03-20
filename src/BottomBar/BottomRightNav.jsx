import React from 'react';
import RightListItem from './RightListItem.jsx';
import AccountButtonItem from './AccountButtonItem.jsx';

const BottomRightNav = props => (
    <nav className="rightnavigation">
        <ul>    
            <AccountButtonItem />
            <RightListItem title="Recently Viewed" />
            <RightListItem title="Order Status" />
            <RightListItem title="Saved Items" />
        </ul>
    </nav>



)

export default BottomRightNav;