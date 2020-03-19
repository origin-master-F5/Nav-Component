import React from 'react';
import LeftListItem from './LeftListItem.jsx'

const BottomLeftNav = props => (
    <nav className="leftnavigation">
        <ul className="navbar-links">
            <LeftListItem title="Products" />
            <LeftListItem title="Brands" />
            <LeftListItem title="Deals" />
            <LeftListItem title="Services" />
        </ul>
    </nav>
)

export default BottomLeftNav;