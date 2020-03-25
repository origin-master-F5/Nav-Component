import React from 'react';
import RightListButton from './RightListButton.jsx';

const RecentlyViewedButtonItem = props => (
    <li>
        <RightListButton title="Recently Viewed" />
        {/* <div className="navbar-menu-box-right">
            <div className="navbar-shopping-history-container">
                <div className="navbar-carousel">
                    <div className="navbar-carousel-header">
                        <h2 className="navbar-carousel-header-content">
                            <span>
                                <img width="34" style={{ "margin-right": "10px", "margin-bottom": "3px", "height": "30px" }} />
                                You recently viewed
                                </span>
                        </h2>
                        <span className="navbar-carousel-header-link">
                            <a href="#" className="navbar-link">
                                See your full history&nbsp;
                                    <i className="navbar-caret-right" style={{ "font-size": ".4em" }}></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div> */}
    </li>
)

export default RecentlyViewedButtonItem;