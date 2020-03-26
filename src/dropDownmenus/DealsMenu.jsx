import React from 'react';
import MenuBox from './MenuBox.jsx'
import MenuBoxSeperator from './MenuBoxSeperator.jsx';
import CloseItem from './CloseItem.jsx';


const DealsMenu = props => (
            <div className={"menu-box-left menu-products "+props.active} style={{"left": "263px"}}>

                <div className="flyout-animation">
                    <nav>
                        <div className="flyout-content">
                            <ul className="header-menu header-menu-visible">
                                <MenuBox items={["Top Deals", "Deal of the Day", "Member Offers", "Student Deals", "Best Buy Outlet", "Apple Shopping Event"]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Featured Brands" items={["Insignia", "Lenovo", "LG", "Nikon", "Bose", "Canon", "Epson", "GoPro", "HP", "All Brands"]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Specialty Shops" items={["Magnolia Audio & Video", "Pacific Kitchen & Home", "Camera Experience Shop"]} />
                                <CloseItem />

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        )

export default DealsMenu;

