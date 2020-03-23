import React from 'react';
import LeftListItem from './LeftListItem.jsx'
import ProductsButton from '../buttons/ProductsButton.jsx';

const BottomLeftNav = props => (
    <nav className="leftnavigation">
        <ul className="itemlist">
            <ProductsButton active="active" />
            <LeftListItem title="Brands" />
            <LeftListItem title="Deals" />
            <LeftListItem title="Services" />
        </ul>
    </nav>
)

export default BottomLeftNav;