import React from 'react';

const BottomNavBar = props => (
    <div className="navbar bottomnavbar">
            <ul className="navbar-links">
                <li><a href="#">Products</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <ul className="navbar-links">
                <li><a href="#">Account</a></li>
                <li><a href="#">Recently Viewed</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Saved Items</a></li>
            </ul>    
    </div>
)

export default BottomNavBar;